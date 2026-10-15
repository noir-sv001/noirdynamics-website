import { createHash } from "node:crypto";
export type Locale = "de" | "en";

export type LegalDocumentType = "impressum" | "datenschutz";

export type LegalHubDocument = {
  html: string;
  revisionId?: string;
  updatedAt?: string;
  checksum?: string;
  title?: string;
  country?: string;
  language?: string;
  text?: string;
  pdfUrl?: string;
};

const LEGAL_STORE_PREFIX = "noir-dynamics:legal:v1";

function getStoreConfig() {
  const url =
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL?.trim() ??
    process.env.UPSTASH_REDIS_REST_URL?.trim();

  const token =
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN?.trim() ??
    process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  if (!url || !token) return null;

  return {
    url: url.replace(/\/$/, ""),
    token,
  };
}

export function isLegalStoreConfigured() {
  return Boolean(getStoreConfig());
}

function getLegalStoreKey(
  type: LegalDocumentType,
  locale: Locale,
) {
  return `${LEGAL_STORE_PREFIX}:${type}:${locale}`;
}

async function runRedisCommand<T>(
  command: unknown[],
): Promise<T> {
  const config = getStoreConfig();

  if (!config) {
    throw new Error(
      "NOIR DYNAMICS legal store is not configured.",
    );
  }

  const response = await fetch(
    config.url,
    {
      method: "POST",
      headers: {
        Authorization:
          `Bearer ${config.token}`,
        "Content-Type":
          "application/json",
        Accept:
          "application/json",
      },
      body: JSON.stringify(command),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `NOIR DYNAMICS legal store request failed with status ${response.status}.`,
    );
  }

  const payload =
    (await response.json()) as {
      result?: T;
      error?: string;
    };

  if (payload.error) {
    throw new Error(
      `NOIR DYNAMICS legal store error: ${payload.error}`,
    );
  }

  return payload.result as T;
}

function sanitizeLegalHtml(
  html: string,
) {
  const withoutDangerousBlocks =
    html
      .replace(
        /<!--[^]*?-->/g,
        "",
      )
      .replace(
        /<(script|style|iframe|object|embed|form|svg|math)\b[^>]*>[^]*?<\/\1\s*>/gi,
        "",
      )
      .replace(
        /<(script|style|iframe|object|embed|form|input|button|svg|math)\b[^>]*\/?>/gi,
        "",
      );

  const allowed = new Set([
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "h1",
    "h2",
    "h3",
    "h4",
    "ul",
    "ol",
    "li",
    "a",
    "span",
    "div",
    "section",
    "address",
    "hr",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
  ]);

  return withoutDangerousBlocks.replace(
    /<\/?([a-z0-9-]+)([^>]*)>/gi,
    (
      full,
      rawTag: string,
      rawAttrs: string,
    ) => {
      const tag =
        rawTag.toLowerCase();

      if (!allowed.has(tag)) {
        return "";
      }

      if (
        full.startsWith("</")
      ) {
        return `</${tag}>`;
      }

      if (
        tag === "br" ||
        tag === "hr"
      ) {
        return `<${tag}>`;
      }

      if (tag !== "a") {
        return `<${tag}>`;
      }

      const hrefMatch =
        rawAttrs.match(
          /\bhref\s*=\s*(["'])(.*?)\1/i,
        );

      if (!hrefMatch) {
        return "<a>";
      }

      const href =
        hrefMatch[2].trim();

      const safeHref =
        /^(https?:\/\/|mailto:)/i.test(
          href,
        )
          ? href
          : "";

      if (!safeHref) {
        return "<a>";
      }

      const escapedHref =
        safeHref
          .replace(
            /&/g,
            "&amp;",
          )
          .replace(
            /"/g,
            "&quot;",
          );

      return `<a href="${escapedHref}" rel="noopener noreferrer">`;
    },
  );
}

function normalizeStoredDocument(
  value: unknown,
): LegalHubDocument | null {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return null;
  }

  const document =
    value as Record<
      string,
      unknown
    >;

  if (
    typeof document.html !==
      "string" ||
    !document.html.trim()
  ) {
    return null;
  }

  return {
    html: sanitizeLegalHtml(
      document.html,
    ),
    revisionId:
      typeof document.revisionId ===
      "string"
        ? document.revisionId
        : undefined,
    updatedAt:
      typeof document.updatedAt ===
      "string"
        ? document.updatedAt
        : undefined,
    checksum:
      typeof document.checksum ===
      "string"
        ? document.checksum
        : undefined,
    title:
      typeof document.title ===
      "string"
        ? document.title
        : undefined,
    country:
      typeof document.country ===
      "string"
        ? document.country
        : undefined,
    language:
      typeof document.language ===
      "string"
        ? document.language
        : undefined,
    text:
      typeof document.text ===
      "string"
        ? document.text
        : undefined,
    pdfUrl:
      typeof document.pdfUrl ===
      "string"
        ? document.pdfUrl
        : undefined,
  };
}

export async function saveLegalHubDocument(
  type: LegalDocumentType,
  locale: Locale,
  input: {
    html: string;
    title?: string;
    country?: string;
    text?: string;
    pdfUrl?: string;
  },
): Promise<LegalHubDocument> {
  const html =
    sanitizeLegalHtml(
      input.html,
    );

  if (!html.trim()) {
    throw new Error(
      "Legal HTML is empty after sanitisation.",
    );
  }

  const checksum =
    createHash("sha256")
      .update(
        html,
        "utf8",
      )
      .digest("hex");

  const updatedAt =
    new Date().toISOString();

  const document: LegalHubDocument =
    {
      html,
      revisionId:
        checksum.slice(0, 16),
      updatedAt,
      checksum,
      title: input.title,
      country: input.country,
      language: locale,
      text: input.text,
      pdfUrl: input.pdfUrl,
    };

  await runRedisCommand<string>([
    "SET",
    getLegalStoreKey(
      type,
      locale,
    ),
    JSON.stringify(document),
  ]);

  return document;
}

export async function getLegalHubDocument(
  type: LegalDocumentType,
  locale: Locale,
): Promise<LegalHubDocument | null> {
  if (
    !isLegalStoreConfigured()
  ) {
    return null;
  }

  try {
    const stored =
      await runRedisCommand<
        string | null
      >([
        "GET",
        getLegalStoreKey(
          type,
          locale,
        ),
      ]);

    if (!stored) {
      return null;
    }

    return normalizeStoredDocument(
      JSON.parse(stored),
    );
  } catch (error) {
    console.error(
      "NOIR DYNAMICS legal store read failed",
      error,
    );

    return null;
  }
}
import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  isLegalStoreConfigured,
  saveLegalHubDocument,
  type LegalDocumentType,
} from "@/lib/legal-store";
import type { Locale } from "@/lib/legal-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_VERSION = "1.0";
const SHOP_VERSION = "1.0";
const MODULE_VERSION = "1.0";
const ACCOUNT_ID = "0";

const SUPPORTED_LOCALES = new Set<Locale>([
  "de",
  "en",
]);

const SUPPORTED_COUNTRIES = new Set([
  "DE",
]);

const SUPPORTED_DOCUMENT_TYPES =
  new Set<LegalDocumentType>([
    "impressum",
    "datenschutz",
  ]);

const LEGAL_BASE_PATHS = {
  impressum: "/imprint",
  datenschutz: "/privacy",
} satisfies Record<LegalDocumentType, string>;

type LtiErrorCode =
  | 1
  | 3
  | 4
  | 6
  | 9
  | 10
  | 11
  | 12
  | 17
  | 18
  | 50
  | 80
  | 82;

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function xmlResponse(
  body: string,
  status = 200,
) {
  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n${body}`,
    {
      status,
      headers: {
        "Content-Type":
          "text/xml; charset=utf-8",
        "Cache-Control":
          "no-store, max-age=0",
        "X-Content-Type-Options":
          "nosniff",
      },
    },
  );
}

function successResponse(extra = "") {
  return xmlResponse(
    `<response>
  <status>success</status>
  <meta_shopversion>${SHOP_VERSION}</meta_shopversion>
  <meta_modulversion>${MODULE_VERSION}</meta_modulversion>${extra}
</response>`,
  );
}

function errorResponse(
  code: LtiErrorCode,
  message: string,
) {
  return xmlResponse(
    `<response>
  <status>error</status>
  <meta_shopversion>${SHOP_VERSION}</meta_shopversion>
  <meta_modulversion>${MODULE_VERSION}</meta_modulversion>
  <error>${code}</error>
  <error_message>${xmlEscape(message)}</error_message>
</response>`,
  );
}

function decodeXmlEntities(value: string) {
  return value
    .replace(
      /<!\[CDATA\[([\s\S]*?)\]\]>/g,
      "$1",
    )
    .replace(
      /&#x([0-9a-f]+);/gi,
      (_, hex: string) =>
        String.fromCodePoint(
          Number.parseInt(hex, 16),
        ),
    )
    .replace(
      /&#(\d+);/g,
      (_, decimal: string) =>
        String.fromCodePoint(
          Number.parseInt(
            decimal,
            10,
          ),
        ),
    )
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function getXmlValue(
  xml: string,
  element: string,
) {
  const pattern = new RegExp(
    `<${element}\\b[^>]*>([\\s\\S]*?)<\\/${element}>`,
    "i",
  );

  const match = xml.match(pattern);

  if (!match) {
    return "";
  }

  return decodeXmlEntities(
    match[1],
  ).trim();
}

function safeTokenEquals(
  received: string,
  expected: string,
) {
  const receivedBuffer =
    Buffer.from(
      received,
      "utf8",
    );

  const expectedBuffer =
    Buffer.from(
      expected,
      "utf8",
    );

  if (
    receivedBuffer.length !==
    expectedBuffer.length
  ) {
    return false;
  }

  return timingSafeEqual(
    receivedBuffer,
    expectedBuffer,
  );
}

async function readXmlPayload(
  request: NextRequest,
) {
  const contentType =
    request.headers
      .get("content-type")
      ?.toLowerCase() ?? "";

  const raw =
    await request.text();

  if (
    contentType.includes(
      "application/x-www-form-urlencoded",
    )
  ) {
    const xml =
      new URLSearchParams(raw)
        .get("xml")
        ?.trim();

    return xml ?? "";
  }

  return raw.trim();
}

function getTargetPath(
  type: LegalDocumentType,
  locale: Locale,
) {
  if (locale === "de") {
    return type === "impressum" ? "/de/impressum" : "/de/datenschutz";
  }
  return LEGAL_BASE_PATHS[type];
}

function normalizeLegalHtml(
  value: string,
) {
  const decoded =
    value.includes("%3C") ||
    value.includes("%3c")
      ? (() => {
          try {
            return decodeURIComponent(
              value,
            );
          } catch {
            return value;
          }
        })()
      : value;

  return decoded.trim();
}

export async function GET() {
  return xmlResponse(
    `<response>
  <status>error</status>
  <error>10</error>
  <error_message>This endpoint accepts authenticated IT-Recht Kanzlei POST requests only.</error_message>
</response>`,
    405,
  );
}

export async function POST(
  request: NextRequest,
) {
  let xml = "";

  try {
    xml =
      await readXmlPayload(
        request,
      );
  } catch {
    return errorResponse(
      12,
      "The XML request body could not be read.",
    );
  }

  if (
    !xml ||
    !/<api\b/i.test(xml)
  ) {
    return errorResponse(
      12,
      "The request does not contain a valid LTI XML document.",
    );
  }

  const apiVersion =
    getXmlValue(
      xml,
      "api_version",
    );

  if (
    apiVersion !== API_VERSION
  ) {
    return errorResponse(
      1,
      `Unsupported API version: ${
        apiVersion || "missing"
      }.`,
    );
  }

  const expectedToken =
    process.env
      .IT_RECHT_API_TOKEN
      ?.trim();

  if (!expectedToken) {
    return errorResponse(
      80,
      "The NOIR DYNAMICS legal interface has not been configured completely yet.",
    );
  }

  const receivedToken =
    getXmlValue(
      xml,
      "user_auth_token",
    );

  if (
    !receivedToken ||
    !safeTokenEquals(
      receivedToken,
      expectedToken,
    )
  ) {
    return errorResponse(
      3,
      "The authentication token is invalid.",
    );
  }

  const action =
    getXmlValue(
      xml,
      "action",
    ).toLowerCase();

  if (
    action === "getversion" ||
    action === "version"
  ) {
    if (
      !isLegalStoreConfigured()
    ) {
      return errorResponse(
        80,
        "The NOIR DYNAMICS legal text storage has not been configured completely yet.",
      );
    }

    return successResponse();
  }

  if (
    action ===
    "getaccountlist"
  ) {
    if (
      !isLegalStoreConfigured()
    ) {
      return errorResponse(
        80,
        "The NOIR DYNAMICS legal text storage has not been configured completely yet.",
      );
    }

    return successResponse(
      `
  <account>
    <accountid>${ACCOUNT_ID}</accountid>
    <accountname>Noir Dynamics Website</accountname>
    <locales>
      <locale>de</locale>
      <locale>en</locale>
    </locales>
    <countries>
      <country>DE</country>
    </countries>
  </account>`,
    );
  }

  if (action !== "push") {
    return errorResponse(
      10,
      `Unsupported or empty action: ${
        action || "missing"
      }.`,
    );
  }

  if (
    !isLegalStoreConfigured()
  ) {
    return errorResponse(
      80,
      "The NOIR DYNAMICS legal text storage has not been configured completely yet.",
    );
  }

  const accountId =
    getXmlValue(
      xml,
      "user_account_id",
    );

  if (
    accountId &&
    accountId !== ACCOUNT_ID
  ) {
    return errorResponse(
      11,
      "The selected NOIR DYNAMICS sales channel could not be assigned.",
    );
  }

  const rawType =
    getXmlValue(
      xml,
      "rechtstext_type",
    ).toLowerCase();

  if (
    !SUPPORTED_DOCUMENT_TYPES.has(
      rawType as LegalDocumentType,
    )
  ) {
    return errorResponse(
      4,
      `The legal document type '${
        rawType || "missing"
      }' is not supported by this NOIR DYNAMICS website interface.`,
    );
  }

  const type =
    rawType as LegalDocumentType;

  const title =
    getXmlValue(
      xml,
      "rechtstext_title",
    );

  if (!title) {
    return errorResponse(
      18,
      "The legal document title is missing.",
    );
  }

  const language =
    getXmlValue(
      xml,
      "rechtstext_language",
    ).toLowerCase();

  if (!language) {
    return errorResponse(
      9,
      "The legal document language is missing.",
    );
  }

  if (
    !SUPPORTED_LOCALES.has(
      language as Locale,
    )
  ) {
    return errorResponse(
      82,
      `The language '${language}' is not supported by the NOIR DYNAMICS website.`,
    );
  }

  const locale =
    language as Locale;

  const country =
    getXmlValue(
      xml,
      "rechtstext_country",
    ).toUpperCase();

  if (
    !country ||
    !SUPPORTED_COUNTRIES.has(
      country,
    )
  ) {
    return errorResponse(
      17,
      `The jurisdiction '${
        country || "missing"
      }' is not supported by the NOIR DYNAMICS website interface.`,
    );
  }

  const html =
    normalizeLegalHtml(
      getXmlValue(
        xml,
        "rechtstext_html",
      ),
    );

  if (!html) {
    return errorResponse(
      6,
      "The HTML version of the legal document is missing.",
    );
  }

  const text =
    getXmlValue(
      xml,
      "rechtstext_text",
    );

  const pdfUrl =
    getXmlValue(
      xml,
      "rechtstext_pdf_url",
    );

  try {
    await saveLegalHubDocument(
      type,
      locale,
      {
        html,
        title,
        country,
        text:
          text ||
          undefined,
        pdfUrl:
          pdfUrl ||
          undefined,
      },
    );
  } catch (error) {
    console.error(
      "NOIR DYNAMICS legal document save failed",
      error,
    );

    return errorResponse(
      50,
      "The legal document could not be saved in the NOIR DYNAMICS legal store.",
    );
  }

  const targetUrl =
    new URL(
      getTargetPath(
        type,
        locale,
      ),
      request.nextUrl.origin,
    ).toString();

  return successResponse(
    `
  <target_url>${xmlEscape(
    targetUrl,
  )}</target_url>`,
  );
}
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.noirdynamics.eu";

export const legalUrls = {
  imprint: "/imprint",
  privacy: "/privacy",
};

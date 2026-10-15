# NOIR DYNAMICS — Launch checklist

## Required deployment variables

Set these in the production deployment environment before assigning the final domain:

- `NEXT_PUBLIC_SITE_URL` — final public HTTPS URL (no trailing slash)
- `NEXT_PUBLIC_IMPRINT_URL` — public IT-Recht Kanzlei imprint URL for NOIR DYNAMICS
- `NEXT_PUBLIC_PRIVACY_URL` — public IT-Recht Kanzlei privacy-policy URL for NOIR DYNAMICS

The footer links directly to the IT-Recht documents when these variables are set. Local legal routes remain as a fallback.

## Verified in this package

- ESLint: passes
- TypeScript (`tsc --noEmit`): passes
- Next.js production build: source validation reached the SWC download step, but this isolated environment cannot access npm. Run `npm ci && npm run build` in CI/Vercel to complete production verification.
- SEO metadata, canonical URL, Organization JSON-LD, `robots.txt` and `sitemap.xml` are production-domain aware through `NEXT_PUBLIC_SITE_URL`.
- Internal Next.js navigation lint issues corrected.

## Final launch gate

1. Add the three production environment variables above.
2. Run a successful production build in Vercel/CI.
3. Verify the two legal links open the correct NOIR DYNAMICS documents from IT-Recht Kanzlei.
4. Attach the final domain and verify HTTPS + canonical URL + sitemap.
5. Smoke-test desktop/mobile navigation and `contact@noirgroup.eu` mail CTA.

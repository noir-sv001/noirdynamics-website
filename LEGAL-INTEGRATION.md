# Noir Dynamics – IT-Recht Kanzlei integration

Noir Dynamics uses its own isolated IT-Recht interface, following the current NORWE production architecture.

## IT-Recht settings

- Shop name: `Noir Dynamics`
- API URL: `https://noirdynamics.eu/api/legal`
- API token: the exact value of the server-side Vercel variable `IT_RECHT_API_TOKEN`

Do not reuse the NORWE or Noir Group token.

## Vercel environment variables

Set these for Production (and Preview only if you intentionally want to test the interface there):

- `NEXT_PUBLIC_SITE_URL=https://www.noirdynamics.eu`
- `IT_RECHT_API_TOKEN=<unique secret>`
- `UPSTASH_REDIS_REST_URL=<dedicated Noir Dynamics Upstash REST URL>`
- `UPSTASH_REDIS_REST_TOKEN=<dedicated Noir Dynamics Upstash REST token>`

The endpoint accepts authenticated IT-Recht LTI XML POST requests. It supports `getversion`, `getaccountlist`, and `push`, stores only Impressum and Datenschutz for DE in de/en, sanitises received HTML, and returns the public target URL after a successful push.

## Public legal pages

- English imprint: `/imprint`
- English privacy: `/privacy`
- German imprint: `/de/impressum`
- German privacy: `/de/datenschutz`

## Launch order

1. Deploy this build to `noirdynamics.eu`.
2. Configure the three server-side environment variables in Vercel and redeploy.
3. Open `https://noirdynamics.eu/api/legal` in a browser. A 405 XML response is expected; it confirms the endpoint exists but does not accept unauthenticated GET requests.
4. In IT-Recht, enter the API URL and matching API token and save the interface.
5. Trigger transmission of Impressum and Datenschutz for the required languages.
6. Verify all four public legal pages display the transmitted texts.
7. Do not launch publicly until the German Impressum and Datenschutz pages have been verified.

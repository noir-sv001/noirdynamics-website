# NOIR DYNAMICS — Legal Hub integration

NOIR DYNAMICS consumes its legal texts from the central Noir Group Legal Hub.

Flow:

IT-Recht Kanzlei -> https://noirgroup.eu/api/legal/update -> account `noir-dynamics` -> public content API -> noirdynamics.eu legal pages

The Dynamics site never receives the IT-Recht API token and does not write legal content. It only performs server-side reads from:

- `/api/legal/content/noir-dynamics/impressum?lang=en`
- `/api/legal/content/noir-dynamics/datenschutz?lang=en`
- `/api/legal/content/noir-dynamics/impressum?lang=de`
- `/api/legal/content/noir-dynamics/datenschutz?lang=de`

Pages revalidate every 300 seconds. The central Hub sanitises IT-Recht HTML before exposing it.

## Required before launch

1. In the IT-Recht Kanzlei integration on the Noir Group Legal Hub, select account `noir-dynamics`.
2. Push all four legal documents: Impressum DE, Datenschutz DE, Imprint EN, Privacy EN.
3. Confirm each public content endpoint returns HTTP 200 and the correct `accountId`, language and type.
4. Confirm these pages render the transmitted text:
   - https://www.noirdynamics.eu/imprint
   - https://www.noirdynamics.eu/privacy
   - https://www.noirdynamics.eu/de/impressum
   - https://www.noirdynamics.eu/de/datenschutz
5. Do not launch while any required legal document is absent from the Hub.

Production env:

- `NEXT_PUBLIC_SITE_URL=https://www.noirdynamics.eu`
- `LEGAL_HUB_URL=https://noirgroup.eu`

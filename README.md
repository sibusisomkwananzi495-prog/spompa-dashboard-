# SPOMPA Web Dashboard — Powered by Rori

This is the front-end prototype for SPOMPA V3.

## Run
Open `index.html` in a modern browser.

For development, a simple local server can be used:
`python -m http.server 8080`

## Important
The dashboard currently uses demo data. It does NOT place trades and does NOT connect to a broker.

For production:
1. Deploy the frontend over HTTPS.
2. Build an authenticated SPOMPA API.
3. Connect the API to the MT5/VPS engine.
4. Implement server-side license activation/revocation.
5. Never put broker passwords or master license secrets in frontend JavaScript.
6. Use short-lived access tokens and HTTPS.

The existing SPOMPA V3 MT5 EA should remain the execution engine.

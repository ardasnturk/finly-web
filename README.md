# Finly website

Landing page, privacy policy, terms of use and support page for the Finly app
(iPhone and Apple Watch), in English, Turkish, German, Italian, Spanish, Japanese
and Simplified Chinese.

Live at **https://finly.ardasnturk.com**

- `/` – landing page
- `/privacy/` – privacy policy (linked from the app and App Store Connect)
- `/terms/` – terms of use
- `/support/` – support page (App Store support URL)

## Development

```bash
npm install
npm run dev
```

Texts live in `src/i18n/<language>.ts`. The language is picked from `?lang=`, the
saved choice, then the browser language. Screenshots in `public/screens/<language>/`
come from the iOS app's screenshot tests (`ios-native/Scripts/capture_screenshots.sh`).

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`). The custom domain is set by `public/CNAME`; DNS is
a `CNAME finly → ardasnturk.github.io` record on Cloudflare.

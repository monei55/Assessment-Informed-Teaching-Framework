# Assessment Informed Teaching Framework

A practical professional resource connecting learning, evidence, pedagogy and impact to strengthen instructional decision-making.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub Pages

1. Upload these files to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to the `main` branch.
5. The included workflow builds and publishes the static site.

The `next.config.ts` file automatically applies the repository name as the GitHub Pages base path during deployment.

## Initial structure

- `app/page.tsx` — homepage
- `app/globals.css` — complete design system and responsive styling
- `components/` — reusable framework components
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Suggested next pages

- `/framework`
- `/learning-clarity`
- `/assessment-clarity`
- `/pedagogical-clarity`
- `/impact-clarity`
- `/tools`

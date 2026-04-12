# MagisData Website

Deze website is gebouwd met Next.js en Tailwind CSS als statische site voor Cloudflare Pages.

## Lokaal starten

1. Installeer dependencies:

```bash
npm install
```

2. Start de development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Decap CMS lokaal gebruiken

Er is nu een Decap CMS blogsetup aanwezig.

1. Start Next.js:

```bash
npm run dev
```

2. Start in een tweede terminal de lokale Decap backend:

```bash
npm run cms
```

3. Open `http://localhost:3000/admin`.

4. Blogberichten worden opgeslagen in `content/blog`.

## Belangrijk voor live gebruik

- Lokaal werkt Decap CMS direct via `local_backend: true`.
- Voor live gebruik op Cloudflare Pages is de GitHub OAuth authlaag nu ingebouwd via `functions/api/auth.js` en `functions/api/callback.js`.
- Je hoeft in Cloudflare alleen nog `GITHUB_CLIENT_ID` en `GITHUB_CLIENT_SECRET` toe te voegen.

## Productie build

Gebruik:

```bash
npm run build
```

De statische output komt in de map `out`.

## Deploy naar Cloudflare Pages

Volgens de Cloudflare Pages gids voor een statische Next.js site:

1. Push deze projectmap naar GitHub.
2. Log in op Cloudflare en ga naar `Workers & Pages`.
3. Kies `Create application` > `Pages` > `Import an existing Git repository`.
4. Selecteer je repository.
5. Gebruik deze build settings:
   `Framework preset`: `Next.js (Static HTML Export)`
   `Build command`: `npx next build`
   `Build output directory`: `out`
6. Start de deploy.

## Belangrijk

- Het contactformulier gebruikt nu Formspree.
- Er is nu een file-based blog onder `/blog` met content uit `content/blog`.
- Decap CMS staat onder `/admin`.
- Voor live Decap login op Cloudflare Pages moet je GitHub OAuth app verwijzen naar je live domein en de twee OAuth variabelen invullen in Cloudflare.
## Handige bestanden

- `app/page.js`: homepage content en secties
- `app/blog/page.js`: blog overzicht
- `app/blog/[slug]/page.js`: individuele blogberichten
- `content/blog`: markdown blogcontent
- `public/admin/config.yml`: Decap CMS configuratie
- `components/comparison-slider.js`: interactieve before/after slider
- `tailwind.config.js`: kleuren, fonts en design tokens

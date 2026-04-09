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

- Het contactformulier is nu alleen visueel opgebouwd. Als je echte inzendingen wilt ontvangen, koppel dan later een forms-service of eigen backend.
- De website gebruikt externe afbeeldingen uit het aangeleverde ontwerp. Als je liever eigen assets gebruikt, vervang dan de image-URLs in `app/page.js`.

## Handige bestanden

- `app/page.js`: homepage content en secties
- `components/comparison-slider.js`: interactieve before/after slider
- `tailwind.config.js`: kleuren, fonts en design tokens

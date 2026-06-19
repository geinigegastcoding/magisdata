import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 191,
  priority: "P1",
  pageKind: "page",
  template: "pricing",
  cluster: "Prijs + plaats",
  sourceTitle: "Wat kost een website laten maken in Voorschoten?",
  sourceKeyword: "wat kost een website laten maken in Voorschoten",
  slug: "wat-kost-een-website-laten-maken-in-voorschoten",
  productionPath: "/wat-kost-een-website-laten-maken-in-voorschoten",
  draftPath: "/Keywoard-pages/routes/wat-kost-een-website-laten-maken-in-voorschoten/page.tsx",
  metaTitle: "Wat kost een website laten maken in Voorschoten? | MagisData",
  metaDescription:
    "Websitekosten in Voorschoten uitgelegd: scope, pagina's, copy, lokale SEO, onderhoud, formulieren en wanneer een kleiner pakket genoeg is.",
  eyebrow: "Websitekosten Voorschoten",
  title: "Wat kost een website laten maken in Voorschoten?",
  description:
    "Geen verzonnen gemiddelde prijs per plaats, maar een heldere uitleg van de keuzes die een website voor een lokale ondernemer duurder of juist eenvoudiger maken.",
  primaryCta: "Vraag pakketadvies aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Een website laten maken in Voorschoten kost niet meer of minder door de plaatsnaam zelf. De prijs wordt bepaald door scope: hoeveel pagina's nodig zijn, hoeveel copywriting er moet gebeuren, of lokale SEO onderdeel is, hoeveel ontwerpmaatwerk nodig is, welke formulieren of koppelingen nodig zijn en wie onderhoud doet. Voor veel lokale ondernemers is een compacte website genoeg; een groeisite wordt logisch wanneer meerdere diensten, regio's of SEO-pagina's belangrijk zijn.",
  visual: {
    label: "Prijsopbouw",
    title: "Waar betaal je echt voor?",
    text:
      "Prijs wordt bepaald door inhoud, structuur, ontwerp, SEO, formulieren en onderhoud, niet door een fictieve lokale marktprijs.",
    items: ["scope", "pagina's", "copy", "lokale SEO", "formulieren", "onderhoud"]
  },
  highlights: [
    {
      title: "Geen nep-gemiddelde",
      text: "We noemen geen verzonnen gemiddelde websiteprijs voor Voorschoten."
    },
    {
      title: "Klein kan genoeg zijn",
      text: "Als aanbod en contactroute simpel zijn, hoeft een ondernemer niet meteen een groot pakket te nemen."
    },
    {
      title: "Groei vraagt inhoud",
      text: "Meer SEO-pagina's zijn alleen zinvol wanneer diensten, bewijs en FAQ's echt uitgewerkt kunnen worden."
    },
    {
      title: "Onderhoud telt mee",
      text: "Updates, controle van formulieren, kleine verbeteringen en meting horen bij de echte kosten."
    }
  ],
  valueSections: [
    {
      title: "Waarom prijs zonder scope weinig zegt",
      paragraphs: [
        "Een website van vijf pagina's met duidelijke teksten, contactformulier en basis-SEO is iets anders dan een groeisite met branchepagina's, lokale SEO, cases, FAQ's en onderhoud. Daarom is een losse vanafprijs vaak minder nuttig dan een scope-uitleg.",
        "Voor Voorschoten speelt vaak de vraag of de website vooral vertrouwen moet geven aan bestaande lokale vraag, of ook actief moet groeien in Google op diensten en omliggende plaatsen."
      ]
    },
    {
      title: "Wanneer een compact pakket logisch is",
      paragraphs: [
        "Een compact pakket past wanneer je aanbod overzichtelijk is: home, diensten, over, contact, FAQ en een goede mobiele contactroute. Dit is vaak genoeg voor ondernemers die vooral professioneel gevonden willen worden en geen grote SEO-structuur nodig hebben.",
        "Het is ook logisch wanneer je nog weinig bewijs, foto's of uitgewerkte diensten hebt. Dan is eerst een sterke basis beter dan veel pagina's die weinig zeggen."
      ]
    },
    {
      title: "Wanneer een groeisite de investering waard is",
      paragraphs: [
        "Een groeisite past wanneer je meerdere diensten hebt, lokaal sterker wilt ranken, betere aanvragen wilt krijgen of later content wilt uitbouwen. Denk aan aparte servicepagina's, lokale SEO, FAQ's, interne links en meetbare contactroutes.",
        "De investering zit dan vooral in denkwerk, copywriting en structuur. Niet in meer pagina's om meer pagina's te hebben."
      ]
    }
  ],
  sections: [
    {
      title: "De onderdelen die prijs bepalen",
      text:
        "Een goede offerte maakt zichtbaar welke keuzes invloed hebben op budget en planning.",
      items: [
        {
          title: "Pagina-aantal",
          text:
            "Home, diensten, over, contact en FAQ vormen vaak de basis. Extra diensten of lokale pagina's verhogen scope."
        },
        {
          title: "Copywriting",
          text:
            "Goede teksten kosten tijd, maar voorkomen dat bezoekers moeten raden wat je doet of waarom ze contact opnemen."
        },
        {
          title: "Lokale SEO",
          text:
            "Voor Voorschoten gaat dit om dienstpagina's, werkgebied, Google-profielconsistentie en interne links."
        }
      ]
    },
    {
      title: "Waar je niet te veel voor moet betalen",
      text:
        "Een groter pakket is niet automatisch beter. De juiste website past bij je fase.",
      items: [
        {
          title: "Geen content zonder bewijs",
          text:
            "Maak geen grote SEO-structuur wanneer je nog geen diensten, foto's, voorbeelden of FAQ's hebt."
        },
        {
          title: "Geen nep-lokale pagina's",
          text:
            "Betaal niet voor meerdere plaatsnaampagina's die dezelfde tekst herhalen."
        },
        {
          title: "Geen onnodige koppelingen",
          text:
            "Koppelingen en automatisering zijn pas logisch wanneer ze de aanvraag of opvolging echt verbeteren."
        }
      ]
    },
    {
      title: "Wat specifiek is voor ondernemers in Voorschoten",
      text:
        "Voorschoten vraagt om duidelijke lokale nabijheid en vertrouwen, vaak in vergelijking met aanbieders uit Leiden en omliggende dorpen.",
      items: [
        {
          title: "Werkgebied",
          text:
            "Maak duidelijk waar je werkt zonder een vestiging te claimen die er niet is."
        },
        {
          title: "Contactroute",
          text:
            "Lokale bezoekers willen snel weten hoe contact loopt en wanneer ze reactie verwachten."
        },
        {
          title: "Uitbreiding",
          text:
            "Breid pas uit met lokale SEO-pagina's wanneer elke pagina eigen inhoud heeft."
        }
      ]
    }
  ],
  checklistTitle: "Prijscheck voor een website in Voorschoten",
  checklist: [
    "Welke pagina's zijn nodig bij livegang?",
    "Moeten teksten worden geschreven of alleen aangescherpt?",
    "Zijn lokale SEO en Google Business Profile onderdeel van de scope?",
    "Welke foto's, cases of voorbeelden zijn beschikbaar?",
    "Is een formulier genoeg of zijn koppelingen nodig?",
    "Wie doet updates, controle en kleine verbeteringen na livegang?",
    "Welke pagina's kunnen beter later worden toegevoegd?"
  ],
  comparison: {
    title: "Compact, groei of autoriteit?",
    leftLabel: "Compact",
    rightLabel: "Groei",
    rows: [
      {
        label: "Past bij",
        left: "Duidelijk aanbod, beperkte diensten, snel professioneel online",
        right: "Meerdere diensten, lokale SEO en behoefte aan betere aanvragen"
      },
      {
        label: "Kosten zitten in",
        left: "Basisstructuur, ontwerp, kernteksten en contactroute",
        right: "Copywriting, SEO-structuur, extra pagina's, FAQ's en meting"
      },
      {
        label: "Niet doen",
        left: "Te weinig informatie geven over diensten",
        right: "Veel pagina's publiceren zonder unieke inhoud"
      }
    ]
  },
  steps: [
    { title: "Doel bepalen", text: "Moet de website vooral vertrouwen geven, aanvragen verbeteren of lokaal groeien?" },
    { title: "Scope kiezen", text: "We bepalen welke pagina's direct nodig zijn en welke later kunnen." },
    { title: "Content inventariseren", text: "We bekijken diensten, foto's, bewijs, FAQ's en huidige teksten." },
    { title: "Pakketadvies", text: "Je krijgt een passende richting zonder automatisch naar het grootste pakket te gaan." }
  ],
  faqs: [
    {
      question: "Is een website in Voorschoten duurder dan elders?",
      answer:
        "Nee, niet door de plaatsnaam zelf. Kosten ontstaan door scope, copywriting, ontwerp, SEO, formulieren en onderhoud."
    },
    {
      question: "Kan ik met een compacte website beginnen?",
      answer:
        "Ja. Dat is vaak verstandig wanneer je aanbod overzichtelijk is en je eerst professioneel online wilt staan."
    },
    {
      question: "Wanneer heb ik een groeisite nodig?",
      answer:
        "Wanneer je meerdere diensten hebt, lokaal wilt ranken, betere aanvragen wilt krijgen of later content wilt uitbouwen."
    },
    {
      question: "Moet lokale SEO direct in de prijs zitten?",
      answer:
        "Alleen als lokale vindbaarheid belangrijk is. Dan moeten dienstpagina's, metadata, interne links en Google-profielconsistentie worden meegenomen."
    },
    {
      question: "Wat kan later wachten?",
      answer:
        "Losse lokale pagina's, uitgebreide cases, extra blogcontent en automatisering kunnen vaak wachten tot de basis werkt."
    }
  ],
  internalLinks: [
    { label: "Home", href: "/" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Webontwikkeling", href: "/webontwikkeling" },
    { label: "Lokale SEO", href: "/lokale-seo" },
    { label: "Contact", href: "/contact" }
  ],
  qualityNotes: [
    "Hand-authored for Voorschoten website cost intent.",
    "Explains scope instead of fake local average prices.",
    "Includes when not to buy more."
  ],
  schemaType: "Service",
  dateModified: "2026-06-15"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}

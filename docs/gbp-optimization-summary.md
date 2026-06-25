# Google Business Profile & Schema Optimization Summary

This document summarizes the optimization steps taken to align the MagisData website with its Google Business Profile (GBP) to improve local search visibility in the Voorschoten and Leiden regions.

---

## 1. Technical Schema Updates

We updated the `LocalBusiness` structured data in [schemas/seo.ts](file:///e:/codex/projects/magisdata/schemas/seo.ts) to match your verified business details.

*   **Official Address:** Updated to `Suze Groenwegerf 25, 2253 RZ Voorschoten`.
*   **Geographical Coordinates:** Added precise latitude (`52.1287`) and longitude (`4.4447`) to pinpoint the location.
*   **Business Hours:** Added standard operating hours (Monday to Friday, 09:00 - 18:00).
*   **Entity Connection (`sameAs`):** Linked the schema directly to your official GBP share link: `https://share.google/fPu1P47PQzUwG210Z`.

*Verification:* We ran `npm run typecheck` to confirm the schema remains syntactically correct and type-safe.

---

## 2. Google Business Profile Configuration Strategy

### A. Location & Address Handling
*   **Service-Area Business (SAB):** Since the address is residential, the profile is configured as a Service-Area Business. This keeps the physical street address hidden from the public map while retaining the backend proximity authority for Voorschoten and nearby Leiden.
*   **Service Areas:** Configured to explicitly cover Voorschoten, Leiden, Den Haag, and Rotterdam to align with your website's regional landing pages.

### B. Service & Price Alignment
To match your website's pricing structures, we mapped out how to populate the GBP services menu:
*   **Predefined Services:** Accepted Google's recommended categories (`Webontwerper`, `Internetbureau`, `Zoekmachineoptimalisatiebureau`) and set their price type to **No Price** (Geen prijs) to describe broad capabilities.
*   **Custom Services:** Added your specific service packages from the `/prijzen` page with **Fixed Prices** ("vaste prijs") and yearly amounts:
    *   *Website Start:* €300/year (or €30/month)
    *   *Website Groei:* €500/year (or €50/month)
    *   *Website Autoriteit:* €999/year (or €99/month)
    *   *Vindbaar Basis:* €500/year
    *   *Vindbaar Groei:* €1.000/year
    *   *Vindbaar Autoriteit:* €2.500/year
    *   *AI Automatisering Start:* €1.000 (one-time)
    *   *AI Automatisering Proces:* €2.000 (one-time)
    *   *AI Automatisering Systeem:* €5.000 (one-time)
    *   *Eerste Groeigesprek:* €0 (Free)

---

## 3. Next Steps for Local Authority
*   **Review Collection:** Gather reviews from clients in Leiden and Voorschoten, encouraging them to mention specific services (e.g., "website laten maken") and the region in their text.
*   **Active Citations:** Ensure any external business listings (e.g., Telefoonboek, Drimble) use the exact same NAP (Name, Address, Phone) details to reinforce consistency.

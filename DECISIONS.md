# Decisions Log — True North Axium Shell

Dit bestand houdt alle belangrijke keuzes bij zodat context nooit verloren gaat.

---

## Navigatie & modules
- Modules in zijbalk (volgorde):
  1. The Axis (dashboard + algemene planning)
  2. Projecten
  3. Na-calculatie
  4. Gedetailleerde planning
  5. Cijfers
- Sidebar: inklapbaar, met actieve module highlight.
- Breadcrumbs: zichtbaar bovenaan, klikbaar, tonen volledige diepte.
- Jaar selector: altijd rechtsboven, standaard huidig jaar.  
  - Links pijltje → vorig jaar  
  - Rechts pijltje → huidig jaar  
  - Jaar zichtbaar in URL → `/{jaar}/{module}`

---

## Routing
- Root `/` → redirect naar `/{huidig-jaar}/axis`
- Jaar in URL: bij wissel wordt je naar module-startpagina gebracht.
- Elke modulepagina heeft nu enkel **“Komt binnenkort”** placeholder.

---

## Layout
- Header: bovenaan met breadcrumbs in het midden, gebruiker links, jaar-switcher rechts.
- Sidebar: links, inklapbaar met icoon.
- Bovenaan banner: donkerblauw (#0A1220) met witte tekst “True North Axium” en mintgroene onderlijn (#39D2BE).
- Loading states: spinner en skeleton voorzien (basis).
- Gebruikersmenu: voorlopig leeg.

---

## Tech stack
- **Frontend:** Next.js (App Router) + TypeScript
- **Database:** Supabase (Postgres + Auth + RLS) — nog niet actief
- **UI:** Tailwind v3 + shadcn/ui (voor knoppen, formulieren)
- **Extra libs:** Zod (validatie), dnd-kit (drag/drop), FullCalendar (planning)
- **Hosting:** Vercel (met GitHub integratie)
- **Auth (nu):** Basic Auth via middleware + env vars
- **Scope:** Single company (multi-tenant later)

---

## Security
- Basic Auth toegevoegd in `middleware.ts`  
- Credentials via env vars:
  - `BASIC_AUTH_USER`
  - `BASIC_AUTH_PASS`
- In Vercel ingesteld op **Preview** en **Production**.

---

## Deployment
- Code staat in GitHub (`main` branch).
- Vercel pakt nieuwe build op bij elke `git push`.
- Custom domein: `truenorthaxium.com`
- Basic Auth actief op alle pagina’s.

---

## Bekende keuzes
- Branding nog niet vastgelegd → voorlopig neutrale styling + banner.
- Mobile/PWA: niet voor MVP, enkel responsive web.
- Auth met Supabase komt later (rollen: Admin/Manager/Worker/Bookkeeper).
- Feature flags & CI tests komen later (na eerste module).

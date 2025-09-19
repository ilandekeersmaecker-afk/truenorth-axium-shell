# True North Axium — Shell

Minimal working shell voor het True North Axium platform:
- Next.js (App Router) + TypeScript
- Tailwind CSS v3
- Jaar-context in URL: `/{jaar}/…`
- Zijbalknavigatie + breadcrumbs + jaarwissel (links/rechts pijlen)
- Beveiligd met Basic Auth (Next.js middleware + env vars)
- Deploy: Vercel (met custom domein)

---

## Snel starten (lokaal)

**Vereisten**
- Node.js **LTS 22.x**
- Git

**Commando’s**
```bash
npm install
npm run dev

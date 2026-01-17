# Build plan: Gayathri Mohan author/portfolio/book site

## Goals
- Launch a fast, SEO‑friendly author site with clear calls‑to‑action for the book, speaking, and contact.
- Keep content easy to update (Markdown/MDX), deploy on GitHub Pages.

## Scope & sitemap
Planned pages (static):
- `/` (Home)
- `/about`
- `/book`
- `/speaking`
- `/writing`
- `/press`
- `/contact`

## Phased implementation plan

### Phase 1 — Project setup (Astro + content structure)
1. **Initialize Astro project**
   - Astro + MDX
   - Configure `site` and `base` for GitHub Pages
2. **Design system foundations**
   - Global styles (typography, spacing, color tokens)
   - Base layout (header/footer/nav)
3. **Content collections**
   - `talks`, `writing`, `press` (optional), `testimonials` (optional)
4. **Add placeholder content**
   - Use a documented placeholder list (see `docs/placeholders.md`)

### Phase 2 — Core pages (static content + CTAs)
1. **Home**
   - Hero + CTA(s)
   - Book promo section
   - Speaking/consulting availability block
   - Highlights (topics / value props)
2. **About**
   - Bio + headshot
   - Career highlights / “things I’ve done”
   - Link to book and speaking
3. **Book**
   - Cover image, synopsis, key takeaways
   - Buy links
   - Optional: endorsements, sample chapter
4. **Speaking**
   - Topics, talk abstracts, booking CTA
5. **Writing**
   - Articles / podcasts / interviews list
6. **Press**
   - Short bio, long bio, headshots, book cover, links
7. **Contact**
   - Email + social links (possibly a lightweight form)

### Phase 3 — Content polish & SEO
1. **Metadata**
   - OpenGraph/Twitter cards
   - Page titles + descriptions
2. **Accessibility**
   - Contrast checks, semantic headings, alt text
3. **Performance**
   - Image optimization, lazy loading

### Phase 4 — Deployment
1. **GitHub Pages build**
2. **Custom domain (optional)**
3. **Analytics (optional)**

## Content intake checklist
Use `docs/placeholders.md` to collect final content for:
- Bio (short/long)
- Headshots + book cover
- Book synopsis + key takeaways
- Talks/workshops + descriptions
- Writing / media links
- Social links + contact email
- Testimonials / endorsements (optional)

## Open questions
- Confirm tone (serious/academic vs. friendly/practical)
- Confirm brand colors / typography preferences
- Confirm which sections are most important on the homepage

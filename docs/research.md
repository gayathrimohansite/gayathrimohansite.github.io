# Research: Gayathri Mohan author site + Full Stack Testing

## 1. Verified data about Gayathri Mohan + *Full Stack Testing*

### Author verification
- **Name**: Gayathri Mohan (author record). Source: Open Library author entry.【Source: https://openlibrary.org/authors/OL10158247A.json】

### Book verification (publisher + bibliographic metadata)
- **Title**: *Full Stack Testing* (with subtitle: “A Practical Guide for Delivering High Quality Software”). Source: Open Library edition record.【Source: https://openlibrary.org/isbn/9781098108137.json】
- **Publisher**: O'Reilly Media, Incorporated. Source: Open Library edition record.【Source: https://openlibrary.org/isbn/9781098108137.json】
- **Publication year**: 2022. Source: Open Library edition record.【Source: https://openlibrary.org/isbn/9781098108137.json】
- **ISBN-13**: 9781098108137. Source: Open Library edition record.【Source: https://openlibrary.org/isbn/9781098108137.json】
- **Pagination**: 350 pages. Source: Open Library edition record.【Source: https://openlibrary.org/isbn/9781098108137.json】

### Description / positioning
- Google Books summary highlights the book as a practical guide to full‑stack testing with strategies and tooling coverage across multiple testing types, including automation, mobile, visual, performance, security, and accessibility testing, plus CI pipeline integration.【Source: https://www.googleapis.com/books/v1/volumes?q=isbn:9781098108137】

> **Data gap**: I wasn’t able to find a detailed public biography for Gayathri Mohan (e.g., current role, previous companies, speaking history) from a directly accessible source in this environment. If you have a preferred bio, headshot, or links (LinkedIn, personal site, speaker pages), I can incorporate them into the site.

> **Provided source**: You shared Gayathri Mohan’s LinkedIn profile (https://www.linkedin.com/in/gaya3manoj). I can incorporate role history, certifications, and featured content once you confirm it’s okay to use specific details from that profile (LinkedIn content can be access-restricted). For now, I’ll treat it as a reference link to include on the site.

---

## 2. Content research: what author / portfolio / book sites typically include

### Core pages
1. **Home / Hero**: Clear positioning (author + testing expert), key CTA (buy book / contact / speaking). 
2. **About the Author**: Narrative bio, mission, expertise areas, career highlights, awards, certifications, and a professional headshot.
3. **Book page**: Cover image, synopsis, key takeaways, table of contents highlights, sample chapter, endorsements, and buy links.
4. **Speaking / Workshops**: Topics, talk abstracts, past events, testimonials, booking contact.
5. **Writing / Blog**: Articles, guest posts, podcasts, videos, interviews.
6. **Portfolio / Projects**: Testing frameworks, tooling, OSS, or notable client projects.
7. **Media / Press Kit**: Author bio (short/long), headshot downloads, book cover, press mentions.
8. **Contact**: Simple email/booking form and social links.

### Content assets to gather
- Headshots (1–3) + book cover
- Short/long bio
- Featured talks & conferences
- Testimonials / endorsements (from readers/industry peers)
- Links: O’Reilly page, Amazon listing, publisher site
- Social: LinkedIn, Twitter/X, GitHub, YouTube

### UX considerations
- Clear, prominent **“Buy the Book”** CTA
- **Sticky navigation** with fast jumps to About, Book, Speaking, Contact
- **Readable typography** for long-form copy
- **Mobile‑first layout** (most readers will visit on mobile)

---

## 3. Example site content analysis: Sam Newman (https://samnewman.io/)

Source notes from public pages (home + about):【Source: https://samnewman.io/】【Source: https://samnewman.io/about】

### Observed content patterns
- **Concise hero intro** that states role + focus areas (author, speaker, consultant) and topical expertise.
- **Clear CTAs** for contact, consulting, and speaking work (email links, “Find Out More”).
- **Services section** on home page explaining consulting, training, and speaking availability.
- **About page** includes headshot, career background, notable projects, and book links.
- **Speaking section** highlights talk availability and links to current talk list.
- **Book promo block** with cover image, short teaser, and link to detailed book page.
- **Mailing list CTA** encouraging newsletter sign‑up.

### Takeaways for Gayathri Mohan site
- Put a **short positioning statement** and **primary CTA** (Buy the Book / Contact / Speaking) above the fold.
- Include a **consulting/speaking availability** block on the home page.
- Add a **“Things I’ve done”/career highlights** section to establish credibility.
- Add a **book promo card** in both home and about pages for quick visibility.
- Provide **talks/workshops** page plus clear booking instructions.
- Consider a **lightweight newsletter opt‑in** section.

---

## 4. Tech stack research & recommendation

### Astro (static site)
Astro is a strong fit for an author site because it:
- Ships minimal JS by default (fast, SEO-friendly)
- Supports Markdown/MDX content (easy updates to bio, talks, blog posts)
- Lets you sprinkle interactivity only where needed
- Works well with **GitHub Pages** via static export

### Proposed stack
- **Astro** for pages and content collections
- **MDX** for long-form content (bio, talks, blog)
- **Tailwind CSS** or **Vanilla CSS** for styling
- **GitHub Pages** for hosting with a custom domain

### Alternative stacks (if needed)
- **Next.js** (more JS runtime, not needed for a mostly static site)
- **Eleventy** (simple static site, but Astro has a more modern component model)

**Recommendation**: Use **Astro** for the site. It aligns with a static author site, is easy to maintain, and performs well on GitHub Pages.

---

## 5. Proposed site information architecture

```
/                -> Home / hero / CTA
/about           -> Author bio
/book            -> Book details, takeaways, TOC highlights, buy links
/speaking        -> Talks, workshops, booking
/writing         -> Articles, podcasts, interviews
/press           -> Press kit + media assets
/contact         -> Contact form + social links
```

---

## 6. Next steps to move into build

1. Confirm **bio details** and **headshots** for Gayathri Mohan.
2. Confirm **book cover** asset + approved synopsis copy.
3. Decide on **brand tone** (serious/academic vs. friendly/practical) and color palette.
4. Proceed with Astro scaffolding and initial pages.

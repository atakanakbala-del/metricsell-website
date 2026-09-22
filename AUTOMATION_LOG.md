# Automation Log

Daily automated maintenance runs on this repo. Each run proposes small, safe fixes via a PR on an
`auto/YYYY-MM-DD` branch — nothing is ever merged or shipped automatically.

## 2026-09-22

- Fixed stale blog article count in `index.html` — the blog CTA said "(6+ Makale)" but the blog
  actually has 26 posts (`blog.html` lists 26, matching the 26 `blog-*.html` files on disk).
- Updated `CLAUDE.md`'s "Mevcut Tasarım / Teknik Yapı" section, which still described the site as
  "tek dosyalık... (`index.html`)" — it now also has 3 sector landing pages, a 26-post blog, and
  legal pages (KVKK, gizlilik, çerez politikası). Left the pending color-palette discrepancy note
  (right below it in the same file) untouched, as instructed.
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/6

### ⚠️ Onay bekliyor

None this run — no auth/payment-adjacent changes were found, and nothing else needed a human
judgment call outside the PR above.

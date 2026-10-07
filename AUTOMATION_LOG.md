# Automation Log

Daily automated maintenance runs on this repo. Each run proposes small, safe fixes via a PR on an
`auto/YYYY-MM-DD` branch — nothing is ever merged or shipped automatically.

## 2026-09-17

- Fixed broken in-page navigation anchors on `index.html`: nav/footer links across nearly every page in
  the site (`index.html` kendi navı dahil, artı `blog.html` ve tüm `blog-*.html` dosyaları, politika
  sayfaları) point to `index.html#services`, `index.html#sectors` ve `index.html#contact`, but `index.html`
  had no matching `id="services"`, `id="sectors"` veya `id="contact"` anywhere — these links silently did
  nothing when clicked. Added the three missing anchor targets on `index.html` (hero section gets
  `id="sectors"` plus a preceding `id="services"` anchor; the lead-capture form section gets a preceding
  `id="contact"` anchor). This is a single-file fix that resolves the broken anchor for every page that
  links back to it (~75 occurrences across the repo).
- Added explicit `width`/`height` attributes to the four content `<img>` tags in `index.html`
  (`img-health.jpg`, `img-course.jpg`, `img-marketplace.jpg`, `img-expert.jpg`) that were missing them.
  Their CSS already scales them responsively (`width:100%; height:auto`), so this only gives the browser
  the correct aspect ratio up front to reduce layout shift (CLS) — no visual change.
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/1

### ⚠️ Onay bekliyor
- `index-modern.html` (121KB) görünüşe göre hiçbir sayfadan linklenmiyor (orphan) — kullanılmayan bir eski
  tasarım denemesi mi yoksa ileride kullanılacak bir taslak mı belli değil, bu yüzden silmedim/dokunmadım.
  İsterseniz kontrol edip silinmesini/arşivlenmesini isteyebilirsiniz.
- Ana sayfadaki "Gerçek Vaka Analizleri" (case studies) bölümündeki rakamlar (€48,000+ ciro, €14.48 CPL,
  622 form, 6.8x ROAS vb.) gerçek müşteri verisi gibi sunuluyor ama isim/marka belirtilmiyor — bunların
  gerçek olduğunu teyit edemediğim için dokunmadım, sadece bilginize.

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
judgment call outside the PR above. The two 2026-09-17 items above are still open/unconfirmed.

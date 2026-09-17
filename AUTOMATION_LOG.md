# Automation Log

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

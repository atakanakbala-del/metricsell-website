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

## 2026-09-23

Not: Bu koşudan itibaren otomasyon, tarih damgalı (`auto/YYYY-MM-DD`) dallar yerine kalıcı `auto/maintenance`
dalını kullanıyor. Bu koşuda `auto/maintenance` başlıklı açık bir PR yoktu, ancak eski isimlendirmeyle açılmış
#6 (`auto/2026-09-22`) hâlâ açık bekliyor — blog makale sayısı (26+) ve `CLAUDE.md`'deki "tek dosyalık" ifadesi
düzeltmelerini içeriyor. O ikisini burada tekrar önermedim (zaten #6'da bekliyor); bu PR tamamen farklı,
yeni bulgular içeriyor.

- `CLAUDE.md`: dosyanın en başındaki başlıktan önce fazladan bir `c` harfi vardı (`c# MetricSell Website...`)
  — muhtemelen eski bir düzenleme kalıntısı. Düzeltildi (`# MetricSell Website...`).
- 5 dosyada (`index.html`, `blog.html`, `eticaret-e-ihracat-ajansi.html`,
  `saglik-turizmi-reklam-ajansi.html`, `surucu-kursu-dil-okulu-reklam-ajansi.html`) toplam 13 adet
  `target="_blank"` linkte `rel="noopener noreferrer"` eksikti (YouTube, WhatsApp/wa.me ve KVKK sayfası
  linkleri) — `window.opener` üzerinden erişim ve performans/güvenlik açısından standart en iyi pratik
  eklendi. Görsel/davranışsal değişiklik yok. (`index-modern.html`'deki 3 benzer link, o dosya zaten orphan
  olarak işaretli olduğundan dokunulmadı.)
- `llms.txt`: "Blog ve Bilgi Bankası" bölümünde sadece 6/26 blog yazısı listeliydi. Kalan 20 yazı da
  başlık + URL olarak eklendi, böylece AI arama/GEO amaçlı bu dosyayı okuyan sistemler tüm içerik
  kütüphanesini görebiliyor.
- Diff: 7 dosya, 48 satır (34 ekleme / 14 silme).
- PR: (bu PR'ın linki — açılırken eklenecek)

### Kontroller
- Tüm `.html` dosyalarındaki `href`/`img src` referansları diskteki dosyalarla karşılaştırıldı — kırık link
  bulunamadı.
- `index.html`'de kopya (duplicate) `id` bulunamadı; eksik `alt` metni bulunamadı.
- `index-modern.html`'de "Hizmetlerimiz" linkinin hedeflediği `id="sectors"` o dosyada mevcut değil (gerçek
  bir kırık anchor), ama dosya zaten kullanılmayan/orphan olarak işaretli olduğundan — 2026-09-17'deki karar
  gereği — dokunulmadı.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. 2026-09-17'deki iki madde (orphan `index-modern.html` ve vaka analizi rakamları) hâlâ
  geçerli ve bekliyor.

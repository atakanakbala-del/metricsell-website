# Automation Log

## 2026-10-10

`origin/main`'i merge alırken 1 yeni commit geldi: "Add free site audit box below the homepage hero"
(`index.html`'e, ana sayfa hero'sunun altına LayzrAI/web-audit-ai aracına (`web-audit-ai-theta.vercel.app`)
yönlendiren ücretsiz site analizi kutusu eklendi). Merge'de textual conflict yoktu.

- **Yeni eklenen bölümde bulunan gerçek sorun**: site-analizi formu
  `target="_blank"` ile yeni sekmede açılıyor ama `rel="noopener"` eksikti — repoda tekrarlayan ve her
  koşuda kontrol edilen `target="_blank"` + `rel="noopener"` kuralının tam da yakalaması gereken bir
  örnek. `index.html`'deki diğer "kendi araçlarımız" linkleriyle (trygrafix.com/partsmercedestr kartları)
  aynı konvansiyonla `rel="noopener"` eklendi.
- Aynı bölüm için ayrıca kontrol edildi: form `action` URL'i canlı ve 200 dönüyor (curl ile doğrulandı);
  tekil `id="site-analizi"` kopya değil; `aria-label` ile erişilebilir; sahte istatistik/vaka numarası yok
  (ürün özelliği listesi, iddia edilen bir sonuç değil).
- **2026-10-07/08/09'da ertelenen ölü CSS notunun 2/3'ü tamamlandı**: `saglik-turizmi-reklam-ajansi.html`
  da `eticaret-e-ihracat-ajansi.html` ile birebir aynı ~10 ölü seçiciden (`.sectors-intro`,
  `.sector-pill-nav` +`a`+`a:hover`, `.sector-block.bg-alt`/`.bg-dark` ve alt-override'ları, `.sector-split`
  + `.reverse` varyantları (duplicate `max-width:1024px` media query dahil), `.chip-select`,
  `.contact-section`/`::before`/`.contact-content`/`h2`/`>p`/`.sector-form-card` override) temizlendi.
  Her seçici tek tek `class="..."` ve JS (`querySelector`/`classList`/`getElementById`) referansı için
  grep ile doğrulandı — hiçbiri birleşmiş ağaçta kullanılmıyordu. Brace sayısı doğrulandı (297/297, önce
  ve sonra). `surucu-kursu-dil-okulu-reklam-ajansi.html` aynı bloğu hâlâ taşıyor — bu koşunun diff'ini
  küçük tutmak için 3/3 yine ertelendi (bir sonraki koşuda tamamlanabilir).
- Diff: 2 dosya, 170 satır (1 ekleme, 169 silme).

### Kontroller
- Tüm `.html` dosyalarında kopya `id` ve eksik `img alt` için script ile tam tarama yapıldı — repo
  genelinde hiçbiri bulunamadı.
- Tüm göreli `href`/`src`/`action` dosya referansları (kök-mutlak `/...` yollar dahil) diskteki dosyalarla
  karşılaştırıldı — kırık referans yok. Tüm aynı-sayfa `#anchor` linkleri gerçek `id`'lerle karşılaştırıldı
  — kırık anchor yok.
- `llms.txt` (42 `.html` referansı) / `sitemap.xml` (39 `<url>`) / `blog.html`: 31 blog yazısının hepsi
  mevcut, bu koşuda main'den yeni blog yazısı gelmedi — senkron.
- CLAUDE.md'nin iki-palet belirsizliği notu ve CSS paleti değerleri yeniden kontrol edildi — yeni sapma
  yok, insan kararı olarak bırakıldı (önceki koşularla aynı).
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/faturalama
  veya auth kodu yok. Copyright yılı (`© 2026`) güncel.

### ⚠️ Onay bekliyor
Yeni yok — liste boş.

## 2026-10-09

`origin/main`'i bu dala merge alırken yeni commit yoktu (`git merge origin/main` "Already up to date"
döndü — main'de 10-08'den beri değişiklik olmamış). PR #6 (`auto/2026-09-22`) hâlâ ayrı açık bekliyor,
dokunulmadı.

- **2026-10-07/08'de ertelenen ölü CSS notunun 1/3'ü tamamlandı**: 3 niş sayfasından sadece
  `eticaret-e-ihracat-ajansi.html` bu koşuda temizlendi (diğer ikisi —
  `saglik-turizmi-reklam-ajansi.html` ve `surucu-kursu-dil-okulu-reklam-ajansi.html` — bu dosyayla
  birebir aynı ölü CSS'i taşıyor, ama üçünü birden yapmak bu koşunun ~150 satır diff bütçesini
  anlamlı şekilde aşardı; tek dosya bile 169 satır oldu). Kaldırılan, grep ile doğrulanmış kullanılmayan
  seçiciler: `.sectors-intro`, `.sector-pill-nav` (+`a`, `a:hover`), `.sector-block.bg-alt`,
  `.sector-block.bg-dark` (ve `::before`, `.sector-icon-badge`, `.sector-text h2`, `.sector-text > p`,
  `.sector-tag`, `.sector-mini-stat .lbl` alt-override'ları), `.sector-split` ve
  `.sector-block.reverse .sector-split` (+`> *`) — hem ana tanım hem `max-width:1024px` media query
  içindeki tekrarı —, `.chip-select`, `.contact-section` (+`::before`, `.contact-content`, `h2`,
  `> .contact-content > p`, `.sector-form-card` override). Hepsi tek tek `class="..."` kullanımı ve
  satır içi JS (`querySelector`/`classList`) referansı için grep'lendi — hiçbiri eşleşmedi. Dosyada
  gerçekte kullanılan temel sınıflar (`.sector-block`, `.sector-block.bg-light`, `.sector-icon-badge`,
  `.sector-tags`, `.sector-tag`, `.sector-mini-stats`, `.sector-mini-stat .num`/`.lbl`,
  `.sector-form-card`) dokunulmadan bırakıldı — sadece bunların artık hiç tetiklenemeyen
  `.bg-dark`/`.reverse`/`.contact-section` altındaki override'ları kaldırıldı. Görsel/davranışsal
  değişiklik yok; `{`/`}` sayısı dengeli (302/302) doğrulandı.
- **Yeni tespit (bu koşuda dokunulmadı, sadece not)**: aynı dosyada (ve diğer iki niş sayfasında da
  aynı kalıp var) `.chip`, `.chip:hover`, `.chip.active` CSS kuralları da statik markup'ta hiç
  kullanılmıyor — tek "kullanıcısı" `genChips.querySelectorAll('.chip')` (satır ~2023) ama bu kod
  `document.getElementById('genSectorChips')`'e bağlı ve bu id hiçbir `.html` dosyasında yok, yani
  `if (genChips && genSectorValue)` koşulu her zaman false — kod asla çalışmıyor ama hataya da yol
  açmıyor (null-check ile korunmuş, zararsız ölü JS). `.chip-select`'i bu koşuda kaldırdım (orijinal
  ~10 seçici listesindeydi) ama `.chip` ailesini kapsam dışı tuttum — orijinal listede yoktu ve aynı
  koşuda ekstra kapsam genişletmek istemedim. Bir sonraki ölü-CSS turunda (diğer 2 niş sayfasıyla
  birlikte) bu üçü de değerlendirilebilir; silinmesi güvenli görünüyor (sadece asla çalışmayan JS'ten
  referans alınıyor) ama onay/karar gerektirmiyor, sadece bir hatırlatma.
- Diff: 1 dosya, 169 satır (169 silme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarındaki `href`/`src` referansları (dosya yolları + aynı-sayfa/sayfalar-arası
  anchor'lar) script ile diskteki dosyalar ve gerçek `id`'lerle karşılaştırıldı — kırık link/anchor
  bulunamadı. (404.html'deki kök-relatif `/favicon.png` gibi `/`-ile-başlayan 7 link scriptimde ilk
  başta "missing" göründü — script'in kontrolü sadece relative path'leri çözüyordu; elle doğrulandı,
  hepsi site kökünde gerçekten var, false positive.)
- Kopya `id` bulunamadı (tüm `.html` dosyaları, script ile tek tek).
- Eksik `alt` metni bulunamadı (repo genelinde regex ile kontrol edildi).
- `target="_blank"` linklerinde eksik `rel="noopener"` bulunamadı (repo genelinde).
- 31 blog yazısının hepsi `sitemap.xml`, `llms.txt` ve `blog.html`'de eksiksiz listeleniyor — eksik yok
  (main'den bu koşuda yeni blog yazısı gelmedi).
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor
  (tüm 8 değer tek tek karşılaştırıldı) — yeni sapma yok.
- Stray dev artifact (`.bak`, `.orig`, `~`, `Thumbs.db`, `.DS_Store`) bulunamadı. `git status` merge
  sonrası temiz, commit öncesi credential-benzeri dosya yok. Ödeme/faturalama veya auth kodu yok
  (statik site, beklenen).

### ⚠️ Onay bekliyor
- Yeni bir madde yok.

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
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7

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

## 2026-09-24

Not: `auto/main`'den bu dala merge alındı (`blog-egitim-google-yorumlari-itibar-yonetimi.html` yeni blog
yazısı dahil, main'den geldi, çakışma yok). #6 (`auto/2026-09-22`) hâlâ ayrı açık bekliyor, dokunulmadı.

- 6 blog yazısında (`blog-egitim-google-yorumlari-itibar-yonetimi.html`,
  `blog-egitim-kayit-maliyeti-kampanya-taktikleri.html`,
  `blog-egitim-reels-tiktok-organik-ogrenci-kazanimi.html`, `blog-korfez-hastalari-snapchat-ads.html`,
  `blog-saglik-turizmi-hasta-yorumlari-itibar-yonetimi.html`,
  `blog-saglik-turizmi-web-sitesi-donusum-ux.html`) sondaki CTA butonu `index.html#egitim` veya
  `index.html#saglik-turizmi`'ye linkliyordu — bu anchor'lar `index.html`'de hiç var olmamış (gerçek kırık
  link, tıklanınca sayfanın en üstüne düşüyordu). En yakın karşılık gelen gerçek section id'lerine
  düzeltildi: eğitim CTA'ları → `index.html#course-spotlight`, sağlık turizmi CTA'ları →
  `index.html#health-spotlight` (bu id'ler homepage'deki ilgili sektör spotlight bölümleriyle eşleşiyor).
- `llms.txt`: main'den gelen yeni blog yazısı (`blog-egitim-google-yorumlari-itibar-yonetimi.html`) "Blog ve
  Bilgi Bankası" listesinde eksikti, eklendi.
- `sitemap.xml`: 3 politika sayfası (`gizlilik-politikasi.html`, `cerez-politikasi.html`, `kvkk.html`) —
  hepsinde `<meta name="robots" content="index, follow">` var (indexlenmesi isteniyor) ama sitemap'te hiç
  yoktu — eklendi (düşük öncelik/priority 0.3, yearly).
- Diff: 8 dosya, 25 satır (19 ekleme / 6 silme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarındaki `href`/`img src` referansları diskteki dosyalarla karşılaştırıldı — kırık dosya
  yolu bulunamadı. Tüm in-page anchor (`#id`) linkleri hedef dosyalardaki `id`'lerle karşılaştırıldı — yukarıdaki
  6 blog CTA'sı dışında kırık anchor bulunamadı (`index-modern.html#sectors` hariç, o zaten orphan/bilinen).
- Kopya `id` bulunamadı, eksik `alt` metni bulunamadı.
- Kalan `target="_blank"` linklerinde eksik `rel="noopener"` bulunamadı (3 tanesi `index-modern.html`'de,
  daha önceden orphan olduğu için dokunulmuyor — 2026-09-23'te de aynı tespit).
- Yeni blog yazısında (`blog-egitim-google-yorumlari-itibar-yonetimi.html`) doğrulanamaz istatistik/vaka
  rakamı bulunamadı.
- Stray dev artifact (`.bak`, `.orig`, `~` vb.) bulunamadı.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. 2026-09-17'deki iki madde (orphan `index-modern.html` ve vaka analizi rakamları) hâlâ
  geçerli ve bekliyor.

## 2026-09-26

Not: `origin/main` ile `origin/auto/maintenance` zaten aynı commit'teydi (`git merge origin/main` "Already up
to date" döndü) — bu koşuda yeni bir merge yoktu. PR #6 (`auto/2026-09-22`) hâlâ ayrı açık bekliyor,
dokunulmadı.

- `CLAUDE.md`: "Mevcut renk paleti" bölümündeki 4 CSS değişkeni değeri artık `index.html`'deki gerçek
  `:root` tanımlarıyla eşleşmiyordu (muhtemelen daha önceki bir tasarım güncellemesinden kalma, dosya
  güncellenmemiş) — `--accent-light` (`#FFB84D` → gerçek değer `#FFA733`), `--bg-secondary` (`#F0F4F8` →
  `#F4F7FB`), `--bg-dark` (`#0F2744` → `#091A2F`), `--border` (`#D1DDE8` → `#D8E3EE`). Dördü de düzeltildi;
  diğer 8 değer (`--primary`, `--secondary`, `--accent`, `--bg`, `--text`, `--text-light`, `--text-white`,
  `--success`) zaten doğruydu, dokunulmadı.
- Diff: 1 dosya, 6 satır (3 ekleme / 3 silme).

### Kontroller
- Tüm `.html` dosyalarındaki `href`/`img src` referansları diskteki dosyalarla karşılaştırıldı (script ile,
  aynı-sayfa ve sayfalar-arası anchor'lar dahil) — kırık link/anchor bulunamadı, `index-modern.html#sectors`
  hariç (bilinen, orphan dosya).
- Kopya `id` bulunamadı (dosya başına kontrol edildi).
- Eksik `alt` metni bulunamadı; boş `alt=""` kullanılan tüm `<img>` etiketleri dekoratif logo ikonları
  (çoğu zaten `aria-hidden="true"` ile işaretli) — mevcut, kasıtlı bir pattern, yeni değil.
- `target="_blank"` linklerinde eksik `rel="noopener"` sadece `index-modern.html`'de (3 adet, bilinen/orphan)
  — yeni yok.
- `llms.txt` ve `sitemap.xml`: sitedeki 27 blog yazısının tamamı ve tüm ana sayfalar (index-modern.html hariç,
  kasıtlı) her ikisinde de mevcut — eksik yok.
- Orphan sayfa taraması: `index-modern.html` dışında referans almayan `.html` dosyası yok.
- `outreach_tracker_template.csv` zaten "Örnek..." (example) olarak etiketlenmiş sahte veri — ek bir işlem
  gerekmiyor.
- Stray dev artifact (`.bak`, `.orig`, `~` vb.) bulunamadı. `git status` temiz, commit öncesi secret benzeri
  dosya yok.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. 2026-09-17'deki iki madde (orphan `index-modern.html` ve vaka analizi rakamları) hâlâ
  geçerli ve bekliyor.

## 2026-09-28

Not: `origin/main`'i bu dala merge alırken `sitemap.xml`'de gerçek bir çakışma çıktı (main yeni blog yazısını
sitemap'e eklerken, bu dal daha önce (09-24) 3 politika sayfasını aynı `<url>` bloğunun hemen ardına eklemişti)
— trivial, iki taraf da farklı satırlar ekliyordu; her iki bloğu da koruyarak elle çözüldü. PR #6
(`auto/2026-09-22`) hâlâ ayrı açık bekliyor, dokunulmadı.

- Main'den gelen yeni blog yazısı `blog-saglik-turizmi-youtube-video-reklamlari.html`, 2026-09-24'te 6 diğer
  blog yazısında düzeltilen aynı kalıpta kırık bir CTA anchor'ıyla gelmiş: sondaki "Sağlık Turizmi için Teklif
  Al" butonu `index.html#saglik-turizmi`'ye linkliyordu — bu id `index.html`'de hiç var olmadı (tıklanınca
  sayfanın en üstüne düşüyordu). 09-24'teki kararla tutarlı şekilde gerçek karşılığına düzeltildi:
  `index.html#health-spotlight`.
- `llms.txt`: aynı yeni blog yazısı "Blog ve Bilgi Bankası" listesinde eksikti (merge sitemap.xml ve
  blog.html'e otomatik eklemişti ama llms.txt elle tutulan bir liste olduğu için atlanmıştı), eklendi.
- Diff: 2 dosya, 3 satır (2 ekleme / 1 silme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarındaki `href` referansları (dosya yolları + aynı-sayfa/sayfalar-arası anchor'lar)
  script ile diskteki dosyalar ve gerçek `id`'lerle karşılaştırıldı — yukarıdaki 1 madde dışında kırık link/
  anchor bulunamadı (`index-modern.html#sectors` hariç, bilinen/orphan).
- Kopya `id` bulunamadı (dosya başına kontrol edildi, yeni blog yazısı dahil).
- Eksik `alt` metni bulunamadı.
- `target="_blank"` linklerinde eksik `rel="noopener"` sadece `index-modern.html`'de (3 adet, bilinen/orphan)
  — yeni yok.
- Orphan sayfa taraması: `index-modern.html` dışında referans almayan `.html` dosyası yok.
- Yeni blog yazısındaki (`blog-saglik-turizmi-youtube-video-reklamlari.html`) yüzdelik rakamlar (%50, %60-70
  bütçe dağılımı) genel taktik tavsiye niteliğinde, "Gerçek Vaka Analizleri" bölümündeki gibi belirli bir
  müşteriye atfedilen sonuç rakamı değil — ek bir işaretleme gerekmedi.
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor (09-26'da
  düzeltilmişti) — yeni sapma yok.
- Stray dev artifact (`.bak`, `.orig`, `~` vb.) bulunamadı. `git status` merge sonrası temiz, commit öncesi
  secret benzeri dosya yok.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. 2026-09-17'deki iki madde (orphan `index-modern.html` ve vaka analizi rakamları) hâlâ
  geçerli ve bekliyor.

## 2026-10-01

`origin/main`'i bu dala merge alırken çakışma çıkmadı (main'den gelen tek yeni dosya,
`blog-egitim-google-ads-arama-kampanyasi.html`, ve `blog.html`/`sitemap.xml`'deki eklemeleri otomatik merge
oldu). PR #6 (`auto/2026-09-22`) hâlâ ayrı açık bekliyor, dokunulmadı.

- **`llms.txt`**: main'den gelen yeni blog yazısı (`blog-egitim-google-ads-arama-kampanyasi.html`, "Sürücü
  Kursu ve Dil Okulları İçin Google Ads Arama Kampanyası Rehberi") "Blog ve Bilgi Bankası" listesinde eksikti
  (merge `sitemap.xml` ve `blog.html`'e otomatik eklemişti ama `llms.txt` elle tutulan bir liste olduğu için
  atlanmıştı) — eklendi.
- Diff: 1 dosya, 1 satır (1 ekleme).

### Kontroller
- Yeni blog yazısının kapanış CTA'sı kontrol edildi — bu yazı önceki günlerde 7 farklı yazıda bulunan kırık
  `index.html#egitim`/`#saglik-turizmi` anchor kalıbını taşımıyor; `index.html#services` ve
  `index.html#contact`'e linkliyor, ikisi de gerçek id (önceki düzeltmelerden kalma pattern tekrarlanmamış).
- Tüm `.html` dosyalarındaki `href` referansları (dosya yolları + aynı-sayfa/sayfalar-arası anchor'lar)
  script ile diskteki dosyalar ve gerçek `id`'lerle karşılaştırıldı — kırık link/anchor bulunamadı,
  `index-modern.html#sectors` hariç (bilinen/orphan, değişmedi).
- Kopya `id` bulunamadı (dosya başına kontrol edildi, yeni blog yazısı dahil).
- Eksik `alt` metni bulunamadı.
- `target="_blank"` linklerinde eksik `rel="noopener"` sadece `index-modern.html`'de (3 adet, bilinen/orphan)
  — yeni yok.
- `sitemap.xml`/`blog.html`: yeni blog yazısı için tek, kopyasız kayıt var (merge sorunsuz).
- Yeni blog yazısında (`blog-egitim-google-ads-arama-kampanyasi.html`) doğrulanamaz müşteri-atıflı istatistik
  bulunamadı (tek yüzdelik rakam, "%10-15 üzerinde hedef gir" şeklinde genel taktik tavsiye, vaka analizi
  rakamı değil).
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor — yeni
  sapma yok.
- Stray dev artifact (`.bak`, `.orig`, `~` vb.) bulunamadı. `git status` merge sonrası temiz, commit öncesi
  secret benzeri dosya yok.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. 2026-09-17'deki iki madde (orphan `index-modern.html` ve vaka analizi rakamları) hâlâ
  geçerli ve bekliyor.

## 2026-10-04

`origin/main`'i bu dala merge alırken çakışma çıkmadı (otomatik merge ile çözüldü). Main'de son koşudan beri
6 commit vardı: Search Console doğrulama dosyası + 404.html + 11 eski BilgiKurumsal URL'si için `noindex`
yönlendirme sayfası (`biz-kimiz/`, `teklif-al/`, `store/m/5/` vb.), tüm sayfalara ortak `tracking.js` ile
rıza temelli (KVKK) GA4/Meta Pixel/GTM/Google Ads yüklemesi, ve — önemlisi — **2026-09-17'den beri bekleyen
iki "⚠️ Onay bekliyor" maddesinin ikisi de proje sahibi tarafından doğrudan çözüldü**: `index-modern.html`
silindi (orphan sayfa kararı artık gerekmiyor), ve ana sayfadaki atfedilmemiş "Gerçek Vaka Analizleri"
rakamları (€48,000+ ciro, 6.8x ROAS vb.) tamamen kaldırılıp yerine iddia içermeyen "Neyi Ölçüyoruz?" / KPI
odaklı bir bölüm geldi. Bu koşuda bu iki maddeyi tekrar önermiyorum — ikisi de artık "bekliyor" listesinde
değil.

- 3 niş sayfasında (`eticaret-e-ihracat-ajansi.html`, `saglik-turizmi-reklam-ajansi.html`,
  `surucu-kursu-dil-okulu-reklam-ajansi.html`) main'deki "Remove fabricated results..." commit'i, o
  sayfalardaki "örnek" etiketli rakamları ve uyarı metnini kaldırmıştı ama ikisinin de kullandığı CSS
  kuralları (`.placeholder-flag`, `.metric-disclaimer`) üç dosyada da hâlâ duruyordu — artık hiçbir HTML
  etiketi tarafından referans alınmayan ölü CSS. Üç dosyadan da ikişer kural (toplam 6 blok) kaldırıldı,
  görsel/davranışsal değişiklik yok.
- Diff: 3 dosya, 75 satır (75 silme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarındaki `href`/`src` referansları (dosya yolları + aynı-sayfa/sayfalar-arası anchor'lar)
  script ile diskteki dosyalar ve gerçek `id`'lerle karşılaştırıldı (artık orphan `index-modern.html` de
  yok) — kırık link/anchor bulunamadı.
- Yeni eklenen 11 yönlendirme (redirect) sayfası tek tek kontrol edildi: hepsi `noindex` + doğru
  `canonical` + doğru hedef URL'e sahip, `sitemap.xml`/`llms.txt`'e sızmamış (kasıtlı, doğru).
  `teklif-al/index.html`'in hedefi olan `index.html#audit-form` anchor'ı gerçek ve mevcut.
- Main'den bu koşuda yeni bir blog yazısı gelmedi (son yeni yazı 10-01'de zaten işlenmişti); yine de 29
  blog yazısının hepsi `llms.txt`, `sitemap.xml` ve `blog.html`'de eksiksiz listeleniyor, CTA anchor'ları
  (`#services`, `#contact`, `#sectors`, `#course-spotlight`, `#health-spotlight`) hepsi gerçek id'lere
  işaret ediyor.
- Kopya `id` bulunamadı (tüm `.html` dosyaları, redirect sayfaları dahil). Eksik `alt` metni bulunamadı.
- `target="_blank"` linklerinde eksik `rel="noopener"` bulunamadı (önceki koşularda tek kaynak olan
  `index-modern.html` artık silinmiş olduğu için repo'da sıfıra indi).
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor — yeni
  sapma yok.
- Stray dev artifact (`.bak`, `.orig`, `~`, `Thumbs.db`, `.DS_Store`) bulunamadı. `.agents/skills` ve
  `.claude/skills` dizinleri 2026-08-18'de proje sahibi tarafından kasıtlı eklenmiş (skills.sh ile); site
  içeriği değil, dokunulmadı. `git status` merge sonrası temiz, commit öncesi credential-benzeri dosya yok.
- Ödeme/faturalama veya auth kodu yok (statik site, beklenen).

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Önceki iki madde (orphan sayfa ve vaka analizi rakamları) bu koşuda yukarıda
  açıklandığı gibi main'de doğrudan çözüldüğü için listeden çıkarıldı.

## 2026-10-05

`origin/main`'i bu dala merge alırken `sitemap.xml`'de aynı tanıdık trivial çakışma çıktı (main yeni blog
yazısının `<url>` kaydını eklerken, bu dal önceki bir koşuda aynı bloğun hemen ardına ekleme yapmıştı) —
iki taraf da sadece ekleme yapıyordu, ikisi de korunarak elle çözüldü (`blog.html` için de otomatik merge
sorunsuz oldu). Main'den gelen tek yeni içerik: `blog-almanya-saglik-turizmi-dis-klinigi-meta-ads.html`
("Almanya'dan Diş Hastası Çekmek İçin Almanca Meta Ads Stratejisi"), `blog.html` ve `sitemap.xml`'e zaten
eklenmiş olarak geldi.

- **`llms.txt`**: her zamanki tekrarlayan boşluk — main'den gelen yeni blog yazısı "Blog ve Bilgi Bankası"
  listesinde eksikti (bu dosya elle tutuluyor, `blog.html`/`sitemap.xml`'e otomatik eklenen yeni yazılar
  buraya sızmıyor). Eklendi.
- Diff: 1 dosya, 1 satır (1 ekleme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Yeni blog yazısının kapanış/nav CTA'ları kontrol edildi — hepsi `index.html#services` ve
  `index.html#contact`'e linkliyor, ikisi de gerçek id; önceki koşularda görülen kırık
  `#egitim`/`#saglik-turizmi` kalıbı bu yazıda yok.
- Tüm `.html` dosyalarındaki `href`/`src` referansları (dosya yolları + aynı-sayfa/sayfalar-arası
  anchor'lar) script ile diskteki dosyalar ve gerçek `id`'lerle karşılaştırıldı — repo genelinde kırık
  link/anchor bulunamadı.
- Kopya `id` bulunamadı (tüm `.html` dosyaları, yeni blog yazısı dahil, script ile kontrol edildi).
- Eksik `alt` metni bulunamadı (repo genelinde script ile kontrol edildi).
- `target="_blank"` linklerinde eksik `rel="noopener"` bulunamadı.
- `sitemap.xml`: `googled9b1b023e4cc4604.html` (Search Console doğrulama dosyası) kasıtlı olarak
  sitemap'te yok — site içeriği değil, index edilecek bir sayfa değil, doğru davranış.
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor
  (tüm 8 değer tek tek karşılaştırıldı) — yeni sapma yok.
- Yeni blog yazısında doğrulanamaz müşteri-atıflı istatistik/vaka rakamı bulunamadı.
- Stray dev artifact (`.bak`, `.orig`, `~`, `Thumbs.db`, `.DS_Store`) bulunamadı. `git status` merge
  sonrası temiz, commit öncesi credential-benzeri dosya yok. Ödeme/faturalama veya auth kodu yok (statik
  site, beklenen).

### ⚠️ Onay bekliyor
- Yeni bir madde yok.

## 2026-10-07

`origin/main`'i bu dala merge alırken çakışma çıkmadı (`git merge origin/main` "Already up to date"
döndü — bu koşuda main'de 10-05'ten beri yeni commit yoktu). PR #6 (`auto/2026-09-22`, stale blog makale
sayısı + `CLAUDE.md` "tek dosyalık" ifadesi) hâlâ ayrı açık bekliyor, dokunulmadı — o ikisi tekrar
önerilmedi.

- **Ölü CSS, `logo-wordmark`**: `.logo-wordmark { display: block; height: 28px; width: auto; }` kuralı 31
  dosyada (`blog.html`, 23 `blog-*.html` yazısı, 3 niş sayfası, 3 politika sayfası) tanımlıydı ama hiçbir
  HTML etiketinde `class="...logo-wordmark..."` olarak kullanılmıyordu (gerçek logo markup'ı `logo-mark` +
  `logo-text` kullanıyor, `logo-wordmark` hiç uygulanmamış) — hepsinden kaldırıldı (`index.html`'de zaten
  yoktu).
- **Ölü CSS, `index.html`**: main'deki "Remove fabricated results, fake live activity and AI mock images"
  (39402cc) ve "Fix homepage lead form and remove AI-generated expert photo" (4fe0750) commit'leri ilgili
  HTML markup'ını kaldırmış ama arkasında kullanılmayan CSS kuralları bırakmıştı (09-26/10-04'teki
  `.placeholder-flag`/`.metric-disclaimer` temizliğiyle aynı kalıp):
  - `.live-lead-toast-container`, `.live-lead-toast`, `@keyframes slideInToast`, `@keyframes fadeOutToast`,
    `.toast-icon-wrap`, `.toast-content`, `.toast-title`, `.toast-time`, `.toast-desc` — eski "canlı lead"
    toast bildirimi kaldırılmıştı, bu 9 kural artık hiçbir yerde kullanılmıyordu. **Not**: aynı blokta
    `.toast-live-dot` ve `@keyframes pulseGreen` hâlâ gerçekten kullanılıyor (WhatsApp widget'ındaki
    "Çevrimiçi" durumu noktası) — bu ikisi bilerek dokunulmadan bırakıldı, yorum satırı da buna göre
    güncellendi.
  - `.expert-photo-wrap`, `.expert-photo-wrap img`, `.expert-tag-float`, `.expert-tag-float .name`,
    `.expert-tag-float .role` — "AI-generated expert photo" kaldırılıp `expert-grid--solo` (fotoğrafsız,
    tek kolonlu) düzene geçilmiş, bu 5 kural artık kullanılmıyordu.
  - `.image-showcase-box`, `.image-showcase-box img`, `.image-showcase-box:hover img` — markup'ta hiç
    karşılığı yok (muhtemelen daha önce kaldırılmış bir görsel bloğundan kalıntı).
- Diff: 32 dosya, 114 satır (1 ekleme / 113 silme). Görsel/davranışsal değişiklik yok (sadece kullanılmayan
  CSS kuralları kaldırıldı).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarındaki `href`/`src` referansları (dosya yolları + aynı-sayfa/sayfalar-arası
  anchor'lar) script ile diskteki dosyalar ve gerçek `id`'lerle karşılaştırıldı — repo genelinde kırık
  link/anchor bulunamadı.
- Kaldırılan her CSS sınıfı için HTML'de `class="..."` içinde literal kullanım, satır içi JS
  (`querySelector`/`classList`) referansı ve (varsa) bileşik seçici (`.parent.child`) kalıpları tek tek
  grep ile doğrulandı — hiçbiri gerçekte kullanılmıyordu. `.toast-live-dot`/`@keyframes pulseGreen` özellikle
  ayrıca kontrol edildi ve WhatsApp widget'ında kullanıldığı doğrulandığı için dokunulmadı.
- Kopya `id` bulunamadı; eksik `alt` metni bulunamadı; `target="_blank"` linklerinde eksik `rel="noopener"`
  bulunamadı (repo genelinde).
- `sitemap.xml`/`llms.txt`/`blog.html`: 30 blog yazısının hepsi üçünde de eksiksiz listeleniyor — eksik yok.
- Tüm redirect sayfaları (`biz-kimiz/`, `teklif-al/`, `store/m/5/`, eski BilgiKurumsal URL'leri vb.) tek tek
  kontrol edildi: hepsinde `noindex` + doğru `canonical` + çalışan `meta refresh` hedefi var, hiçbiri
  `sitemap.xml`/`llms.txt`'e sızmamış (kasıtlı, doğru).
- `tracking.js`'in her sayfaya dahil edildiği doğrulandı — tek istisna, 15 anlık-yönlendirme (instant
  `meta refresh`) sayfası ve Search Console doğrulama dosyası (`googled9b1b023e4cc4604.html`); bunlar
  ziyaretçiye hiç render olmadan anında yönlendirdiği için tracking'e ihtiyaç duymuyor — kasıtlı, sorun
  değil.
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor — yeni
  sapma yok. Copyright yılı (`© 2026`) bugünün tarihiyle (2026-10-07) uyumlu, güncel.
- Stray dev artifact (`.bak`, `.orig`, `~`, `Thumbs.db`, `.DS_Store`) bulunamadı. `git status` merge sonrası
  temiz, commit öncesi credential-benzeri dosya yok. Ödeme/faturalama veya auth kodu yok (statik site).

### Not (devam eden tespit, bir karar gerektirmiyor — sadece diff boyutu için bu koşuda ertelendi)
- 3 niş sayfasında (`eticaret-e-ihracat-ajansi.html`, `saglik-turizmi-reklam-ajansi.html`,
  `surucu-kursu-dil-okulu-reklam-ajansi.html`) `.bg-alt`, `.bg-dark` (sector-block varyantı, CSS değişkeni
  `--bg-dark` ile karıştırılmasın), `.chip-select`, `.contact-content`, `.contact-section` ve ilgili alt
  seçiciler, `.reverse`, `.sector-pill-nav`, `.sector-split`, `.sector-text`, `.sectors-intro` gibi ~10 seçici
  tanımlı ama üç dosyada da artık `class="..."` içinde literal kullanımı yok (tek `sector-block` örneği
  sadece `bg-light` kullanıyor) — muhtemelen önceki bir "sector split / alternating background" tasarımından
  kalıntı. Bu, bu koşudaki `logo-wordmark`/`index.html` temizliğiyle aynı ölü-CSS kalıbı, ama üç dosya
  arasında seçici başına tek tek doğrulama gerektiriyor ve bu koşunun diff bütçesini zorlardı — bu yüzden bu
  koşuda dokunulmadı. Bir yargı/onay gerektirmiyor, sadece bir sonraki koşuya bırakıldı.

### ⚠️ Onay bekliyor
- Yeni bir madde yok.

## 2026-10-08

`origin/main`'i bu dala merge alırken çakışma çıkmadı (temiz merge). Main'de bu koşuda 5 yeni commit vardı:
yeni blog yazısı (`blog-hepsiburada-reklam-yonetimi-sponsorlu-urun.html`), homepage'e gerçek/anonim kampanya
verisi bloğu (bir diş kliniği müşterisi, 30 günlük Meta Ads tablosu + ikinci müşteri özeti), homepage'e
"Kendi Projelerimiz" bölümü (Grafix ve Partsmercedestr'i gösteren iki kart) ve gerçek kurucu fotoğrafı
(`kurucu-atakan-akbala.jpg`, siyah-beyaz) eklenmesi.

- **Gerçek regresyon, metin aramasıyla bulundu**: "Add real founder photo" commit'i `expert-section`
  markup'ını eski haline döndürüp `.expert-photo-wrap` / `.expert-tag-float` sınıflarını tekrar kullanmaya
  başladı — ama bu iki sınıfın CSS tanımları 2026-10-07 koşusunda tam olarak bu dal üzerinde "ölü CSS" diye
  kaldırılmıştı (o zaman markup fotoğrafsız `expert-grid--solo` düzenindeydi). Git merge metinsel çakışma
  görmedi çünkü biri `<style>` bloğunu, diğeri `<body>` içindeki markup'ı değiştiriyordu — ama sonuç olarak
  gerçek kurucu fotoğrafı stilsiz/konumsuz render olacaktı. 2026-10-07'de kaldırılan 5 CSS kuralını
  (`.expert-photo-wrap`, `.expert-photo-wrap img`, `.expert-tag-float`, `.expert-tag-float .name`,
  `.expert-tag-float .role`) git geçmişinden (`2aeeb93`) birebir aynı değerlerle geri ekledim. Aynı anda artık
  markup'ta hiç kullanılmayan `.expert-grid--solo` ve `.expert-grid--solo .benefit-pill-item` kurallarını da
  kaldırdım (fotoğraf geri geldiği için düzen tekrar iki-kolonlu `expert-grid`'e döndü, `--solo` varyantı
  artık hiçbir yerde `class="..."` içinde geçmiyor — grep ile doğrulandı).
- **`llms.txt`**: aynı recurring gap — yeni blog yazısı "Blog ve Bilgi Bankası" listesinde yoktu. Eklendi.

### Kontroller
- Yeni blog yazısında ve homepage'in yeni bölümlerinde (`real-data-card`, `own-projects-section`) eksik
  `rel="noopener"` bulunamadı (tüm `target="_blank"` linkleri kontrol edildi).
- Yeni iki `<img>` (`proje-grafix.jpg`, `proje-partsmercedestr.jpg`) ve kurucu fotoğrafında (`kurucu-atakan-akbala.jpg`)
  `alt` metni mevcut ve açıklayıcı; repo genelinde eksik `alt` bulunamadı.
- Kopya `id` bulunamadı (`index.html` dahil, tüm dosyalar).
- Yeni "Gerçek kampanya verisi" bloğu zaten kaynak/not etiketli ("Kaynak: Meta Ads Manager raporları...",
  müşteri adı/bütçe paylaşılmadığı belirtilmiş) — ek bir "placeholder/fake" etiketlemesi gerekmiyor, zaten
  doğru şekilde işaretlenmiş. "Kendi Projelerimiz" bölümü de "müşteri referansı değildir" notuyla doğru
  şekilde ayrıştırılmış.
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor — yeni
  sapma yok. CLAUDE.md'deki iki-palet belirsizliği notu hâlâ duruyor, kasıtlı olarak dokunulmadı (insan
  kararı gerektiriyor).
- Stray dev artifact bulunamadı, credential-benzeri dosya commit edilmedi. Ödeme/faturalama veya auth kodu
  yok (statik site).
- 2026-10-07'den devam eden 3 niş sayfasındaki (~10 seçici) ölü CSS notu hâlâ ertelenmiş durumda — bu koşuda
  tekrar dokunulmadı (bu koşunun bütçesi gerçek regresyon düzeltmesine gitti).

### ⚠️ Onay bekliyor
- Yeni bir madde yok.

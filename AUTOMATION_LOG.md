# Automation Log

Bu dosya, `metricsell-website` reposunda günlük otomatik bakım taramalarının (Claude Code)
geçmişini ve onay bekleyen konuları tutar. Her yeni çalıştırma buraya yeni bir tarih başlığı
olarak eklenir; önceki öneriler tekrar önerilmez.

---

## 2026-09-21

**PR:** https://github.com/atakanakbala-del/metricsell-website/pull/5

### Öneriler
- `index.html` navbar'ındaki "Hizmetlerimiz" dropdown başlığı `href="#sectors"` çapasına
  gidiyordu, ancak sayfada `id="sectors"` tanımlı bir element yoktu (dropdown alt linkleri
  zaten doğru çalışıyordu, sadece üst başlığa direkt tıklama hiçbir yere kaydırmıyordu).
  `#health-spotlight`'a (dropdown'daki ilk gerçek hedef) yönlendirildi.

### Taranan ama sorun bulunmayan alanlar
- Tüm `.html` dosyalarında dahili `href="...html"` ve `src="..."` referansları (repodaki
  gerçek dosyalarla karşılaştırıldı) — hepsi geçerli.
- Tüm sayfalarda `#anchor` linkleri vs. sayfa içi `id`'ler — `index.html`'deki `#sectors`
  dışında kırık anchor yok.
- `<img>` etiketlerinde eksik `alt` — repo genelinde hiçbiri eksik değil.
- Lorem ipsum / belirgin placeholder metin — bulunmadı. `ornek@firma.com` /
  `ornek@klinik.com` / `ornek@kurum.com` gibi adresler zaten "örnek" (example) olarak
  açıkça etiketlenmiş durumda, gerçek iletişim bilgisi (`info@metricsell.com`,
  `+90 536 985 29 26`) ile karışmıyor.
- `index.html` HTML tag dengesi (div/section/nav/ul/li/a/span/footer/form open=close)
  script ile doğrulandı, sorun yok.

### ⚠️ Onay bekliyor
- **Renk paleti tutarsızlığı:** `CLAUDE.md`'de not edilen konu — bu dosyadaki `:root`
  paleti (`--primary:#1B3A5C` lacivert / `--accent:#FF8C00` turuncu) ile ana MetricSell
  CLAUDE.md'sinde geçen palet (`lacivert #0F3A60` / `amber #F5A623`) birebir aynı değil.
  Bu bir tasarım kararı, otomasyon tarafından çözülmedi — hangi paletin esas alınacağına
  karar verilmesi gerekiyor.
- **`index-modern.html` — amaç belirsiz, kullanımda değil:** Repoda `index.html` ile
  birlikte duran bu dosya hiçbir sayfadan linklenmiyor, `sitemap.xml`'de de yok; muhtemelen
  önceki bir tasarım denemesi/taslak. CLAUDE.md'de bahsedilen "yeni web sitesi" tasarım
  çalışması aktif olarak sürüyor olabileceğinden, bunun kasıtlı bir taslak mı yoksa
  silinebilir bir scratch dosyası mı olduğuna karar verilmeden silinmedi.
- **Boş Google Search Console doğrulama kodu:** `index.html`'de
  `<meta name="google-site-verification" content="GSC_VERIFICATION_CODE_HERE">` satırı
  hâlâ placeholder değerde duruyor — gerçek GSC kodu hiç girilmemiş. Kullanıcı tarafında
  bir eylem gerektirdiği ve otomasyonun tahmin edebileceği bir değer olmadığı için
  dokunulmadı.

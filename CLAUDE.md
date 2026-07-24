# MetricSell Website — Proje Bilgi Dosyası

## Proje Amacı

Bu repo, **MetricSell'in yeni web sitesi ve marka kimliği** projesini içerir. Amaç, mevcut BilgiKurumsal platformu tabanlı siteyi yenileyip MetricSell'i güçlü, güvenilir ve modern bir ajans kimliğiyle temsil eden bağımsız bir site oluşturmak.

Bu site, MetricSell'in kademeli büyüme vizyonunun (solo/küçük ekip → gerçek ekip → tam kapsamlı ajans) görünür ilk adımlarından biridir.

## MetricSell Hakkında

MetricSell, İstanbul merkezli bir e-ticaret ve dijital pazarlama danışmanlık firmasıdır. Hizmet dalları:

1. **E-ticaret / e-ihracat danışmanlığı**
2. **Sağlık turizmi müşteri kazanımı** — diş klinikleri, Fransızca konuşan Avrupa ve Arapça konuşan Körfez pazarlarını hedefliyor
3. **Eğitim sektörü** (yeni hedef dal) — sürücü kursları, İngilizce/dil kursları için sosyal medya, Meta Ads ve müşteri yönetimi hizmetleri

### Hedeflenen Hizmet Kapsamı (Büyüme Vizyonu)

Sitede vurgulanması gereken uzun vadeli hizmet kapsamı:
- Tasarım çalışması (grafik, kreatif üretim)
- Reklam yönetimi (Meta Ads, Google Ads)
- Firmalara uçtan uca Meta Ads yönetimi
- Lead toplama ve müşteriye dönüştürme süreçleri (funnel/CRM)
- Teknoloji destekli otomasyon (WhatsApp bot, lead scoring, CRM entegrasyonları)
- Pazaryeri yönetimi (Trendyol, Hepsiburada)
- İçerik & SEO
- Çok dilli müşteri kazanımı (Fransızca/Arapça)
- Web tasarım / landing page geliştirme
- Satış ekibi outsourcing

### Gelir Hedefi
- İlk ay hedefi: **3.000 USD**

## Mevcut Tasarım / Teknik Yapı

Site şu an tek dosyalık, framework kullanmayan bir **statik HTML/CSS** yapısında (`index.html`). Türkçe içerik (`lang="tr"`).

**Mevcut renk paleti (CSS değişkenleri, `:root` içinde tanımlı):**
- `--primary: #1B3A5C` (koyu lacivert)
- `--secondary: #6B8BAE` (orta ton mavi-gri)
- `--accent: #FF8C00` (turuncu)
- `--accent-light: #FFB84D`
- `--bg: #FFFFFF`, `--bg-secondary: #F0F4F8`, `--bg-dark: #0F2744`
- `--text: #1B3A5C`, `--text-light: #6B8BAE`, `--text-white: #FFFFFF`
- `--border: #D1DDE8`
- `--success: #34C759`

Not: Ana MetricSell CLAUDE.md dosyasında geçen "lacivert `#0F3A60` / amber `#F5A623`" paletiyle bu dosyadaki renkler yakın ama birebir aynı değil — tasarım çalışmasında hangi paletin esas alınacağına karar verilmeli.

**Google Fonts** kullanılıyor (`fonts.googleapis.com` üzerinden import edilmiş).

## Çalışma Notları

- Atakan adım adım, rehberli çalışma tarzını tercih ediyor; her aşamada görsel onay istiyor
- Sık sık ekran görüntüsü paylaşarak sorunları iletiyor
- Uzun teknik açıklamaları okumak yerine rehberli talimatları tercih ediyor
- Bu repo, ana **Metricsell** reposundan (mevcut iş altyapısı ve müşteri projeleri) tamamen ayrı tutuluyor — işlerin karışmaması için

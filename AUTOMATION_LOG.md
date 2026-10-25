# Automation Log

## 2026-10-25

`git merge origin/main` was a no-op (`main`'s tip still `1172e3e`, unchanged since 2026-10-22's
new blog post — no new post published this run).

Full repo-wide re-verification pass, independently re-run from scratch, nothing new found:
- `llms.txt` / `sitemap.xml` / `blog.html`: all three list exactly the same 35 `blog-*.html`
  filenames as disk (35/35/35), diffed file-by-file — no gap.
- Scripted href/src/action check across all 60 site `.html` files against files on disk, plus
  every `href="...#id"` (same-page and cross-page) against real `id="..."` targets: no broken
  links, no broken anchors (the only two hits were `${esc(f.image)}` template-literal strings in
  `.claude/skills/`/`.agents/skills/` sample assets — not site content, not real references).
- No `<img>` missing `alt`, no duplicate `id`s, no `target="_blank"` without `rel="noopener"`
  anywhere in site content.
- `TODO`/`FIXME`/"lorem ipsum"/placeholder-text sweep: only hits were the intentional
  `placeholder="05XX XXX XX XX"` phone-format hints on 4 contact forms — not placeholder copy.
  No stray dev artifacts (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`).
- `CLAUDE.md`'s documented palette still matches `index.html`'s actual `:root` values exactly
  (`--primary`, `--secondary`, `--accent`, `--accent-light`, `--bg`, `--bg-secondary`, `--bg-dark`,
  `--text`, `--text-light`, `--border`, `--success`) — no drift. The two-palette ambiguity note
  right below it is still there, untouched (human decision, not this run's call).
- All 15 redirect stubs re-checked individually: `noindex` + `canonical` + working `meta refresh`
  present on every one.
- `tracking.js` confirmed on every real content page; the only exceptions are the same 15 instant
  `meta refresh` redirect stubs and the Search Console verification file
  (`googled9b1b023e4cc4604.html`) — intentional, unchanged.
- Re-confirmed the standing ⚠️ item (unsourced "%30-40 daha düşük görünürlük" stat in
  `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`) is still present — left untouched,
  it's a copy/content decision.

**No code changed this run.**

### ⚠️ Onay bekliyor
- Unchanged: the unsourced stat above.

## 2026-10-24

`git merge origin/main` was a no-op (`main`'s tip still `1172e3e`, unchanged since 2026-10-22's
new blog post).

Full repo-wide re-verification pass, independently re-run from scratch (not just re-reading the
2026-10-23 entry), nothing new found:
- `llms.txt` / `sitemap.xml` / `blog.html`: all three list exactly the same 35 `blog-*.html`
  filenames as disk (35/35/35), diffed file-by-file — no gap.
- Scripted href/src check across all 45 `.html` files against files on disk, plus every
  `href="...#id"` (same-page and cross-page) against real `id="..."` targets: no broken links,
  no broken anchors.
- No `<img>` missing `alt`, no duplicate `id`s, no `target="_blank"` without
  `rel="noopener"` anywhere in the repo.
- `TODO`/`FIXME`/"lorem ipsum"/placeholder-text sweep: none found. No stray dev artifacts
  (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`).
- `CLAUDE.md`'s documented palette still matches `index.html`'s actual `:root` values exactly —
  no drift. The two-palette ambiguity note right below it is still there, untouched (human
  decision, not this run's call).
- Re-confirmed the standing ⚠️ item (unsourced "%30-40 daha düşük görünürlük" stat in
  `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`) is still present — left untouched,
  it's a copy/content decision.

**No code changed this run.**

### ⚠️ Onay bekliyor
- Unchanged: the unsourced stat above.

## 2026-10-23

`git merge origin/main` was a no-op (`main`'s tip still `1172e3e`, unchanged since 2026-10-22's
new blog post, already merged in that run).

Full repo-wide re-verification pass, nothing genuinely new found:
- `llms.txt` / `sitemap.xml` / `blog.html`: all three list exactly the same 35 `blog-*.html`
  files present on disk — no gap.
- Scripted href/src/action check across all 45 `.html` files against files on disk: no broken
  links.
- Scripted in-page/cross-page anchor check (every `href="...#id"` against real `id="..."`
  targets): no broken anchors.
- No missing `alt` text, no duplicate `id`s, no `target="_blank"` without
  `rel="noopener"` anywhere.
- `CLAUDE.md`'s documented palette (`--accent-light: #FFA733`, `--bg-secondary: #F4F7FB`,
  `--bg-dark: #091A2F`, `--border: #D8E3EE`, etc.) still matches `index.html`'s actual `:root`
  values exactly — already in sync from an earlier run, no drift this time.
- `TODO`/`FIXME`/"lorem ipsum"/placeholder-text sweep: none found. No stray dev artifacts
  (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`).
- Re-confirmed the standing ⚠️ item (unsourced "%30-40 daha düşük görünürlük" stat in
  `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`) is still present — left untouched,
  it's a copy/content decision.

**No code changed this run.**

### ⚠️ Onay bekliyor
- Unchanged: the unsourced stat above.

## 2026-10-22

`git merge origin/main` brought in 1 new commit since 2026-10-21: a new blog post,
`blog-saglik-turizmi-cok-dilli-seo-fransizca-arapca.html` ("Sağlık Turizminde Çok Dilli SEO:
Fransızca ve Arapça Pazarlarda Organik Görünürlük Rehberi"). Clean auto-merge, no textual
conflicts (`blog.html`/`sitemap.xml` auto-merged, both already updated by the owner).

- **`llms.txt`**: the recurring gap, again — `blog.html` and `sitemap.xml` already had the new
  post (35/35 each, matching the 35 `blog-*.html` files now on disk) but `llms.txt` was missing
  it. Added to the "Blog ve Bilgi Bankası" list; all three now list the same 35 posts.
- **New post's own internal consistency check found a genuinely broken anchor**: its `post-cta`
  linked to `index.html#saglik-turizmi`, an id that does not exist anywhere in `index.html`
  (confirmed via repo-wide search — no page defines `id="saglik-turizmi"`). Sibling sağlık
  turizmi posts use one of two valid patterns instead — `saglik-turizmi-reklam-ajansi.html#contact`
  (id confirmed present, used by 4 other posts) or `index.html#health-spotlight` (id confirmed
  present, used by 3 other posts). Fixed to `saglik-turizmi-reklam-ajansi.html#contact`, the more
  common of the two and a direct route to the contact form. All other `href`/`src` references in
  the new post (internal pages, `favicon.png`, `logo-icon*.png`, `tracking.js`) resolve; its one
  `target="_blank"` link (Instagram) already has `rel="noopener noreferrer"`; no duplicate ids; no
  missing `alt`.
- **New post also re-introduced the blog-template palette drift** (same recurring pattern as
  2026-10-19/20/21): its embedded `:root` carried the pre-2026-09-26 stale values
  (`--accent-light: #FFB84D`, `--bg-secondary: #F0F4F8`, `--bg-dark: #0F2744`, `--border: #D1DDE8`)
  plus the matching hardcoded `.post-hero` gradient hex (`#F0F4F8`), even though every other
  `blog-*.html` file was corrected on 2026-10-20. Root cause confirmed unchanged: the blog post
  *template* itself (not a tracked file, just copied per new post) was never updated, so each new
  post keeps reintroducing the old values. Fixed this one file to match `index.html`'s current
  values (`#FFA733` / `#F4F7FB` / `#091A2F` / `#D8E3EE`), same substitution used in the 2026-10-20
  cleanup.
- **Picked up the 2026-10-21-deferred hero-gradient item, fully**: the 6 standalone pages flagged
  then (`cerez-politikasi.html`, `gizlilik-politikasi.html`, `kvkk.html`,
  `saglik-turizmi-reklam-ajansi.html`, `eticaret-e-ihracat-ajansi.html`,
  `surucu-kursu-dil-okulu-reklam-ajansi.html`) still had their hero background written as the
  hardcoded literal `linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)` instead of the corrected
  tone. Fixed all 6 (swapped the stale hex for `#F4F7FB`, matching `var(--bg-secondary)`'s current
  value). **Correction to the 2026-10-21 log**: that entry stated "`blog.html`'s own hero doesn't
  have this pattern" — re-checked this run and found `blog.html`'s `.blog-hero` rule *does* carry
  the identical hardcoded `#F0F4F8` literal (confirmed via `git log -L` that this line predates
  2026-10-21, so it was simply missed, not introduced since). Fixed it too. Repo-wide grep for
  `F0F4F8` now returns zero matches — this closes out the hero-gradient item for good.
- Full scripted repo-wide pass (broken `href`/`src`/anchor references incl. root-absolute, duplicate
  ids, missing `alt`, missing `rel="noopener"` on `target="_blank"`, stray dev artifacts,
  TODO/placeholder/lorem scan) — all clean beyond the above.
- Re-confirmed the 2026-10-12 unsourced-stat flag (see "⚠️ Onay bekliyor" below) is still present,
  untouched as instructed.
- Diff: 9 files, 13 insertions / 12 deletions (well within budget).

### Kontroller
- `llms.txt` / `sitemap.xml` / `blog.html` — gap düzeltildi, üçü de şimdi 35/35/35, diskteki 35
  `blog-*.html` dosyasıyla birebir.
- Yeni yazıdaki kırık `index.html#saglik-turizmi` anchor'ı `saglik-turizmi-reklam-ajansi.html#contact`
  olarak düzeltildi (id doğrulandı).
- Yeni yazıdaki eski palet değerleri (`--accent-light`, `--bg-secondary`, `--bg-dark`, `--border`,
  `.post-hero` gradient) `index.html`'in güncel değerlerine düzeltildi.
- 2026-10-21'de ertelenen hero-gradient maddesi (6 dosya + gözden kaçan `blog.html`) tamamlandı —
  repo genelinde artık hiçbir `#F0F4F8` referansı yok.
- `target="_blank"` / kopya `id` / eksik `alt` taraması repo genelinde temiz.
- Stray dev artifact yok, `.env*` dosyası yok, ödeme/auth kodu yok (statik site). `git status`
  temiz (bu commit hariç).

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-21

`git merge origin/main` was a no-op — no new commits since the 2026-10-19 blog post (`main`'s
tip is still `759b636`). `llms.txt`/`sitemap.xml`/`blog.html` still list the same 34 posts
(34/34/34) — no gap this run.

**Finished the palette-drift cleanup deferred on 2026-10-20**: fixed the remaining 7 files
that still carried the pre-2026-09-26 palette — `blog.html` itself plus the 6 standalone pages
(`cerez-politikasi.html`, `gizlilik-politikasi.html`, `kvkk.html`,
`saglik-turizmi-reklam-ajansi.html`, `eticaret-e-ihracat-ajansi.html`,
`surucu-kursu-dil-okulu-reklam-ajansi.html`). Verified read-only first: all 7 had the identical
stale `--accent-light: #FFB84D`, `--bg-secondary: #F0F4F8`, `--bg-dark: #0F2744`,
`--border: #D1DDE8` block; none of the 7 contain a `.post-hero` class (that was specific to the
blog-post template already fixed 2026-10-20), so no gradient fix was needed here. Updated all
four variables in all 7 files to match `index.html`'s current values (`#FFA733`, `#F4F7FB`,
`#091A2F`, `#D8E3EE`). Re-ran the full checklist after editing: `rel="noopener"` on every
`target="_blank"` link (clean), no duplicate `id`s in any of the 7 files, `<style>` tag balance
clean, `git status` otherwise clean. Diff: 7 files, 50 lines. No visual/behavioral change other
than the color fix itself (this closes out the palette-drift item — no more stale occurrences of
the old 4 values anywhere in the repo).

**New finding, deferred (not a judgment call, just diff-budget)**: `blog.html` and the same 6
standalone pages (plus `eticaret-e-ihracat-ajansi.html`/`saglik-turizmi-reklam-ajansi.html`/
`surucu-kursu-dil-okulu-reklam-ajansi.html`, 6 files total — `blog.html`'s own hero doesn't have
this pattern) have a `.legal-hero`/sector-hero background written as a **hardcoded hex literal**
(`linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)`) instead of `var(--bg-secondary)` — so even
though the CSS variable itself is now correct (fixed above), these hero backgrounds still
visually render the *old* `#F0F4F8` tone rather than today's `#F4F7FB`. Mechanical fix (swap the
literal for `var(--bg-secondary)` or the new hex), left for a future run's diff budget since
today's budget went to the variable fix above.

### ⚠️ Onay bekliyor
- Yeni bir madde yok (yukarıdaki hardcoded-hex bulgusu bir onay gerektirmiyor, mekanik bir
  düzeltme — sadece ertelendi).

## 2026-10-20

`git merge origin/main` was a no-op — no new commits since the 2026-10-19 blog post
(`main`'s tip is still `759b636`). `llms.txt`/`sitemap.xml`/`blog.html` all still list the
same 34 posts (34/34/34, matches disk) — no gap this run.

**Picked up the 2026-10-19-deferred blog-template palette drift, in part**: fixed the 28
`blog-*.html` files that share the shared blog-post template and still carried the old
pre-2026-09-26 palette (`--accent-light: #FFB84D`→`#FFA733`, `--bg-secondary: #F0F4F8`→
`#F4F7FB`, `--bg-dark: #0F2744`→`#091A2F`, `--border: #D1DDE8`→`#D8E3EE`, plus the
`.post-hero` gradient's hardcoded `#F0F4F8`→`#F4F7FB`), matching `index.html`'s current
values (confirmed via direct read of `index.html`'s `:root` block and `CLAUDE.md`'s
documented palette). Verified read-only first: grepped all 34 `blog-*.html` files, found
exactly 28 with the identical 3-line stale `:root` block (byte-for-byte match across all
28) plus the gradient line — a pure value substitution, not a structural edit, and the
other `--primary`/`--secondary`/`--accent`/`--bg`/`--success`/`--error` values already
matched `index.html`, so left untouched. Re-ran the full checklist after editing: no
broken `href`/`src`/anchor links, no duplicate ids, no missing `alt`, no missing
`rel="noopener"`, HTML still well-formed (`html.parser` parse check) on all 28 edited
files. Diff: 28 files, 112 lines changed (within this run's diff budget).

**Deferred, not fixed this run (diff-budget reasons, continuing the incremental pattern)**:
the identical stale 3-value block also exists in 7 more files outside the blog-post
template — `blog.html` itself (the listing/index page) and 6 standalone pages
(`cerez-politikasi.html`, `gizlilik-politikasi.html`, `kvkk.html`,
`saglik-turizmi-reklam-ajansi.html`, `eticaret-e-ihracat-ajansi.html`,
`surucu-kursu-dil-okulu-reklam-ajansi.html`) — a new finding this run (previously only the
blog-post template was flagged). ~32 more value occurrences across those 7 files (~64
more changed lines) would have pushed this run over the ~150-line guideline on top of the
28 files already fixed, so left for a future run. Confirmed separately: 6 *other*
`blog-*.html` files (`blog-amazon-avrupa-ppc-acos-dusurme-taktikleri.html`,
`blog-dil-okulu-ielts-ogrenci-kayit-hunisi.html`,
`blog-fransa-saglik-turizmi-dis-klinigi-meta-ads.html`,
`blog-istanbul-surucu-kursu-dijital-pazarlama-rehberi.html`,
`blog-korfez-saglik-turizmi-sac-ekim-meta-ads.html`,
`blog-trendyol-buybox-roas-optimizasyonu.html`) use an entirely different, older inline
template (`--bg-sec` not `--bg-secondary`, no `--accent-light`/`--bg-dark` at all) — not
the same drift, out of scope for this fix.

Full scripted repo-wide pass (broken links/anchors, duplicate ids, missing alt, missing
`rel="noopener"`, stray dev artifacts, TODO/placeholder/lorem scan) — all clean beyond the
above. Re-confirmed the 2026-10-12 unsourced-stat flag (see "⚠️ Onay bekliyor" below) is
still present, untouched as instructed.

## 2026-10-19

Merged `main` in (1 new commit since 2026-10-18: a new blog post,
`blog-egitim-performance-max-ogrenci-kaydi.html` — "Dil Okulları ve Sürücü Kursları İçin Google Performance
Max Rehberi: Öğrenci Kaydını Artırma"). Clean merge, no textual conflicts (`blog.html`/`sitemap.xml`
auto-merged, both already updated by the owner).

- **`llms.txt`**: the recurring gap — `blog.html` and `sitemap.xml` already had the new post (34/34 each,
  matching the 34 `blog-*.html` files now on disk) but `llms.txt` was missing it. Added; all three now
  list the same 34 posts.
- Checked the new post specifically: all `href`/`src` references (internal pages, `favicon.png`,
  `logo-icon*.png`/`logo-icon-footer.png`, `tracking.js`) resolve to files on disk; cross-page anchors
  (`index.html#services`/`#sectors`/`#contact`, `surucu-kursu-dil-okulu-reklam-ajansi.html#contact`)
  resolve to real target ids; no duplicate ids; no missing `alt`; its one `target="_blank"` link
  (Instagram) already has `rel="noopener noreferrer"`; footer copyright year matches.
- Re-ran the full standard checklist across the whole repo (script-based): broken `href`/`img src`/`action`
  file references (incl. root-absolute), broken same-page/cross-page anchors, duplicate ids, missing `alt`,
  missing `rel="noopener"` on `target="_blank"`, stray dev artifacts/credential-pattern files,
  TODO/placeholder/lorem-ipsum scan — all clean, nothing new found.
- Re-confirmed the 2026-10-12 unsourced-stat flag (see "⚠️ Onay bekliyor" below) is still present,
  untouched as instructed.
- **New observation (not fixed this run, logged below under "Deferred")**: the new post's embedded
  `:root` still carries the old CSS palette values (`--accent-light: #FFB84D`, `--bg-secondary: #F0F4F8`,
  `--bg-dark: #0F2744`, `--border: #D1DDE8`) that were corrected on `index.html` itself back on
  2026-09-26 (`--accent-light: #FFA733`, `--bg-secondary: #F4F7FB`, `--bg-dark: #091A2F`,
  `--border: #D8E3EE`). This isn't a regression from this commit — every one of the 28 pre-existing
  `blog-*.html` files (grep-verified) carries the same old values in its own self-contained `<style>`
  block, so the blog template itself was never updated after the homepage palette fix, and every new post
  keeps inheriting the stale values. Visually the hex differences are subtle shade shifts, not a broken
  look, and each blog page is self-contained (doesn't inline from `index.html`), so nothing is actually
  broken — just a drift between the homepage's corrected tokens and the blog template's frozen copy.
  Fixing it properly means updating the blog post *template* (so future posts stop re-introducing the old
  values) plus batch-updating up to 29 existing files — too large for today's diff budget, so left alone
  and added to "Deferred" below for incremental pickup (same pattern as the 2026-10-09/10/11 dead-CSS
  cleanup).
- Diff: 2 files (`llms.txt`, `AUTOMATION_LOG.md`), 2 content lines + log entry.

### Kontroller
- `llms.txt` / `sitemap.xml` / `blog.html` — yukarıda açıklanan boşluk düzeltildi, üçü de şimdi 34/34,
  diskteki 34 `blog-*.html` dosyasıyla birebir.
- Tüm `.html` dosyalarında kopya `id`, eksik `img alt`, kırık `href`/`src`/`action` dosya referansı (kök-
  mutlak `/...` dahil) ve kırık aynı-sayfa/sayfalar-arası `#anchor` linki için script ile tam tarama
  yapıldı — yeni yazı dahil, hiçbiri bulunamadı.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'den beri flaglenen kaynaksız
  istatistik hâlâ aynı haliyle duruyor, dokunulmadı — copy kararı, tekrar flaglenmedi.
- Yeni yazıdaki `%20` ve `10-15 katı` gibi oranlar, belirli bir müşteriye atfedilen vaka rakamı değil, genel
  taktik eşik tavsiyesi (önceki günlerdeki benzer kararlarla tutarlı) — ek flag gerekmedi.
- Stray dev artifact yok, `.env*` dosyası yok, ödeme/auth kodu yok (statik site). `git status` temiz
  (bu commit hariç).

### Deferred, not a judgment call
- **New (2026-10-19)**: blog post template's embedded `:root` palette (`--accent-light`, `--bg-secondary`,
  `--bg-dark`, `--border`) is stale relative to `index.html`'s corrected values — affects all ~29
  `blog-*.html` files. Mechanical fix (hex value sync), not a design decision, but too large for one run's
  diff budget. Pick up incrementally in future runs, same as the niche-page dead-CSS cleanup.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) yukarıda tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-18

`origin/main`'i bu dala merge alırken `git merge origin/main` "Already up to date" döndü — main'de
2026-10-15'teki Etsy blog yazısı commit'i sonrasında yeni commit yoktu.

Tam bir maintenance taraması yapıldı ama **yeni bir bulgu çıkmadı** — bu koşuda repoya dokunulmadı,
sadece bu log girdisi eklendi.

### Kontroller
- `llms.txt` / `sitemap.xml` / `blog.html` — üçü de diskteki 33 `blog-*.html` dosyasıyla birebir eşleşiyor
  (33/33/33), eksik/fazla yok.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- `CLAUDE.md`'deki CSS paleti değerleri (8 değer, tek tek karşılaştırıldı) hâlâ `index.html`'deki gerçek
  `:root` tanımlarıyla eşleşiyor — yeni sapma yok (bu dal, master'da henüz merge edilmemiş düzeltilmiş
  değerleri zaten taşıyor).
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'den beri flaglenen kaynaksız
  istatistik hâlâ aynı haliyle duruyor, dokunulmadı — copy kararı, tekrar flaglenmedi.
- Stray dev artifact yok, `.env*` dosyası yok, ödeme/auth kodu yok (statik site). `git status` temiz.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) yukarıda tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-17

`origin/main`'i bu dala merge alırken `git merge origin/main` "Already up to date" döndü — main'de
2026-10-16'dan sonra yeni commit yoktu.

Tam bir maintenance taraması yapıldı ama **yeni bir bulgu çıkmadı** — bu koşuda repoya dokunulmadı,
sadece bu log girdisi eklendi.

### Kontroller
- `llms.txt` / `sitemap.xml` / `blog.html` — üçü de diskteki 33 `blog-*.html` dosyasıyla birebir eşleşiyor
  (33/33/33), eksik/fazla yok.
- Tüm `.html` dosyalarında kopya `id` taraması yapıldı — hiçbiri bulunamadı.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'den beri flaglenen kaynaksız
  istatistik ("şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük alıyor") hâlâ aynı
  haliyle duruyor, dokunulmadı — copy kararı, tekrar flaglenmedi.
- `CLAUDE.md`'deki CSS paleti değerleri (8 değer, tek tek karşılaştırıldı) hâlâ `index.html`'deki gerçek
  `:root` tanımlarıyla eşleşiyor — yeni sapma yok.
- Stray dev artifact yok, `.env*` dosyası yok, ödeme/auth kodu yok (statik site). `git status` temiz.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) yukarıda tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-16

`origin/main`'i bu dala merge alırken `git merge origin/main` "Already up to date" döndü — main'de
2026-10-15'teki Etsy blog yazısı commit'i sonrasında yeni commit yoktu (bu dal o commit'i zaten
2026-10-15 koşusunda içeriyordu). Bu koşuda main'den işlenecek yeni içerik yoktu.

Tam bir maintenance taraması yapıldı (script ile) ama **yeni bir bulgu çıkmadı** — bu koşuda repoya
dokunulmadı, sadece bu log girdisi eklendi.

### Kontroller
- `llms.txt` / `sitemap.xml` / `blog.html` — üçü de diskteki 33 `blog-*.html` dosyasıyla birebir eşleşiyor
  (33/33/33), eksik/fazla yok.
- Tüm `.html` dosyalarında (skill varlıkları hariç) kopya `id`, eksik `img alt`, kırık `href`/`src`/`action`
  dosya referansı (root-absolute `/...` dahil) ve kırık aynı-sayfa/sayfalar-arası `#anchor` linki için
  script ile tam tarama yapıldı — hiçbiri bulunamadı.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'den beri flaglenen kaynaksız
  istatistik ("şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük alıyor", Şema
  İşaretlemesi bölümü) hâlâ aynı haliyle duruyor, dokunulmadı — copy kararı, tekrar flaglenmedi.
- `CLAUDE.md`'deki CSS paleti değerleri (8 değer, tek tek karşılaştırıldı) hâlâ `index.html`'deki gerçek
  `:root` tanımlarıyla eşleşiyor — yeni sapma yok.
- Footer copyright (`© 2026 MetricSell`) bugünün tarihiyle (2026-10-16) uyumlu, güncel.
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/
  faturalama veya auth kodu yok (statik site). `git status` temiz.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) yukarıda tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-15

`origin/main`'i bu dala merge alırken 1 yeni commit geldi: main'e yeni bir blog yazısı eklenmiş —
`blog-etsy-uluslararasi-satis-seo-reklam-stratejisi.html` ("Etsy'de Uluslararası Satış: Türk Satıcılar
İçin SEO ve Reklam Stratejisi"). Merge çakışmasız, temiz (`blog.html` ve `sitemap.xml` ayrı ayrı
auto-merge edildi, ikisi de sahip tarafından zaten güncellenmiş geliyordu).

**Yeni bulgu — tekrarlayan `llms.txt` boşluğu**: `blog.html` (33/33) ve `sitemap.xml` (33/33) yeni yazıyı
zaten içeriyordu, ama `llms.txt` (manuel tutulan liste) eksikti — 32/33. Eklendi; üçü de şimdi 33/33
eşleşiyor, diskteki 33 `blog-*.html` dosyasıyla birebir.

Yeni yazı üzerinde ek kontroller: `href`/`src` referansları (iç sayfalar, `favicon.png`, `logo-icon*.png`,
`tracking.js`) hepsi diskte mevcut; sayfa-arası anchor'lar (`index.html#contact`/`#sectors`/`#services`,
`eticaret-e-ihracat-ajansi.html#contact`) hedef dosyalarda gerçek `id`'lere karşılık geliyor; `id`
tekrarı yok; `img alt` eksiği yok; `target="_blank"` linki yok (dolayısıyla `rel="noopener"` sorunu da
yok); `tracking.js` dahil edilmiş.

### Kontroller
- Tüm `.html` dosyalarında kopya `id`, eksik `img alt`, kırık `href`/`src`/`action` dosya referansı
  (root-absolute `/...` dahil) için tam tarama yapıldı — yeni yazı dahil, hiçbiri bulunamadı.
- Tüm aynı-sayfa/sayfalar-arası `#anchor` linkleri hedef dosyadaki gerçek `id`'lerle karşılaştırıldı —
  kırık anchor yok.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- `llms.txt` / `sitemap.xml` / `blog.html` — yukarıda açıklanan boşluk düzeltildi, üçü de şimdi 33/33.
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'den beri flaglenen kaynaksız
  istatistik ("şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük alıyor", Şema
  İşaretlemesi bölümü) hâlâ aynı haliyle duruyor, dokunulmadı — copy kararı, tekrar flaglenmedi.
- `CLAUDE.md`'deki CSS paleti değerleri (8 değer) `index.html`'deki gerçek `:root` tanımlarıyla tek tek
  karşılaştırıldı — sapma yok.
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/
  faturalama veya auth kodu yok (statik site). `git status` temiz (bu commit hariç).
- Diff: 1 dosya (`llms.txt`), 1 satır ekleme.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) yukarıda tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-14

`origin/main`'i bu dala merge alırken `git merge origin/main` "Already up to date" döndü — main'de
2026-10-13'teki `d44f794` (site-analizi `action`'ını `analiz.metricsell.com`'a taşıyan commit, o koşuda
zaten merge edilmişti) sonrasında yeni commit yok. Bu koşuda main'den işlenecek yeni içerik yoktu.

Tam bir maintenance taraması yapıldı (script ile) ama **yeni bir bulgu çıkmadı** — bu koşuda repoya
dokunulmadı, sadece bu log girdisi eklendi.

### Kontroller
- Tüm `.html` dosyalarında (57 dosya, `.claude/skills`/`.agents/skills` altındaki skill varlıkları hariç)
  kopya `id`, eksik `img alt`, kırık `href`/`src`/`action` dosya referansı için script ile tam tarama
  yapıldı — hiçbiri bulunamadı.
- Tüm aynı-sayfa/sayfalar-arası `#anchor` linkleri, hedef dosyadaki gerçek `id`'lerle ayrı bir script ile
  karşılaştırıldı — kırık anchor bulunamadı.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- `llms.txt` / `sitemap.xml` / `blog.html` — üçü de diskteki 32 `blog-*.html` dosyasıyla birebir eşleşiyor
  (32/32/32), eksik/fazla yok. Main'den bu koşuda yeni blog yazısı gelmedi.
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'den beri flaglenen kaynaksız
  istatistik ("şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük alıyor", Şema
  İşaretlemesi bölümü) hâlâ aynı haliyle duruyor, dokunulmadı — copy kararı, tekrar flaglenmedi.
- `CLAUDE.md`'deki CSS paleti değerleri (8 değer, tek tek karşılaştırıldı) hâlâ `index.html`'deki gerçek
  `:root` tanımlarıyla eşleşiyor — yeni sapma yok.
- 2026-10-07'de flaglenip 2026-10-09/10/11'de 3/3 tamamlanan niş sayfası ölü CSS'i (`.sectors-intro`,
  `.sector-pill-nav`, `.chip-select` vb.) tekrar kontrol edildi, hâlâ geri gelmemiş (0 eşleşme).
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/faturalama
  veya auth kodu yok (statik site). `git status` temiz.

### ⚠️ Onay bekliyor
- Yeni bir madde yok. Tek standing madde (kaynaksız %30-40 istatistiği) yukarıda tekrar flaglenmeden not
  edildi, hâlâ bekliyor.

## 2026-10-13

`origin/main`'i bu dala merge alırken **gerçek bir metinsel çakışma** çıktı: `index.html`'deki site-analizi
formunun `<form>` açılış etiketinde main'in yeni commit'i ("Point the site audit box to analiz.metricsell.com",
`d44f794`) `action` URL'ini LayzrAI/web-audit-ai aracından (`https://web-audit-ai-theta.vercel.app/`) MetricSell'in
kendi alan adına (`https://analiz.metricsell.com/`) taşımıştı; bu dal ise aynı satırda daha önceki bir koşuda
(2026-10-10) eksik `rel="noopener"`yi eklemişti. İki taraf da aynı satırı değiştirdiği için git otomatik
çözemedi. Bu bir içerik/pazarlama kararı değil, mekanik bir birleştirme: main'in yeni (ve canlı — `curl` ile
200 doğrulandı) alan adı korunarak, dalın güvenlik/erişilebilirlik düzeltmesi (`target="_blank" rel="noopener"`)
geri eklendi — sonuç `action="https://analiz.metricsell.com/" ... target="_blank" rel="noopener"`. Gerçek bir
copy/pozisyon çakışması değildi, bu yüzden insana eskale edilmedi.
- Diff (bu koşu): 1 dosya, 1 satır net (merge dışında).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- `llms.txt` (32 blog referansı) / `sitemap.xml` (32) / `blog.html` (32) — script ile karşılaştırıldı, üçü
  de diskteki 32 `blog-*.html` dosyasıyla birebir eşleşiyor, eksik/fazla yok. Bu koşuda main'den yeni blog
  yazısı gelmedi (tek yeni commit site-analizi domain değişikliğiydi).
- Tüm `.html` dosyalarında (57 dosya, skill varlıkları hariç) kopya `id`, eksik `img alt`, kırık `href`/`src`/
  `action` dosya referansı ve kırık aynı-sayfa/sayfalar-arası `#anchor` linki için script ile tam tarama
  yapıldı — hiçbiri bulunamadı.
- `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik yok
  (yukarıdaki merge çakışması dahil, zaten düzeltilmiş durumda).
- `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`'deki 2026-10-12'de flaglenen kaynaksız istatistik
  ("şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük alıyor", Şema İşaretlemesi
  bölümü) hâlâ aynı haliyle duruyor, dokunulmadı — copy kararı, aşağıda tekrar not edildi.
- `CLAUDE.md`'deki CSS paleti değerleri (8 değer) hâlâ `index.html`'deki gerçek `:root` tanımlarıyla
  eşleşiyor — yeni sapma yok.
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/faturalama
  veya auth kodu yok (statik site). `git status` commit öncesi temiz.
- Site-analizi formunun yeni `action` hedefi (`https://analiz.metricsell.com/`) canlı, `curl` ile 200
  doğrulandı.

### ⚠️ Onay bekliyor
- (Devam ediyor, 2026-10-12'den) `blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`, "Şema
  İşaretlemesi" bölümü: "şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük alıyor"
  hâlâ kaynaksız/adlandırılmamış bir iddia. Önerilen düzeltme değişmedi: gerçek bir kaynak eklenmeli, ya da
  rakam kaldırılıp genel ifadeye çevrilmeli. Copy kararı olduğu için bu koşuda da dokunulmadı.

## 2026-10-12

`origin/main`'i bu dala merge alırken 1 yeni commit geldi: "Yeni blog yazısı: E-ihracatta yapay zeka arama
motorlarında (ChatGPT, Perplexity) görünürlük rehberi" (`blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`,
`blog.html`/`sitemap.xml`'e otomatik eklenmiş olarak geldi). Merge'de textual conflict yoktu.

- **`llms.txt`**: her zamanki tekrarlayan boşluk — yeni blog yazısı "Blog ve Bilgi Bankası" listesinde
  eksikti (bu dosya elle tutuluyor). Eklendi; `llms.txt`/`sitemap.xml`/`blog.html` artık üçü de aynı 32
  yazıyı listeliyor.
- **2026-10-09'da tespit edilen, 2026-10-11'de "gelecek temizlik adayı" olarak not edilen `.chip` ölü CSS'i
  tamamlandı**: `eticaret-e-ihracat-ajansi.html`, `saglik-turizmi-reklam-ajansi.html`,
  `surucu-kursu-dil-okulu-reklam-ajansi.html` — üçünde de `.chip`, `.chip:hover`, `.chip.active` kuralları
  tanımlıydı ama tek "kullanıcısı" `genChips.querySelectorAll('.chip')` (satır ~2020), ve bu kod
  `document.getElementById('genSectorChips')`'e bağlı — bu id üç dosyadan hiçbirinde yok, yani kod asla
  çalışmıyor. `class="...chip..."` literal kullanımı üç dosyada da grep ile doğrulanarak sıfır bulundu.
  Brace sayısı doğrulandı (299/294/276 → her dosyada 3'er kural, toplam 9 kural kaldırıldı; önce/sonra
  dengeli). Görsel/davranışsal değişiklik yok.
- Diff: 4 dosya, 73 satır (1 ekleme / 72 silme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarında kopya `id` için script ile tam tarama yapıldı — site içeriğinde hiçbiri
  bulunamadı (`.claude/skills/` ve `.agents/skills/` altındaki bir `creative-review-template.html`'de
  tekrar eden `id="review-data"` var, ama bunlar 2026-08-18'de kasıtlı eklenmiş skill varlıkları, site
  içeriği değil — önceki koşularda da bu şekilde not edilmişti).
- Eksik `img alt` için tam tarama yapıldı — bulunamadı.
- Tüm `target="_blank"` linkler için eksik `rel="noopener"` taraması yapıldı (yeni blog yazısı dahil) —
  repo genelinde eksik yok.
- Tüm göreli/kök-mutlak `href`/`src`/`action` dosya referansları diskteki dosyalarla, tüm aynı-sayfa/
  sayfalar-arası `#anchor` linkleri gerçek `id`'lerle script ile karşılaştırıldı — kırık link/anchor
  bulunamadı (`404.html`'deki kök `/` linki önceki koşularda da doğrulanmış bilinen false positive).
  Yeni blog yazısındaki `eticaret-e-ihracat-ajansi.html#contact` anchor'ı ayrıca elle doğrulandı, gerçek.
- Yeni blog yazısındaki istatistik iddiaları kontrol edildi: "Princeton'ın GEO araştırmasına göre... %37-40"
  ve "keyword stuffing görünürlüğü düşürüyor" cümleleri kaynağı adlandırılmış (Princeton GEO araştırması),
  sorun değil. Ama aynı yazıdaki "şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük görünürlük
  alıyor" (Şema İşaretlemesi bölümü) cümlesi **kaynaksız** — bir önceki paragraftaki gibi adlandırılmış bir
  araştırmaya atfedilmiyor, düz iddia olarak sunulmuş. Aşağıda "Onay bekliyor"a eklendi.
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/faturalama
  veya auth kodu yok (statik site, beklenen). `git status` commit öncesi temiz, credential-benzeri dosya
  yok.
- `CLAUDE.md`'deki CSS paleti değerleri hâlâ `index.html`'deki gerçek `:root` tanımlarıyla eşleşiyor (tüm 8
  değer tek tek karşılaştırıldı) — yeni sapma yok.

### ⚠️ Onay bekliyor
- Yeni blog yazısında (`blog-eihracat-yapay-zeka-arama-chatgpt-perplexity.html`), "Şema İşaretlemesi"
  bölümünde kaynaksız bir istatistik var: "şema eksikliği olan sayfalar AI motorlarında %30-40 daha düşük
  görünürlük alıyor" — hemen üstündeki paragraftaki gibi adlandırılmış bir kaynağa (örn. Princeton GEO
  araştırması) atfedilmiyor, düz iddia. Önerilen düzeltme: ya gerçek bir kaynak eklenmeli, ya rakam
  kaldırılıp genel ifadeye ("şema eksikliği AI motorlarında görünürlüğü düşürüyor") çevrilmeli. İçerik/
  copy kararı olduğu için bu koşuda dokunulmadı.

## 2026-10-11

`origin/main`'i bu dala merge alırken yeni commit yoktu (`git merge origin/main` "Already up to date"
döndü — `auto/maintenance` zaten main'in en son commit'ini (`5981ef1`, free site-audit box) önceki koşunun
merge'ü üzerinden içeriyordu). Main'den bu koşuda işlenecek yeni içerik yok.

- **Ertelenen ölü CSS notunun 3/3'ü tamamlandı**: `surucu-kursu-dil-okulu-reklam-ajansi.html`, diğer iki niş
  sayfasından (`eticaret-e-ihracat-ajansi.html` 2026-10-09, `saglik-turizmi-reklam-ajansi.html` 2026-10-10)
  temizlenen aynı ~10 ölü seçiciyi birebir taşıyordu: `.sectors-intro`, `.sector-pill-nav` (+`a`, `a:hover`),
  `.sector-block.bg-alt`, `.sector-block.bg-dark` (+`::before` ve `.sector-icon-badge`/`.sector-text h2`/
  `.sector-text > p`/`.sector-tag`/`.sector-mini-stat .lbl` alt-override'ları), `.sector-split` +
  `.sector-block.reverse .sector-split` (+`> *`, hem ana tanım hem `max-width:1024px` media query içindeki
  tekrarı), `.chip-select`, `.contact-section` (+`::before`, `.contact-content`, `h2`,
  `> .contact-content > p`, `.sector-form-card` override). Her seçici için `class="..."` ve JS
  (`querySelector`/`classList`/`getElementById`) referansı ayrı ayrı grep ile doğrulandı — hiçbiri birleşmiş
  ağaçta kullanılmıyordu. Brace sayısı doğrulandı (303/303 önce, 279/279 sonra — 24 kural kaldırıldı).
  Görsel/davranışsal değişiklik yok. Bu, orijinal 3 dosyalık listenin son parçasıydı — dead-CSS notu artık
  tamamen çözülmüş durumda.
- Diff: 1 dosya, 153 satır (153 silme).
- PR: https://github.com/atakanakbala-del/metricsell-website/pull/7 (güncellendi)

### Kontroller
- Tüm `.html` dosyalarında kopya `id` ve eksik `img alt` için script ile tam tarama yapıldı — hiçbiri
  bulunamadı.
- Tüm `target="_blank"` linkler/formlar için eksik `rel="noopener"` taraması yapıldı — repo genelinde eksik
  yok.
- Tüm göreli `href`/`src`/`action` dosya referansları diskteki dosyalarla, tüm aynı-sayfa `#anchor` linkleri
  gerçek `id`'lerle karşılaştırıldı (script ile) — kırık link/anchor bulunamadı (`404.html`'deki kök `/`
  linki script'in basit path-çözümleyicisinde "eksik" göründü ama elle doğrulandı, gerçek bir ana sayfa
  linki, false positive).
- `llms.txt` (31 blog referansı) / `sitemap.xml` (31 blog referansı) / `blog.html` (31 blog yazısı) — üçü de
  birebir eşleşiyor, eksik yok.
- Stray dev artifact (`.bak`/`.orig`/`~`/`Thumbs.db`/`.DS_Store`) yok. `.env*` dosyası yok. Ödeme/faturalama
  veya auth kodu yok (statik site, beklenen). `git status` commit öncesi temiz, credential-benzeri dosya yok.
- Doğrulanamaz istatistik/vaka numarası taraması: bu koşuda main'den yeni içerik gelmediği için tekrar
  taranacak yeni bölüm yoktu; mevcut durum önceki koşularda temiz bulunmuştu.

### ⚠️ Onay bekliyor
- Yeni bir madde yok.

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

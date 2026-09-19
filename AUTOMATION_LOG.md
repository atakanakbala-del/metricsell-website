# Automation Log

Unattended daily maintenance passes on this repo. Each entry lists what was proposed (with PR link) and anything excluded for manual review.

## 2026-09-19

**Proposed (PR: see link below):**
- Fixed two more broken in-page anchor links on `index.html`: five blog posts
  (`blog-egitim-kayit-maliyeti-kampanya-taktikleri.html`, `blog-egitim-reels-tiktok-organik-ogrenci-kazanimi.html`,
  `blog-korfez-hastalari-snapchat-ads.html`, `blog-saglik-turizmi-hasta-yorumlari-itibar-yonetimi.html`,
  `blog-saglik-turizmi-web-sitesi-donusum-ux.html`) have bottom-of-article CTA buttons linking to
  `index.html#egitim` and `index.html#saglik-turizmi`, but `index.html` had no matching `id="egitim"` or
  `id="saglik-turizmi"` anywhere (the closest sections use different ids, `course-spotlight` and
  `health-spotlight`) — these CTAs silently did nothing when clicked. Added the two missing anchor targets
  directly above those sections in `index.html`, same pattern as the anchor fix in PR #1.

**Note on still-open prior proposals (not re-proposed, just carried forward for visibility):**
- PR #1 (`auto/2026-09-17`, broken `#services`/`#sectors`/`#contact` anchors + image dimensions) and
  PR #2 (`auto/2026-09-18`, `CLAUDE.md` typo + stale color palette) are both still open/unmerged as of
  today's run. Their "⚠️ Onay bekliyor" items (case-study numbers in `index.html` needing verification,
  and the orphaned `index-modern.html`) remain unresolved — see those PRs, not repeated here.

PR: https://github.com/atakanakbala-del/metricsell-website/pull/3

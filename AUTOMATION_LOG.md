# Automation Log

Unattended daily maintenance passes on this repo. Each entry lists what was proposed (with PR link) and anything excluded for manual review.

## 2026-09-20

**Proposed (PR: see link below):**
- Added `rel="noopener"` to 13 `target="_blank"` links across `index.html`, `blog.html`,
  `eticaret-e-ihracat-ajansi.html`, `saglik-turizmi-reklam-ajansi.html` and
  `surucu-kursu-dil-okulu-reklam-ajansi.html` (KVKK consent-checkbox links, YouTube links,
  WhatsApp CTA buttons) that were opening new tabs without it — a reverse-tabnabbing /
  performance best-practice gap (the opened page's `window.opener` could otherwise
  redirect the original tab). No visual change. Left `index-modern.html`'s 3 matching
  instances untouched since that page is still an unresolved orphan-file question from
  a prior run (see below).
- Filled in 19 blog posts missing from `llms.txt`'s "Blog ve Bilgi Bankası" section (new
  "Diğer Blog Yazıları" subsection) — the file only listed 6 of the 25 published posts,
  so AI answer engines reading `llms.txt` (this file is explicitly the site's GEO/AI-search
  reference, linked from every page's `<head>`) were missing most of the current content.

**Note on still-open prior proposals (not re-proposed, just carried forward for visibility):**
- PR #1 (`auto/2026-09-17`), PR #2 (`auto/2026-09-18`) and PR #3 (`auto/2026-09-19`) are all
  still open/unmerged as of today's run. Their pending items remain unresolved and are not
  repeated here:
  - PR #1 / PR #2: the "Gerçek Vaka Analizleri" case-study numbers in `index.html` need
    verification (real vs. illustrative), and `index-modern.html` (121KB, orphaned/unlinked)
    needs a keep-or-delete decision.
  - PR #1 & #3: broken `#services`/`#sectors`/`#contact`/`#egitim`/`#saglik-turizmi` anchor
    fixes on `index.html`.
  - PR #2: `CLAUDE.md` typo + stale color palette values.

PR: (added after push — see below)

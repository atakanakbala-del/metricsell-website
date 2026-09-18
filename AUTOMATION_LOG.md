# Automation Log

Unattended daily maintenance passes on this repo. Each entry lists what was proposed (with PR link) and anything excluded for manual review.

## 2026-09-18

**Proposed (PR: see link below):**
- Fixed stray leading "c" typo in `CLAUDE.md`'s first line (`c# MetricSell Website...` → `# MetricSell Website...`).
- Corrected the "Mevcut Tasarım / Teknik Yapı" color palette table in `CLAUDE.md` to match the actual CSS custom properties defined in `index.html`'s `:root` block — several hex values had drifted from what's actually in the code (`--accent-light`, `--bg-secondary`, `--bg-dark`, `--border`), and `--primary-dark`/`--primary-light` were missing entirely. The pre-existing note about the palette differing from the main MetricSell CLAUDE.md's `#0F3A60`/`#F5A623` reference was left as-is (that's a design decision, not a factual error).

PR: https://github.com/atakanakbala-del/metricsell-website/pull/2

**⚠️ Onay bekliyor (excluded, needs a human decision):**
- `index.html`'s "REAL CASE STUDIES & PROOF SECTION" (id="case-studies") presents specific named case studies with concrete numbers (e.g. "€48,000+ Ciro", "622 potansiyel kursiyer", "6.8x ROAS") under the heading "Gerçek Vaka Analizleri" (real case analyses). Whether these are real client results or illustrative placeholder figures isn't verifiable from the code alone — if any of these numbers are not real/verified client outcomes, they should either be replaced with actual figures or explicitly labeled as illustrative examples (e.g. "örnek senaryo"). Suggested fix: Atakan to confirm accuracy of each figure, or add an "örnek" qualifier if these are illustrative.
- `index-modern.html` (121KB) is a full alternate homepage that is not referenced from `index.html`, `sitemap.xml`, or any other page — it looks like an earlier draft/alternative design kept around, not a live page. Left untouched since it's plausibly an intentional design reference rather than a throwaway scratch file. Suggested fix: Atakan to confirm whether it can be deleted or should stay as a reference/backup.

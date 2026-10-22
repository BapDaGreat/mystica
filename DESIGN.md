---
name: "Mystica — Atelier of Fine Paper, Silk Ribbon & Heirloom Keepsakes"
description: "Bilingual luxury stationery, keepsake packaging, and interactive atelier pitch for Hold Media Agency"
colors:
  burgundy-velvet: "#4A121A"
  burgundy-deep: "#320A10"
  burgundy-night: "#1E080C"
  champagne-foil: "#C8A96E"
  champagne-light: "#E5C992"
  foil-gleam: "#FFF5D6"
  ivory-cotton-600: "#F8F4EC"
  ivory-parchment: "#EFE7DA"
  ivory-card: "#FBF8F3"
  espresso-ink: "#1E1114"
  burgundy-body: "#42161D"
  muted-taupe: "#5C4347"
typography:
  display:
    fontFamily: "'Bodoni Moda', Georgia, serif"
    fontSize: "clamp(2.35rem, 4.4vw + 0.75rem, 4.35rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Bodoni Moda', Georgia, serif"
    fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Amiri', 'Traditional Arabic', serif"
    fontSize: "clamp(1.5rem, 2.2vw + 0.5rem, 2.35rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "'Jost', 'Readex Pro', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.burgundy-velvet}"
    textColor: "{colors.ivory-cotton-600}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-deep}"
    textColor: "{colors.ivory-cotton-600}"
  button-secondary:
    backgroundColor: "{colors.ivory-parchment}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-foil-cta:
    backgroundColor: "{colors.champagne-foil}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  card-paper-ruled:
    backgroundColor: "{colors.ivory-cotton-600}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  card-paper-elevated:
    backgroundColor: "{colors.ivory-card}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.xl}"
    padding: "28px"
  input-atelier:
    backgroundColor: "{colors.ivory-cotton-600}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: Mystica — Atelier of Fine Paper, Silk Ribbon & Heirloom Keepsakes

## Overview

**Creative North Star: "The Paper Mill Atelier & Swatch Book"**

Mystica’s visual world treats the screen as a sunlit paper-mill workbench and bespoke stationer’s archive. Rather than relying on generic luxury e-commerce templates or synthetic digital lens flares, the system grounds every surface in tangible print craft: 600gsm warm ivory cotton rag paper (`#F8F4EC`), deep burgundy bookcloth and stitched grosgrain ribbon (`#4A121A`), and antique champagne gold hot-foil stamping (`#C8A96E`) that catches a directional warm specular sheen as the gallery light angle shifts.

The architecture bridges two simultaneous audiences for the Hold Media Agency pitch: retail clients commissioning bilingual (English & Arabic) milestone keepsake suites, and agency reviewers inspecting logo geometry, optical dual-script typography, CAD pre-press dielines (`3.0mm` bleed, die-cut, score, foil, and blind deboss plates), paid social creatives (`9:16` Reels/TikTok and `4:5` GCC carousels), and choreographed motion engineering.

**Key Characteristics:**
- Tactile 600gsm cotton rag and dyed burgundy bookcloth surfaces with subtle SVG micro-grain paper fiber overlay (`opacity: 0.35`).
- True bilingual English + Arabic (`LTR`/`RTL`) typographic parity pairing high-contrast optical Didone serifs (`Bodoni Moda`) with classical Cairo Naskh calligraphy (`Amiri`) on shared optical baselines.
- Single-mechanism elevation discipline: surfaces are defined either by a `1px` architectural rule, a single cast paper-stack shadow, or a recessed letterpress blind-deboss inset shadow—never stacked together on the same container.
- Interactive pre-press and material proof tooling (live gallery foil light-angle slider, Pantone/CMYK swatch cabinet, and toggleable CAD separation plates).

## Colors

The palette is anchored in brief-pinned physical materials—unbleached 600gsm warm ivory cotton rag, deep burgundy bookcloth, and antique champagne gold foil—engineered for WCAG AAA text contrast in both sunlit paper and dark bookcloth chapters.

### Primary
- **Deep Burgundy Bookcloth** (`#4A121A`): Primary interactive surface fill, silk grosgrain ribbon bands, primary pill buttons, and Arabic calligraphic accents on ivory paper.
- **Pressed Wine Velvet** (`#320A10`): Deep structural container fill for the dark packaging dieline workbench, top agency pitch bar, and hero specimen housing.
- **Midnight Press Plate** (`#1E080C`): High-contrast CAD dieline inspection bed and footer specification badges.

### Secondary
- **Antique Champagne Gold Foil** (`#C8A96E`): Hot-foil emblem strokes, dieline border accents, active format spotlight rings, and subtle specular catchlights.
- **Burnished Gold Leaf** (`#E5C992`): High-contrast foil typography and technical readouts over dark burgundy bookcloth surfaces.
- **Specular Foil Gleam** (`#FFF5D6`): Peak highlight stop inside the directional metallic foil gradient (`--foil-angle`) when light catches a stamped emblem.

### Neutral
- **600gsm Warm Ivory Cotton Rag** (`#F8F4EC`): Primary daylight workbench canvas and letterpress card surface.
- **Blush Silk Parchment** (`#EFE7DA`): Secondary inset swatch trays, customizer control panels, and table ledger backgrounds.
- **Archival Proof Card** (`#FBF8F3`): Elevated specimen card surface.
- **Warm Espresso Press Ink** (`#1E1114`): Primary display and editorial ink on warm ivory cotton (`15.4:1` AAA contrast).
- **Aged Burgundy Ink** (`#42161D`): Secondary editorial lead copy and descriptive prose on ivory surfaces (`10.8:1` AAA contrast).
- **Muted Mill Taupe** (`#5C4347`): Supporting metadata, Pantone/CMYK formulas, and caption specifications (`6.8:1` AA/AAA contrast).

### Named Rules
**The Foil Scarcity Rule.** Metallic champagne gold (`#C8A96E` / `#E5C992`) is reserved strictly for stamped seals, hairline rules, active focus/selection rings, and micro-badges—never used as a large card background fill.
**The Bookcloth Chapter Rule.** Dark burgundy surfaces (`#320A10` and `#1E080C`) punctuate the ivory page as dedicated physical chapters (top pitch bar, hero specimen housing, packaging dieline workbench, and footer) rather than arbitrary dark-mode cards.

## Typography

**Display Font:** `Bodoni Moda` (with `Georgia, serif` fallback)
**Arabic Calligraphic & Editorial Font:** `Amiri` (with `'Traditional Arabic', serif` fallback)
**UI & Body Font:** `Jost` paired with `Readex Pro` for Arabic UI controls
**Label/Mono Font:** `JetBrains Mono` (`font-variant-numeric: tabular-nums`)

**Character:** High-fashion European hairlines and ball terminals (`Bodoni Moda`) converse directly with classical Cairo Naskh pen calligraphy (`Amiri`), unified by geometric humanist sans-serif controls (`Jost` + `Readex Pro`) and precision pre-press tabular numerals (`JetBrains Mono`).

### Hierarchy
- **Display** (`500`, `clamp(2.35rem, 4.4vw + 0.75rem, 4.35rem)`, `line-height: 1.07`, `letter-spacing: -0.025em`): Hero statement and primary bilingual focal lockups.
- **Headline** (`400`, `clamp(1.75rem, 2.5vw + 0.5rem, 2.25rem)`, `line-height: 1.15`, `letter-spacing: -0.02em`): Section headings (`<h2>`) and specimen titles.
- **Title (Arabic Calligraphic)** (`400–700`, `clamp(1.5rem, 2.2vw + 0.5rem, 2.35rem)`, `line-height: 1.45`, `letter-spacing: 0`): Arabic display counterparts and ceremonial blessings (`dir="rtl"`).
- **Body** (`400`, `1rem / 16px`, `line-height: 1.65`, `60ch–70ch` max measure): Editorial brand storytelling, customizer descriptions, and brief verification copy.
- **Label / Technical Spec** (`500`, `0.75rem / 12px`, `line-height: 1.4`, `letter-spacing: 0.02em`): Reserved strictly for gsm paper weights, millimeter dieline dimensions, Pantone/CMYK codes, and timing tokens.

### Named Rules
**The No-Kicker Heading Rule.** Section and card headings (`<h1>`, `<h2>`, `<h3>`) never carry small uppercase kicker or eyebrow labels stacked above them; headings open directly with editorial authority.
**The Zero Arabic Tracking Rule.** Arabic script (`font-arabic` / `lang="ar"`) always maintains `letter-spacing: 0` and generous vertical leading (`1.45–1.6`) so Naskh ligatures and vocalization marks (`تشكيل`) never fracture or clip.

## Layout

The layout uses a 12-column architectural workbench grid (`max-width: 1440px`, `16px–32px` responsive horizontal padding, `24px–32px` grid gaps) divided into five distinct chapters separated by `1px` architectural rules (`rgba(74, 18, 26, 0.14)`):
1. **Hero Split Workbench (`7/5` asymmetric split on `lg:`):** Left column houses the bilingual editorial statement, primary action pills, and interactive 5-swatch Pantone/CMYK cabinet; right column houses the dark burgundy Solander keepsake box stage with interactive gallery light angle slider (`0°–100°`).
2. **Cohesive Brand Identity & Bilingual Typographic Architecture (`5/7` split on `lg:`):** Left 5 columns house the SVG Celestial Star-Seal & Ribbon monogram sheet with toggleable construction geometry; right 7 columns house the side-by-side Latin & Arabic optical baseline specimen sheet.
3. **Bespoke Keepsake & Stationery Atelier (`7/5` split on `lg:`):** Left 7 columns render the live layered stationery proof card with silk ribbon band and blind-debossed plate; right 5 columns house the 5-step interactive customizer form.
4. **Packaging Mockups & Print-Ready Pre-Press Dielines (`7/5` split on `lg:`):** Full-bleed dark burgundy bookcloth chapter (`#320A10`) pairing an interactive SVG CAD dieline sheet (6 toggleable press plates) with studio photography mockups.
5. **Digital Advertising Creatives & Choreographed Brand Motion (`7/5` split on `lg:`):** Left 7 columns display the `9:16` Reels/TikTok story ad and `4:5` bilingual Meta carousel card; right 5 columns display the `16:9` animated SVG star-seal and silk-ribbon bumper stage.

At mobile viewports (`390px`), all multi-column workbenches collapse cleanly into a single vertical column with zero horizontal overflow (`overflow-x: hidden`), converting wide comparison tables into stacked specification cards.

## Elevation & Depth

Depth is communicated through physical paper-mill mechanics rather than synthetic glassmorphism or stacked drop shadows. Every container chooses exactly one depth mechanism according to its physical role on the workbench.

### Shadow Vocabulary
- **Elevated Paper Sheet** (`.paper-sheet-elevated` — `box-shadow: 0 14px 34px -12px rgba(42, 10, 15, 0.14)`): Used for freestanding keepsake proof cards, hero specimen frames, and social ad mockups resting above the table.
- **Blind Letterpress Deboss** (`.deboss-plate` — `box-shadow: inset 0 2px 5px rgba(30, 17, 20, 0.12), inset 0 -1px 0 rgba(255, 255, 255, 0.7)`): Used exclusively for the recessed inner inscription plate of the customizer card to simulate un-inked 0.4mm letterpress impression into 600gsm cotton rag.
- **Ruled Workbench Sheet** (`.paper-sheet-ruled` — `border: 1px solid rgba(74, 18, 26, 0.14)`, `box-shadow: none`): Used for flat specification sheets, swatch cabinets, and typographic ledgers.

### Named Rules
**The Single-Elevation Rule.** Never combine a `1px` structural border and a cast `box-shadow` (or inset deboss shadow) on the same element. A surface is either ruled (`1px` border), elevated (cast shadow only), or debossed (inset shadow only).

## Shapes

Corners follow crisp bookbinding and die-cut stationery radii:
- **Outer Specimen & Workbench Sheets:** `16px` (`rounded-[16px]`) representing die-cut keepsake trays and portfolio boards.
- **Inner Proof Plates & Media Frames:** `12px` (`rounded-[12px]`) and `10px` (`rounded-[10px]`) for inset photography, deboss plates, and form inputs.
- **Interactive Triggers & Filter Chips:** Full pill geometry (`9999px` / `rounded-full`) echoing wax-seal stamps and ribbon tags.
- **Signature Geometry:** The 8-pointed Celestial Star-Seal (`1 : 1.618` inner-to-outer star ratio) bisected by a `16mm` stitched burgundy grosgrain ribbon band (`.silk-ribbon-band`).

## Components

### Buttons
- **Shape:** Full pill (`border-radius: 9999px`) for primary/secondary navigation and CTA triggers; `10px` (`rounded-[10px]`) for grid-based customizer selector tiles.
- **Primary (`.btn-primary-burgundy`):** Deep Burgundy Bookcloth (`#4A121A`) fill with Warm Ivory (`#F8F4EC`) text, `14px 24px` padding.
- **Hover / Focus / Active (`.btn-tactile`):** Hover shifts background to `#320A10` with `-1px` vertical lift over `180ms cubic-bezier(0.23, 1, 0.32, 1)`; `:active` applies `scale(0.97)` tactile press response (`150ms`); `:focus-visible` renders a `2px solid #C8A96E` champagne gold outline with `2px` offset.
- **Secondary / Ghost:** Blush Silk Parchment (`#EFE7DA`) fill with `#1E1114` text and `1px solid rgba(74, 18, 26, 0.25)` border.

### Chips & Layer Toggles
- **Style:** Pill badges (`rounded-full`, `px-3 py-1.5`, `JetBrains Mono` `12px`) with a `8px` color-coded registration dot indicating press separation plates (`#F43F5E` Die-Cut, `#22D3EE` Crease, `#38BDF8` Bleed, `#E5C992` Gold Foil, `#C084FC` Blind Deboss, `#34D399` Ribbon Slot).
- **State:** Active plates use `#320A10` background with `#F8F4EC` text and `#C8A96E` border; inactive plates dim to `50%` opacity with muted gray indicator dots.

### Cards / Containers
- **Corner Style:** `16px` outer radius; `12px` inner media/plate radius.
- **Background:** `#F8F4EC` or `#EFE7DA` on daylight sections; `#320A10` or `#1E080C` inside dark bookcloth sections.
- **Shadow Strategy:** Governed strictly by **The Single-Elevation Rule** (`.paper-sheet-ruled` uses `1px` border only; `.paper-sheet-elevated` uses cast shadow only; `.deboss-plate` uses inset shadow only).
- **Internal Padding:** `24px` (`p-6`) to `32px` (`p-8`).

### Inputs / Fields
- **Style:** `1px solid rgba(74, 18, 26, 0.25)` stroke, `#F8F4EC` cotton background, `10px` radius, `10px 14px` padding. English input renders in `Bodoni Moda` (`16px`); Arabic input renders in `Amiri` (`18px`, `dir="rtl"`).
- **Focus:** `2px solid #C8A96E` outline (`outline-offset: 2px`).

### Navigation
- **Top Pitch Bar & Sticky Header:** Dual-tier header. Tier 1 (`#320A10`) houses the Hold Media Agency pitch filter pills (`Complete Pitch`, `Brand & EN/AR`, `Storefront`, `Dielines`, `Ads & Motion`) and live `EN + العربية` script switcher. Tier 2 (`#F8F4EC/95` with `backdrop-filter: blur(8px)`) houses the bilingual brand mark, section links, explicit `Web Development Offered: Yes (Full-Stack)` badge, and `Commission Suite` CTA.

### Interactive Foil & Dieline Proofing Components (Signature Components)
- **Foil Specular Light-Catch Stage:** Uses CSS custom property `--foil-angle` (`0deg` to `100deg`) bound to a range input so users can sweep studio gallery light across hot-stamped champagne gold elements.
- **Live Keepsake Customizer Proof:** Real-time React state combining occasion preset, 600gsm stock color, silk ribbon band, foil/deboss impression, and dual-script inscription preview.

## Do's and Don'ts

### Do:
- **Do** pair English (`Bodoni Moda` / `Jost`) and Arabic (`Amiri` / `Readex Pro`) with explicit `dir="rtl"` and `lang="ar"` attributes on Arabic containers and zero letter-spacing (`letter-spacing: 0`) on Arabic text.
- **Do** enforce single-mechanism elevation on every container: choose either `.paper-sheet-ruled` (`1px` border), `.paper-sheet-elevated` (single cast shadow), or `.deboss-plate` (inset letterpress shadow).
- **Do** use `JetBrains Mono` with `tabular-nums` for paper weights (`600gsm`), pre-press tolerances (`3.0mm bleed`), Pantone/CMYK values, and live pricing estimates.
- **Do** honor `prefers-reduced-motion: reduce` by neutralizing continuous foil twinkle and SVG ribbon wave animations while preserving interactive state clarity.

### Don't:
- **Don't** place uppercase kicker or eyebrow labels above `<h1>`, `<h2>`, or `<h3>` headings.
- **Don't** stack a `border` and a `box-shadow` on the same card or plate container.
- **Don't** apply positive `letter-spacing` (`tracking-widest` / `uppercase`) to Arabic script, which disconnects cursive Naskh letterforms.
- **Don't** use synthetic lens flares, neon gradients, or `scale(0)` pop-in animations that violate physical paper and silk ribbon mechanics.

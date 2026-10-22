import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Printer,
  Globe,
  Film,
  Check,
  Copy,
  Eye,
  Play,
  Pause,
  Sliders,
  Code2,
  Compass,
  BookOpen,
  Package,
  ShoppingBag,
  ArrowUpRight,
  RotateCcw,
  Sun,
} from 'lucide-react';

type ActiveSection = 'all' | 'identity' | 'atelier' | 'packaging' | 'campaigns';
type HeroOverlayMode = 'photograph' | 'monogram' | 'dieline';
type LanguageMode = 'bilingual' | 'en' | 'ar';

interface SwatchToken {
  id: string;
  name: string;
  arabicName: string;
  hex: string;
  pantone: string;
  cmyk: string;
  materialNote: string;
  textColor: string;
}

interface OccasionPreset {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  defaultEnText: string;
  defaultArText: string;
  dateSpec: string;
  suitePrice: string;
  contents: string[];
  image: string;
}

const BASE = import.meta.env.BASE_URL;

const SWATCH_TOKENS: SwatchToken[] = [
  {
    id: 'burgundy',
    name: 'Deep Burgundy Buckram',
    arabicName: 'عنابي ملكي عميق',
    hex: '#4A121A',
    pantone: 'PANTONE 7428 C',
    cmyk: 'C:28 M:94 Y:72 K:54',
    materialNote: '600gsm dyed-through cotton & bookcloth',
    textColor: '#F8F4EC',
  },
  {
    id: 'ivory',
    name: 'Warm Ivory Cotton Rag',
    arabicName: 'عاجي قطني دافئ',
    hex: '#F8F4EC',
    pantone: 'PANTONE Warm White',
    cmyk: 'C:2 M:3 Y:8 K:0',
    materialNote: '100% mould-made deckle-edge rag paper',
    textColor: '#1E1114',
  },
  {
    id: 'foil',
    name: 'Antique Champagne Foil',
    arabicName: 'رقائق الذهب الشامباني',
    hex: '#C8A96E',
    pantone: 'Kurz Luxor 385 / 871 C',
    cmyk: 'Metallic Hot-Stamp Foil',
    materialNote: 'Micro-etched brass die specular stamp',
    textColor: '#1E1114',
  },
  {
    id: 'wine',
    name: 'Reserve Wine Velvet',
    arabicName: 'مخمل نبيذي داكن',
    hex: '#320A10',
    pantone: 'PANTONE 490 C',
    cmyk: 'C:35 M:96 Y:74 K:68',
    materialNote: 'Interior coffret lining & wax seal pigment',
    textColor: '#F8F4EC',
  },
  {
    id: 'parchment',
    name: 'Blush Silk Parchment',
    arabicName: 'رقّ حريري ناعم',
    hex: '#EFE7DA',
    pantone: 'PANTONE 7527 C',
    cmyk: 'C:6 M:8 Y:15 K:0',
    materialNote: 'Translucent envelope liner & tissue wrap',
    textColor: '#1E1114',
  },
];

const OCCASION_PRESETS: OccasionPreset[] = [
  {
    id: 'wedding',
    titleEn: 'The Celestial Vow & Nikah Coffret',
    titleAr: 'صندوق العهد والزفاف الملكي',
    subtitleEn: 'Rigid burgundy bookcloth Solander box with blind-debossed 600gsm cotton invitations, silk ribbon, and brass star seal.',
    defaultEnText: 'Layla & Zayd — Forever Written in Light',
    defaultArText: 'ليلى و زيد — ميثاقٌ من نورٍ ومودة',
    dateSpec: '24 · XI · 2026 · DUBAI & LONDON',
    suitePrice: '$480',
    contents: [
      '240 × 180 × 45 mm Burgundy Linen Keepsake Box',
      '600gsm Warm Ivory Cotton Invitation & Reply Suite',
      '16mm Stitched Burgundy Silk Grosgrain Ribbon',
      'Custom Hand-Engraved Brass Star Wax Matrix',
    ],
    image: `${BASE}assets/mystica-wedding-milestone-coffret.png`,
  },
  {
    id: 'gifting',
    titleEn: 'The Hilal & Star Seasonal Keepsake Suite',
    titleAr: 'مجموعة الهلال والنجمة للإهداء',
    subtitleEn: 'Celebratory correspondence and gifting coffret crafted for Eid, Ramadan, and family gatherings.',
    defaultEnText: 'May Your Home Be Filled With Warmth & Grace',
    defaultArText: 'أدامَ اللهُ بهجةَ أيامِكم باليُمنِ والمسرّات',
    dateSpec: 'EDITION NO. 04 · SEASONAL ARCHIVE',
    suitePrice: '$340',
    contents: [
      '12 Foil-Stamped Bilingual Note Cards (EN / AR)',
      'Silk-Lined Deep Burgundy Envelopes (180gsm)',
      'Gold Foil Pin-Perf Celestial Gift Tags with Ribbon',
      'Numbered Archival Certificate of Provenance',
    ],
    image: `${BASE}assets/mystica-ramadan-eid-gifting-suite.png`,
  },
  {
    id: 'correspondence',
    titleEn: 'The Sovereign Personal Stationery Desk Box',
    titleAr: 'مجموعة المراسلات الشخصية الفاخرة',
    subtitleEn: 'Everyday heirloom correspondence cards with blind-debossed frames, custom monogramming, and wax seals.',
    defaultEnText: 'From the Desk of Amira Al-Mansoor',
    defaultArText: 'من مكتبِ أميرة المنصور — مراسلات خاصة',
    dateSpec: 'BESPOKE MONOGRAM EDITION · 600GSM',
    suitePrice: '$290',
    contents: [
      '50 Deckle-Edge 600gsm Cotton Rag Flat Cards',
      'Deep Burgundy & Warm Ivory Envelope Pairings',
      'Burgundy Sealing Wax Sticks & Star-Seal Stamp',
      'Woven Burgundy Satin Ribbon Bundle Tie',
    ],
    image: `${BASE}assets/mystica-stationery-suite-flatlay.png`,
  },
];

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('all');
  const [langMode, setLangMode] = useState<LanguageMode>('bilingual');
  const [heroMode, setHeroMode] = useState<HeroOverlayMode>('photograph');
  const [activeSwatchId, setActiveSwatchId] = useState<string>('burgundy');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [lightAngle, setLightAngle] = useState<number>(42);

  // Bespoke Atelier Customizer State
  const [selectedOccasionId, setSelectedOccasionId] = useState<string>('wedding');
  const [paperStock, setPaperStock] = useState<'ivory-600' | 'burgundy-cloth' | 'pearl-mica'>('ivory-600');
  const [ribbonStyle, setRibbonStyle] = useState<'burgundy-grosgrain' | 'ivory-silk' | 'gold-cord'>('burgundy-grosgrain');
  const [foilFinish, setFoilFinish] = useState<'champagne-gold' | 'blind-deboss' | 'burgundy-wax'>('champagne-gold');
  const [customEnLine, setCustomEnLine] = useState<string>('Layla & Zayd — Forever Written in Light');
  const [customArLine, setCustomArLine] = useState<string>('ليلى و زيد — ميثاقٌ من نورٍ ومودة');
  const [suiteQuantity, setSuiteQuantity] = useState<number>(50);
  const [commissionedToast, setCommissionedToast] = useState<boolean>(false);

  // Brand Identity Inspector State
  const [showLogoGrid, setShowLogoGrid] = useState<boolean>(true);
  const [showBaselineGrid, setShowBaselineGrid] = useState<boolean>(true);

  // Print Dieline Layer Toggles
  const [dielineLayers, setDielineLayers] = useState({
    cutLine: true,
    creaseLine: true,
    bleedZone: true,
    foilPlate: true,
    debossPlate: true,
    ribbonSlot: true,
  });

  // Motion & Social Campaign State
  const [isReelPlaying, setIsReelPlaying] = useState<boolean>(true);
  const [activeAdFormat, setActiveAdFormat] = useState<'story-9x16' | 'carousel-4x5' | 'film-16x9'>('story-9x16');

  const selectedOccasion =
    OCCASION_PRESETS.find((item) => item.id === selectedOccasionId) ?? OCCASION_PRESETS[0];

  const activeSwatch =
    SWATCH_TOKENS.find((s) => s.id === activeSwatchId) ?? SWATCH_TOKENS[0];

  const handleOccasionChange = (preset: OccasionPreset) => {
    setSelectedOccasionId(preset.id);
    setCustomEnLine(preset.defaultEnText);
    setCustomArLine(preset.defaultArText);
  };

  const handleCopySwatch = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    window.setTimeout(() => setCopiedHex(null), 1800);
  };

  const toggleDielineLayer = (key: keyof typeof dielineLayers) => {
    setDielineLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navigateToSection = (targetId: string) => {
    setActiveSection('all');
    window.requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const unitCost = selectedOccasionId === 'wedding' ? 9.6 : selectedOccasionId === 'gifting' ? 6.8 : 5.8;
  const totalEstimate = Math.round(suiteQuantity * unitCost);

  return (
    <div
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F8F4EC] text-[#1E1114] flex flex-col"
      dir={langMode === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* =====================================================================
          HOLD MEDIA AGENCY PITCH & BILINGUAL WORKBENCH BAR
         ===================================================================== */}
      <header className="sticky top-0 z-50 burgundy-deep-surface border-b border-[#C8A96E]/30">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4A121A] border border-[#C8A96E]/45 text-[#E5C992] font-mono-spec text-[10px] sm:text-[11px] shrink-0">
              <Sparkles className="w-3 h-3 text-[#E5C992]" />
              HOLD MEDIA AGENCY PITCH
            </span>
            <span className="text-[#F8F4EC]/90 hidden xl:inline truncate">
              Multidisciplinary Brand, Packaging, Motion &amp; Full-Stack Web Build by{' '}
              <strong className="text-[#E5C992] font-medium">Dayle Angelo Peña</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-full">
            {/* Deliverable View Filter */}
            <nav
              aria-label="Hold Media Agency Deliverable Filter"
              className="flex flex-wrap items-center bg-[#1E080C] p-0.5 rounded-xl sm:rounded-full border border-[#C8A96E]/25 max-w-full"
            >
              {(
                [
                  { id: 'all', label: 'Complete Pitch' },
                  { id: 'identity', label: 'Brand & EN/AR' },
                  { id: 'atelier', label: 'Storefront' },
                  { id: 'packaging', label: 'Dielines' },
                  { id: 'campaigns', label: 'Ads & Motion' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSection(tab.id)}
                  className={`btn-tactile px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium ${
                    activeSection === tab.id
                      ? 'bg-[#C8A96E] text-[#1E1114]'
                      : 'text-[#F8F4EC]/75 hover:text-[#F8F4EC]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Bilingual Script Switcher */}
            <div
              role="group"
              aria-label="Language & Script Mode"
              className="flex items-center bg-[#1E080C] p-0.5 rounded-full border border-[#C8A96E]/25 shrink-0"
            >
              {(
                [
                  { id: 'bilingual', label: 'EN + عربي' },
                  { id: 'en', label: 'EN' },
                  { id: 'ar', label: 'العربية' },
                ] as const
              ).map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setLangMode(mode.id)}
                  className={`btn-tactile px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-medium ${
                    langMode === mode.id
                      ? 'bg-[#4A121A] text-[#E5C992] border border-[#C8A96E]/50'
                      : 'text-[#F8F4EC]/70 hover:text-[#F8F4EC]'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Storefront Header Bar */}
        <div className="bg-[#F8F4EC] text-[#1E1114] border-b border-[#4A121A]/15">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-8 min-h-14 sm:h-16 py-2 flex items-center justify-between gap-2 sm:gap-4">
            <a
              href="#top"
              onClick={() => setActiveSection('all')}
              className="flex items-center gap-2.5 sm:gap-3.5 group no-underline min-w-0"
            >
              {/* Signature Star-Seal Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4A121A] flex items-center justify-center border border-[#C8A96E]/60 shrink-0">
                <svg
                  viewBox="0 0 48 48"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5C992]"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <path
                    d="M24 5 L27.5 18.5 L41 24 L27.5 29.5 L24 43 L20.5 29.5 L7 24 L20.5 18.5 Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="rgba(200,169,110,0.18)"
                  />
                  <path
                    d="M13 13 L21.5 21.5 M35 13 L26.5 21.5 M13 35 L21.5 26.5 M35 35 L26.5 26.5"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                  <circle cx="24" cy="24" r="2.5" fill="currentColor" className="foil-twinkle" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1.5 sm:gap-2.5">
                  <span className="font-display text-lg sm:text-2xl font-semibold tracking-tight text-[#1E1114]">
                    MYSTICA
                  </span>
                  <span className="text-[#C8A96E]" aria-hidden="true">·</span>
                  <span className="font-arabic text-base sm:text-xl text-[#4A121A] font-bold">
                    مِسْتِيكَا
                  </span>
                </div>
                <p className="hidden sm:block text-[11px] text-[#5C4347] tracking-wide truncate">
                  Atelier of Fine Paper, Silk Ribbon &amp; Heirloom Keepsakes
                </p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-7 text-sm text-[#42161D]">
              <a
                href="#atelier-customizer"
                onClick={() => navigateToSection('atelier-customizer')}
                className="hover:text-[#4A121A] font-medium"
              >
                Bespoke Keepsake Atelier
              </a>
              <a
                href="#brand-identity"
                onClick={() => navigateToSection('brand-identity')}
                className="hover:text-[#4A121A] font-medium"
              >
                Identity &amp; Bilingual Type
              </a>
              <a
                href="#packaging-dielines"
                onClick={() => navigateToSection('packaging-dielines')}
                className="hover:text-[#4A121A] font-medium"
              >
                Packaging &amp; Print Dielines
              </a>
              <a
                href="#campaigns-motion"
                onClick={() => navigateToSection('campaigns-motion')}
                className="hover:text-[#4A121A] font-medium"
              >
                Digital Ads &amp; Motion
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE7DA] border border-[#4A121A]/15 text-xs text-[#4A121A]">
                <Code2 className="w-3.5 h-3.5 text-[#4A121A]" />
                <span>Web Development Offered: <strong>Yes (Full-Stack)</strong></span>
              </div>
              <a
                href="#atelier-customizer"
                onClick={() => navigateToSection('atelier-customizer')}
                className="btn-tactile btn-primary-burgundy px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4A121A] text-[#F8F4EC] text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 sm:gap-2 no-underline"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#E5C992]" />
                <span>Commission Suite</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* =====================================================================
            FIRST VIEWPORT: THE PAPER MILL ATELIER & SWATCH BOOK SPREAD
            (Strict Craft Floor: Headings speak first with NO eyebrow/kicker above)
           ===================================================================== */}
        <section className="relative border-b border-[#4A121A]/15 overflow-hidden">
          {/* Stitched Burgundy Silk Grosgrain Ribbon Top Trim */}
          <div className="silk-ribbon-band h-3 w-full" aria-hidden="true" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left 7 Columns: Editorial Thesis, Bilingual Statement & Tactile Swatch Strip */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
                <div className="space-y-4">
                  {langMode === 'ar' ? (
                    <h1
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-3xl sm:text-4xl lg:text-[2.85rem] text-[#4A121A] leading-[1.38] font-bold"
                    >
                      ورقٌ قطنيٌّ فاخر يحفظُ أثرَ اللحظاتِ الخالدة، معقودٌ بشريطِ الحريرِ العنّابي وبريقِ الذهب.
                    </h1>
                  ) : (
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.65rem] leading-[1.06] font-normal text-[#1E1114]">
                      Paper that holds the weight of a vow, tied in deep burgundy silk.
                    </h1>
                  )}

                  {langMode === 'bilingual' && (
                    <p
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-2xl sm:text-3xl lg:text-[2.15rem] text-[#4A121A] leading-[1.45]"
                    >
                      ورقٌ قطنيٌّ فاخر يحفظُ أثرَ اللحظاتِ الخالدة، معقودٌ بشريطِ الحريرِ العنّابي وبريقِ الذهب.
                    </p>
                  )}

                  {(langMode === 'bilingual' || langMode === 'en') && (
                    <p className="text-base sm:text-lg text-[#42161D] leading-relaxed max-w-[66ch]">
                      Mystica is a luxury stationery and keepsake house celebrating life’s meaningful milestones—from wedding vows and newborn arrivals to seasonal Eid gifting. Crafted on 600gsm warm ivory cotton rag with blind letterpress debossing, hand-tied burgundy grosgrain ribbon, and micro-etched champagne gold foil that catches the light.
                    </p>
                  )}

                  {(langMode === 'bilingual' || langMode === 'ar') && (
                    <p
                      dir="rtl"
                      lang="ar"
                      className="font-arabic-ui text-sm sm:text-base text-[#5C4347] leading-relaxed max-w-[66ch]"
                    >
                      تجمعُ دار مِسْتِيكَا بين الورق القطني الفاخر بوزن 600 جرام، وشرائط الحرير العنّابية المنسوجة، والختم الذهبي البارز لتخليد أجمل مناسبات الحياة من حفلات الزفاف والمواليد إلى هدايا الأعياد والمراسلات الملكية.
                    </p>
                  )}
                </div>

                {/* Primary Conversion Actions & Pitch Capabilities Bar */}
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <a
                    href="#atelier-customizer"
                    onClick={() => navigateToSection('atelier-customizer')}
                    className="btn-tactile btn-primary-burgundy px-6 py-3.5 rounded-full bg-[#4A121A] text-[#F8F4EC] text-sm font-medium inline-flex items-center gap-2.5 no-underline"
                  >
                    <span>Customize Keepsake Suite</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E5C992]" />
                  </a>
                  <a
                    href="#packaging-dielines"
                    onClick={() => navigateToSection('packaging-dielines')}
                    className="btn-tactile btn-outline-atelier px-5 py-3.5 rounded-full border border-[#4A121A]/35 text-[#1E1114] text-sm font-medium inline-flex items-center gap-2 no-underline"
                  >
                    <Printer className="w-4 h-4 text-[#4A121A]" />
                    <span>Inspect Print Dielines &amp; Foil Plates</span>
                  </a>
                  <a
                    href="#pitch-matrix"
                    onClick={() => navigateToSection('pitch-matrix')}
                    className="btn-tactile btn-outline-atelier px-5 py-3.5 rounded-full border border-[#4A121A]/25 bg-[#EFE7DA]/70 text-[#4A121A] text-sm font-medium inline-flex items-center gap-2 no-underline"
                  >
                    <Check className="w-4 h-4 text-[#4A121A]" />
                    <span>Hold Media Brief Checklist</span>
                  </a>
                </div>

                {/* Interactive Paper Mill Swatch Cabinet Strip */}
                <div className="paper-sheet-ruled rounded-[14px] p-5 bg-[#EFE7DA]/55 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#4A121A]/15 pb-3">
                    <div>
                      <h2 className="font-display text-lg font-medium text-[#1E1114]">
                        Atelier Paper, Cloth &amp; Foil Swatch Cabinet
                      </h2>
                      <p className="text-xs text-[#5C4347]">
                        Select any physical stock to inspect Pantone/CMYK press specs or copy HEX tokens.
                      </p>
                    </div>
                    <span className="font-mono-spec text-xs text-[#4A121A] bg-[#F8F4EC] px-2.5 py-1 rounded border border-[#4A121A]/15">
                      {activeSwatch.pantone} · {activeSwatch.hex}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {SWATCH_TOKENS.map((swatch) => {
                      const isSelected = swatch.id === activeSwatchId;
                      return (
                        <button
                          key={swatch.id}
                          type="button"
                          onClick={() => setActiveSwatchId(swatch.id)}
                          className={`btn-tactile text-left p-2.5 rounded-[12px] border ${
                            isSelected
                              ? 'border-[#4A121A] bg-[#F8F4EC]'
                              : 'border-[#4A121A]/15 bg-[#F8F4EC]/60'
                          }`}
                        >
                          <div
                            className="h-9 w-full rounded-[6px] mb-2 flex items-end justify-between p-1.5 border border-black/10"
                            style={{ backgroundColor: swatch.hex, color: swatch.textColor }}
                          >
                            <span className="font-mono-spec text-[10px] opacity-90">{swatch.hex}</span>
                            {swatch.id === 'foil' && (
                              <Sparkles className="w-3 h-3 text-[#1E1114] foil-twinkle" />
                            )}
                          </div>
                          <p className="text-xs font-medium text-[#1E1114] truncate">{swatch.name}</p>
                          <p className="font-arabic text-xs text-[#4A121A] truncate" dir="rtl">
                            {swatch.arabicName}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-[#42161D]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span>
                        <strong>Material:</strong> {activeSwatch.materialNote}
                      </span>
                      <span className="font-mono-spec text-[11px] text-[#5C4347]">
                        {activeSwatch.cmyk}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopySwatch(activeSwatch.hex)}
                      className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A121A] text-[#F8F4EC] font-mono-spec text-[11px]"
                    >
                      {copiedHex === activeSwatch.hex ? (
                        <>
                          <Check className="w-3 h-3 text-[#E5C992]" />
                          <span>Copied {activeSwatch.hex}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#E5C992]" />
                          <span>Copy {activeSwatch.hex}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: Interactive Keepsake Box & Foil Catchlight Stage */}
              <div className="lg:col-span-5">
                <div className="paper-sheet-elevated rounded-[16px] overflow-hidden bg-[#4A121A] text-[#F8F4EC]">
                  {/* Stage Header Controls */}
                  <div className="p-4 bg-[#320A10] border-b border-[#C8A96E]/25 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C8A96E] foil-twinkle" />
                      <span className="font-mono-spec text-xs text-[#E5C992]">
                        SPECIMEN 01 · SOLANDER KEEPSAKE BOX
                      </span>
                    </div>
                    <div
                      role="group"
                      aria-label="Hero Specimen Inspection Mode"
                      className="flex items-center bg-[#1E080C] p-0.5 rounded-full border border-[#C8A96E]/30"
                    >
                      {(
                        [
                          { id: 'photograph', label: 'Studio Mockup' },
                          { id: 'monogram', label: 'EN/AR Foil Seal' },
                          { id: 'dieline', label: 'Print Overlay' },
                        ] as const
                      ).map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setHeroMode(mode.id)}
                          className={`btn-tactile px-2.5 py-1 rounded-full text-[11px] font-medium ${
                            heroMode === mode.id
                              ? 'bg-[#C8A96E] text-[#1E1114]'
                              : 'text-[#F8F4EC]/75 hover:text-[#F8F4EC]'
                          }`}
                        >
                          {mode.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Visual Stage */}
                  <div className="relative aspect-[4/3] bg-[#26080D] overflow-hidden">
                    <img
                      src={`${BASE}assets/mystica-hero-keepsake-box.png`}
                      alt="Mystica deep burgundy linen keepsake box tied with satin ribbon resting on 600gsm warm ivory cotton rag paper with gold foil star seal"
                      className="w-full h-full object-cover"
                    />

                    {/* Directional Specular Foil Catchlight Overlay controlled by Light Angle */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `linear-gradient(${lightAngle}deg, transparent 28%, rgba(229, 201, 146, 0.22) 48%, rgba(255, 248, 231, 0.34) 51%, transparent 70%)`,
                      }}
                    />

                    {/* Subtle Pinpoint Foil Sparkle Nodes */}
                    <svg
                      viewBox="0 0 400 300"
                      className="pointer-events-none absolute inset-0 w-full h-full"
                      aria-hidden="true"
                    >
                      <g className="foil-twinkle" transform="translate(215, 136)">
                        <path
                          d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z"
                          fill="#FFF5D6"
                        />
                      </g>
                      <g className="foil-twinkle-delayed" transform="translate(158, 178)">
                        <path
                          d="M0 -7 L1.5 -1.5 L7 0 L1.5 1.5 L0 7 L-1.5 1.5 L-7 0 L-1.5 -1.5 Z"
                          fill="#E5C992"
                        />
                      </g>
                    </svg>

                    {/* Live Bilingual Monogram Foil Overlay Mode */}
                    {heroMode === 'monogram' && (
                      <div className="atelier-panel-enter absolute inset-4 rounded-[12px] bg-[#F8F4EC]/95 text-[#1E1114] p-5 flex flex-col justify-between border border-[#C8A96E]">
                        <div className="flex items-center justify-between text-[11px] font-mono-spec text-[#4A121A]">
                          <span>600GSM WARM IVORY RAG</span>
                          <span>KURZ LUXOR 385 GOLD FOIL</span>
                        </div>
                        <div className="my-auto text-center space-y-2 py-3 border-y border-[#C8A96E]/50">
                          <svg
                            viewBox="0 0 64 64"
                            className="w-11 h-11 mx-auto text-[#C8A96E]"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="1.2" />
                            <path
                              d="M32 8 L36.5 25.5 L54 32 L36.5 38.5 L32 56 L27.5 38.5 L10 32 L27.5 25.5 Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="rgba(200,169,110,0.22)"
                            />
                            <circle cx="32" cy="32" r="3" fill="#4A121A" />
                          </svg>
                          <p className="font-display text-xl sm:text-2xl text-[#1E1114]">
                            {customEnLine}
                          </p>
                          <p className="font-arabic text-xl text-[#4A121A]" dir="rtl">
                            {customArLine}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#5C4347]">
                          <span>Blind Deboss Depth: 0.45mm</span>
                          <span>16mm Silk Grosgrain Ribbon</span>
                        </div>
                      </div>
                    )}

                    {/* Live Pre-Press Dieline Overlay Mode */}
                    {heroMode === 'dieline' && (
                      <div className="atelier-panel-enter absolute inset-0 bg-[#1E1114]/82 p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[11px] font-mono-spec text-[#E5C992]">
                          <span>DIELINE: MYS-BOX-240X180.AI</span>
                          <span>3.0MM BLEED · PANTONE 7428 C</span>
                        </div>
                        <svg
                          viewBox="0 0 360 220"
                          className="w-full h-44"
                          fill="none"
                          aria-label="Pre-press packaging dieline overlay"
                        >
                          {/* 3mm Bleed Outer Line */}
                          <rect
                            x="14"
                            y="14"
                            width="332"
                            height="192"
                            stroke="#38BDF8"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                          />
                          {/* Cut Line */}
                          <rect
                            x="24"
                            y="24"
                            width="312"
                            height="172"
                            stroke="#F43F5E"
                            strokeWidth="1.5"
                          />
                          {/* Score / Crease Hinges */}
                          <line x1="168" y1="24" x2="168" y2="196" stroke="#22D3EE" strokeWidth="1.2" strokeDasharray="5 4" />
                          <line x1="192" y1="24" x2="192" y2="196" stroke="#22D3EE" strokeWidth="1.2" strokeDasharray="5 4" />
                          {/* Silk Ribbon Pass-Through Slots */}
                          <rect x="86" y="102" width="22" height="16" stroke="#E5C992" strokeWidth="1.4" />
                          <rect x="252" y="102" width="22" height="16" stroke="#E5C992" strokeWidth="1.4" />
                          {/* Center Foil Star Stamp Registration */}
                          <circle cx="264" cy="110" r="28" stroke="#E5C992" strokeWidth="1.3" />
                          <path
                            d="M264 85 L268 104 L287 110 L268 116 L264 135 L260 116 L241 110 L260 104 Z"
                            stroke="#E5C992"
                            strokeWidth="1.3"
                          />
                        </svg>
                        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono-spec text-[#F8F4EC]">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-[#F43F5E]" /> CUT (0.25pt)
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" /> CREASE / FOLD
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-[#E5C992]" /> HOT FOIL DIE
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Interactive Foil Light-Catch Control Footer */}
                  <div className="p-4 bg-[#320A10] space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <label htmlFor="foil-light-slider" className="inline-flex items-center gap-1.5 text-[#E5C992] font-medium">
                        <Sun className="w-3.5 h-3.5" />
                        <span>Gallery Light &amp; Foil Sparkle Angle</span>
                      </label>
                      <span className="font-mono-spec text-[11px] text-[#F8F4EC]/80">{lightAngle}°</span>
                    </div>
                    <input
                      id="foil-light-slider"
                      type="range"
                      min={0}
                      max={180}
                      value={lightAngle}
                      onChange={(e) => setLightAngle(Number(e.target.value))}
                      className="w-full accent-[#C8A96E] cursor-pointer h-1.5 bg-[#1E080C] rounded-lg"
                    />
                    <div className="flex items-center justify-between text-[11px] text-[#D8C8B8]">
                      <span>600gsm Cotton Rag · 16mm Silk Grosgrain Ribbon</span>
                      <span>EN &amp; AR Bespoke Engraving</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 1: BRAND IDENTITY, SIGNATURE ICON & BILINGUAL TYPOGRAPHY
           ===================================================================== */}
        {(activeSection === 'all' || activeSection === 'identity') && (
          <section
            id="brand-identity"
            className="py-14 lg:py-20 border-b border-[#4A121A]/15 bg-[#EFE7DA]/45"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
              {/* Heading Block (No kicker/eyebrow above heading) */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#4A121A]/15 pb-6">
                <div className="space-y-2.5 max-w-2xl">
                  <h2 className="font-display text-3xl sm:text-4xl text-[#1E1114] font-normal">
                    Cohesive Brand Identity &amp; Bilingual Typographic Architecture
                  </h2>
                  <p className="text-sm sm:text-base text-[#42161D]">
                    Designed to move effortlessly between blind letterpress embossing, 16mm woven silk ribbon, and responsive digital viewports across English and Arabic scripts.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowLogoGrid((v) => !v)}
                    className={`btn-tactile px-3.5 py-2 rounded-full text-xs font-medium inline-flex items-center gap-1.5 border ${
                      showLogoGrid
                        ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                        : 'bg-[#F8F4EC] text-[#1E1114] border-[#4A121A]/25'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>{showLogoGrid ? 'Construction Grid: ON' : 'Construction Grid: OFF'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBaselineGrid((v) => !v)}
                    className={`btn-tactile px-3.5 py-2 rounded-full text-xs font-medium inline-flex items-center gap-1.5 border ${
                      showBaselineGrid
                        ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                        : 'bg-[#F8F4EC] text-[#1E1114] border-[#4A121A]/25'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{showBaselineGrid ? 'Optical Baselines: ON' : 'Optical Baselines: OFF'}</span>
                  </button>
                </div>
              </div>

              {/* Asymmetric 2-Part Brand Specimen Board */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left 5 Columns: Signature Star-Seal Icon & Bilingual Lockup Sheet */}
                <div className="lg:col-span-5 paper-sheet-ruled rounded-[16px] p-6 sm:p-8 bg-[#F8F4EC] flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-[#1E1114]">
                      The Celestial Star-Seal &amp; Ribbon Monogram
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4347]">
                      Built on an 8-pointed celestial compass fused with bias-cut silk ribbon terminals. Engineered for minimum 8mm hot-foil stamping and 24px digital favicons.
                    </p>
                  </div>

                  {/* Interactive Vector Construction Canvas */}
                  <div className="relative aspect-square max-h-[310px] mx-auto w-full rounded-[12px] bg-[#320A10] text-[#F8F4EC] flex items-center justify-center p-6 overflow-hidden">
                    <svg
                      viewBox="0 0 260 260"
                      className="w-full h-full max-w-[250px]"
                      fill="none"
                      aria-label="Mystica Signature Icon Construction Diagram"
                    >
                      {showLogoGrid && (
                        <g stroke="rgba(200,169,110,0.25)" strokeWidth="0.75">
                          <circle cx="130" cy="130" r="104" strokeDasharray="3 3" />
                          <circle cx="130" cy="130" r="72" strokeDasharray="2 2" />
                          <circle cx="130" cy="130" r="28" />
                          <line x1="0" y1="130" x2="260" y2="130" />
                          <line x1="130" y1="0" x2="130" y2="260" />
                          <line x1="26" y1="26" x2="234" y2="234" strokeDasharray="3 3" />
                          <line x1="234" y1="26" x2="26" y2="234" strokeDasharray="3 3" />
                        </g>
                      )}

                      {/* Outer Wax Seal Scallop Ring */}
                      <circle
                        cx="130"
                        cy="130"
                        r="92"
                        stroke="#C8A96E"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="130"
                        cy="130"
                        r="85"
                        stroke="#C8A96E"
                        strokeWidth="0.8"
                        strokeDasharray="4 3"
                      />

                      {/* 8-Pointed Celestial Star */}
                      <path
                        d="M130 34 L144 104 L214 130 L144 156 L130 226 L116 156 L46 130 L116 104 Z"
                        fill="rgba(200,169,110,0.16)"
                        stroke="#E5C992"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M72 72 L118 118 M188 72 L142 118 M72 188 L118 142 M188 188 L142 142"
                        stroke="#C8A96E"
                        strokeWidth="1.4"
                      />

                      {/* Delicate Flowing Silk Ribbon Loop at Base */}
                      <path
                        d="M92 178 C108 196, 152 196, 168 178 C180 194, 190 212, 198 224 L182 222 L176 234 C164 214, 148 198, 130 198 C112 198, 96 214, 84 234 L78 222 L62 224 C70 212, 80 194, 92 178 Z"
                        stroke="#E5C992"
                        strokeWidth="1.3"
                        fill="rgba(74,18,26,0.75)"
                      />

                      {/* Center Pinpoint Sparkle */}
                      <circle cx="130" cy="130" r="5" fill="#FFF5D6" className="foil-twinkle" />
                    </svg>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono-spec text-[#E5C992]/85">
                      <span>RATIO 1 : 1.618</span>
                      <span>MIN FOIL STAMP: 8.0MM</span>
                    </div>
                  </div>

                  {/* Lockup Variants Bar */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                    <div className="p-3 rounded-[10px] bg-[#EFE7DA]/70 border border-[#4A121A]/15">
                      <p className="font-display text-sm font-semibold text-[#1E1114]">MYSTICA</p>
                      <p className="text-[10px] font-mono-spec text-[#5C4347] mt-1">Primary Latin</p>
                    </div>
                    <div className="p-3 rounded-[10px] bg-[#EFE7DA]/70 border border-[#4A121A]/15">
                      <p className="font-arabic text-base font-bold text-[#4A121A]">مِسْتِيكَا</p>
                      <p className="text-[10px] font-mono-spec text-[#5C4347] mt-1">Primary Arabic</p>
                    </div>
                    <div className="p-3 rounded-[10px] bg-[#4A121A] text-[#F8F4EC]">
                      <p className="font-display text-sm tracking-widest text-[#E5C992]">M · م</p>
                      <p className="text-[10px] font-mono-spec text-[#F8F4EC]/75 mt-1">Wax Seal Cypher</p>
                    </div>
                  </div>
                </div>

                {/* Right 7 Columns: Bilingual Arabic & English Typographic Specimen Sheet */}
                <div className="lg:col-span-7 paper-sheet-ruled rounded-[16px] p-6 sm:p-8 bg-[#F8F4EC] flex flex-col justify-between space-y-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#4A121A]/15 pb-4">
                    <div>
                      <h3 className="font-display text-2xl text-[#1E1114]">
                        Bilingual Latin &amp; Arabic Type Specimen
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C4347]">
                        Pairing Parma fine-press <strong>Bodoni Moda</strong> with Cairo Bulaq-revival <strong>Amiri</strong> Naskh and <strong>Readex Pro</strong> on a shared optical baseline grid.
                      </p>
                    </div>
                    <span className="font-mono-spec text-xs px-3 py-1 rounded-full bg-[#EFE7DA] text-[#4A121A]">
                      OPTICAL SCALE · LTR &amp; RTL
                    </span>
                  </div>

                  {/* Shared Baseline Specimen Rows */}
                  <div className="space-y-5">
                    {/* Display Pairing Row */}
                    <div
                      className={`p-4 rounded-[12px] ${
                        showBaselineGrid
                          ? 'bg-[linear-gradient(to_bottom,transparent_23px,rgba(74,18,26,0.12)_24px)] bg-[length:100%_24px]'
                          : 'bg-[#EFE7DA]/40'
                      } border border-[#4A121A]/15`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-baseline">
                        <div>
                          <p className="font-display text-3xl sm:text-4xl text-[#1E1114]">
                            Moments Worth Keeping
                          </p>
                          <p className="font-mono-spec text-[11px] text-[#5C4347] mt-1.5">
                            Display EN · Bodoni Moda Optical 42px / -0.025em
                          </p>
                        </div>
                        <div dir="rtl" lang="ar" className="text-right">
                          <p className="font-arabic text-3xl sm:text-4xl text-[#4A121A]">
                            لحظاتٌ تستحقُ أن تُخلَّد
                          </p>
                          <p className="font-mono-spec text-[11px] text-[#5C4347] mt-1.5" dir="ltr">
                            Display AR · Amiri Regular 40px / Line 1.45
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ceremonial Invitation Copy Row */}
                    <div
                      className={`p-4 rounded-[12px] ${
                        showBaselineGrid
                          ? 'bg-[linear-gradient(to_bottom,transparent_23px,rgba(74,18,26,0.12)_24px)] bg-[length:100%_24px]'
                          : 'bg-[#EFE7DA]/40'
                      } border border-[#4A121A]/15`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div>
                          <p className="font-display italic text-lg text-[#1E1114] leading-relaxed">
                            “Each envelope is lined in blush silk parchment, tied by hand with 16mm deep burgundy grosgrain ribbon, and sealed with our celestial star.”
                          </p>
                          <p className="font-mono-spec text-[11px] text-[#5C4347] mt-2">
                            Editorial Italic · Bodoni Moda Italic 18px
                          </p>
                        </div>
                        <div dir="rtl" lang="ar" className="text-right">
                          <p className="font-arabic text-xl text-[#1E1114] leading-relaxed">
                            «يُبطَّن كلُّ ظرفٍ برقائق الحرير العاجي، ويُربط يدوياً بشريطِ الغروغران العنّابي ويُختم بنجمة مِسْتِيكَا الذهبية.»
                          </p>
                          <p className="font-mono-spec text-[11px] text-[#5C4347] mt-2" dir="ltr">
                            Ceremonial Naskh · Amiri 20px
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* UI & Packaging Spec Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 rounded-[12px] bg-[#EFE7DA]/65 border border-[#4A121A]/15">
                        <p className="font-medium text-[#1E1114]">Jost Atelier Sans</p>
                        <p className="text-[#5C4347] mt-1">
                          Used for navigation, customization controls, and clear retail wayfinding.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-[12px] bg-[#EFE7DA]/65 border border-[#4A121A]/15" dir="rtl">
                        <p className="font-arabic-ui font-medium text-[#1E1114]">ريدكس برو للواجهات</p>
                        <p className="font-arabic-ui text-[#5C4347] mt-1">
                          خط عربي هندسي واضح للأزرار وخيارات التخصيص والتسوق الرقمي.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-[12px] bg-[#EFE7DA]/65 border border-[#4A121A]/15">
                        <p className="font-mono-spec font-medium text-[#4A121A]">JetBrains Mono Tabular</p>
                        <p className="text-[#5C4347] mt-1">
                          Reserved strictly for gsm paper weights, mm dielines, and Pantone codes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            SECTION 2: LIVE BESPOKE KEEPSAKE & STATIONERY ATELIER (STOREFRONT)
           ===================================================================== */}
        {(activeSection === 'all' || activeSection === 'atelier') && (
          <section
            id="atelier-customizer"
            className="py-14 lg:py-20 border-b border-[#4A121A]/15 bg-[#F8F4EC]"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
              {/* Heading Block (No kicker above heading) */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#4A121A]/15 pb-6">
                <div className="space-y-2 max-w-2xl">
                  <h2 className="font-display text-3xl sm:text-4xl text-[#1E1114] font-normal">
                    The Bespoke Keepsake &amp; Stationery Atelier
                  </h2>
                  <p className="text-sm sm:text-base text-[#42161D]">
                    An intuitive desktop and mobile customization flow where clients select their milestone coffret, test cotton and burgundy paper stocks, pair silk ribbons, and preview live English &amp; Arabic foil stamping.
                  </p>
                </div>

                {/* Occasion Suite Selector */}
                <div className="flex flex-wrap items-center gap-2">
                  {OCCASION_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleOccasionChange(preset)}
                      className={`btn-tactile px-4 py-2 rounded-full text-xs sm:text-sm font-medium border ${
                        selectedOccasionId === preset.id
                          ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                          : 'bg-[#EFE7DA]/70 text-[#1E1114] border-[#4A121A]/20'
                      }`}
                    >
                      {preset.titleEn.replace('The ', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Workbench Split: Left Live Specimen Stage + Right Customization Controls */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left 7 Columns: Live Proof Stage & Photography Pair */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Live Physical Card & Ribbon Simulation */}
                  <div
                    className={`rounded-[16px] p-6 sm:p-10 transition-colors duration-200 ${
                      paperStock === 'burgundy-cloth'
                        ? 'bg-[#4A121A] text-[#F8F4EC]'
                        : paperStock === 'pearl-mica'
                        ? 'bg-[#FAF6EE] text-[#1E1114]'
                        : 'bg-[#F6F1E7] text-[#1E1114]'
                    } paper-sheet-elevated relative overflow-hidden`}
                  >
                    {/* Simulated Silk Ribbon Band (Top band on mobile, vertical left band on sm+) */}
                    <div
                      aria-hidden="true"
                      className={`h-3 w-full mb-4 sm:mb-0 sm:h-auto sm:absolute sm:top-0 sm:bottom-0 sm:left-10 sm:w-6 ${
                        ribbonStyle === 'burgundy-grosgrain'
                          ? 'bg-[#4A121A] border-y sm:border-y-0 sm:border-x border-[#C8A96E]/45'
                          : ribbonStyle === 'ivory-silk'
                          ? 'bg-[#EFE7DA] border-y sm:border-y-0 sm:border-x border-[#4A121A]/20'
                          : 'bg-[#C8A96E] border-y sm:border-y-0 sm:border-x border-[#4A121A]/30'
                      }`}
                    />

                    <div className="sm:pl-14 space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-spec opacity-80">
                        <span>LIVE ATELIER PROOF · {selectedOccasion.dateSpec}</span>
                        <span>
                          {paperStock === 'ivory-600'
                            ? '600GSM WARM IVORY RAG'
                            : paperStock === 'burgundy-cloth'
                            ? '600GSM DEEP BURGUNDY CLOTH'
                            : '540GSM MICA PEARL PAPER'}
                        </span>
                      </div>

                      {/* Blind-Debossed Inner Plate */}
                      <div
                        className={`rounded-[12px] p-6 sm:p-8 ${
                          paperStock === 'burgundy-cloth'
                            ? 'border border-[#C8A96E]/45 bg-[#320A10]/70'
                            : 'deboss-plate'
                        } text-center space-y-4`}
                      >
                        {/* Seal Emblem */}
                        <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center border border-[#C8A96E]/60 bg-[#4A121A] text-[#E5C992]">
                          <Sparkles className="w-6 h-6 foil-twinkle" />
                        </div>

                        <div className="space-y-2">
                          <p
                            className={`font-display text-2xl sm:text-3xl ${
                              foilFinish === 'champagne-gold'
                                ? 'text-[#B38E4C]'
                                : paperStock === 'burgundy-cloth'
                                ? 'text-[#F8F4EC]'
                                : 'text-[#1E1114]'
                            }`}
                          >
                            {customEnLine || 'Your Milestone Inscription'}
                          </p>
                          <p
                            dir="rtl"
                            lang="ar"
                            className={`font-arabic text-2xl sm:text-3xl ${
                              paperStock === 'burgundy-cloth' ? 'text-[#E5C992]' : 'text-[#4A121A]'
                            }`}
                          >
                            {customArLine || 'النص العربي المخصص للمناسبة'}
                          </p>
                        </div>

                        <p className="font-mono-spec text-[11px] opacity-75 pt-2">
                          {foilFinish === 'champagne-gold'
                            ? 'STAMP: KURZ LUXOR 385 CHAMPAGNE GOLD FOIL + 0.4MM DEBOSS'
                            : foilFinish === 'blind-deboss'
                            ? 'IMPRESSION: DEEP BLIND LETTERPRESS DEBOSS (NO INK)'
                            : 'SEAL: HAND-POURED BURGUNDY WAX & BRASS STAR MATRIX'}
                        </p>
                      </div>

                      {/* Included Suite Physical Artifacts + Photo Thumbnail */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
                        <div className="sm:col-span-5 aspect-[4/3] rounded-[10px] overflow-hidden border border-[#C8A96E]/35">
                          <img
                            src={selectedOccasion.image}
                            alt={selectedOccasion.titleEn}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="sm:col-span-7 space-y-2">
                          <h3 className="font-display text-lg font-medium">
                            {selectedOccasion.titleEn}
                          </h3>
                          <p className="font-arabic text-base opacity-90" dir="rtl">
                            {selectedOccasion.titleAr}
                          </p>
                          <ul className="space-y-1 text-xs opacity-85">
                            {selectedOccasion.contents.map((line) => (
                              <li key={line} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-[#C8A96E] shrink-0" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Interactive Atelier Customizer Form */}
                <div className="lg:col-span-5 paper-sheet-ruled rounded-[16px] p-6 sm:p-8 bg-[#EFE7DA]/60 space-y-6">
                  <div className="border-b border-[#4A121A]/15 pb-4">
                    <h3 className="font-display text-2xl text-[#1E1114]">
                      Configure Your Suite Specifications
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4347] mt-1">
                      Every order includes a physical paper-mill proof and dual-script typesetting review before press.
                    </p>
                  </div>

                  {/* Step 1: Paper & Cloth Stock */}
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-[#1E1114]">
                      1. Paper &amp; Keepsake Box Stock
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(
                        [
                          { id: 'ivory-600', label: '600gsm Ivory Rag' },
                          { id: 'burgundy-cloth', label: 'Burgundy Cloth' },
                          { id: 'pearl-mica', label: 'Pearl Shimmer' },
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setPaperStock(opt.id)}
                          className={`btn-tactile py-2.5 px-3 rounded-[10px] text-xs font-medium border ${
                            paperStock === opt.id
                              ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                              : 'bg-[#F8F4EC] text-[#1E1114] border-[#4A121A]/20'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Delicate Ribbon Selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-[#1E1114]">
                      2. Delicate Silk Ribbon Tie
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(
                        [
                          { id: 'burgundy-grosgrain', label: 'Burgundy Silk' },
                          { id: 'ivory-silk', label: 'Warm Ivory Satin' },
                          { id: 'gold-cord', label: 'Champagne Cord' },
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setRibbonStyle(opt.id)}
                          className={`btn-tactile py-2.5 px-3 rounded-[10px] text-xs font-medium border ${
                            ribbonStyle === opt.id
                              ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                              : 'bg-[#F8F4EC] text-[#1E1114] border-[#4A121A]/20'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Foil & Press Impression */}
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-[#1E1114]">
                      3. Foil Sparkle &amp; Letterpress Finish
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(
                        [
                          { id: 'champagne-gold', label: 'Gold Foil + Deboss' },
                          { id: 'blind-deboss', label: 'Blind Letterpress' },
                          { id: 'burgundy-wax', label: 'Star Wax Seal' },
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFoilFinish(opt.id)}
                          className={`btn-tactile py-2.5 px-3 rounded-[10px] text-xs font-medium border ${
                            foilFinish === opt.id
                              ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                              : 'bg-[#F8F4EC] text-[#1E1114] border-[#4A121A]/20'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Live Bilingual Inscription Inputs */}
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="en-inscription" className="block text-xs font-medium text-[#1E1114] mb-1">
                        English Foil Inscription (Bodoni Moda)
                      </label>
                      <input
                        id="en-inscription"
                        type="text"
                        value={customEnLine}
                        onChange={(e) => setCustomEnLine(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-[10px] bg-[#F8F4EC] border border-[#4A121A]/25 text-base text-[#1E1114] font-display"
                      />
                    </div>
                    <div>
                      <label htmlFor="ar-inscription" className="block text-xs font-medium text-[#1E1114] mb-1">
                        Arabic Calligraphic Inscription (Amiri · النص العربي)
                      </label>
                      <input
                        id="ar-inscription"
                        type="text"
                        dir="rtl"
                        lang="ar"
                        value={customArLine}
                        onChange={(e) => setCustomArLine(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-[10px] bg-[#F8F4EC] border border-[#4A121A]/25 text-lg text-[#4A121A] font-arabic"
                      />
                    </div>
                  </div>

                  {/* Step 5: Suite Quantity & Commission Action */}
                  <div className="pt-2 border-t border-[#4A121A]/15 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-medium text-[#1E1114] block">
                          Edition Quantity ({suiteQuantity} Keepsake Suites)
                        </span>
                        <span className="text-[11px] text-[#5C4347]">
                          Includes custom engraved brass die &amp; press setup
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {[25, 50, 100].map((qty) => (
                          <button
                            key={qty}
                            type="button"
                            onClick={() => setSuiteQuantity(qty)}
                            className={`btn-tactile px-2.5 py-1 rounded text-xs font-mono-spec border ${
                              suiteQuantity === qty
                                ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                                : 'bg-[#F8F4EC] text-[#1E1114] border-[#4A121A]/20'
                            }`}
                          >
                            {qty}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-xs text-[#5C4347] block">Estimated Atelier Commission</span>
                        <span className="font-display text-2xl font-semibold text-[#1E1114] tabular-nums">
                          ${totalEstimate} USD
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCommissionedToast(true);
                          window.setTimeout(() => setCommissionedToast(false), 3500);
                        }}
                        className="btn-tactile btn-primary-burgundy px-6 py-3 rounded-full bg-[#4A121A] text-[#F8F4EC] text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-[#E5C992]" />
                        <span>Reserve Atelier Proof</span>
                      </button>
                    </div>

                    {commissionedToast && (
                      <div
                        role="status"
                        className="atelier-panel-enter p-3 rounded-[10px] bg-[#320A10] text-[#F8F4EC] text-xs flex items-center justify-between border border-[#C8A96E]/50"
                      >
                        <span>
                          Atelier Spec Locked: {suiteQuantity}× {selectedOccasion.titleEn} in {paperStock} with {foilFinish}.
                        </span>
                        <Check className="w-4 h-4 text-[#E5C992] shrink-0" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            SECTION 3: PACKAGING, MOCKUPS & PRINT PRODUCTION DIELINE WORKBENCH
           ===================================================================== */}
        {(activeSection === 'all' || activeSection === 'packaging') && (
          <section
            id="packaging-dielines"
            className="py-14 lg:py-20 border-b border-[#C8A96E]/25 burgundy-cloth-surface"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
              {/* Heading Block (No kicker above heading) */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#C8A96E]/25 pb-6">
                <div className="space-y-2 max-w-2xl">
                  <h2 className="font-display text-3xl sm:text-4xl text-[#F8F4EC] font-normal">
                    Packaging Mockups &amp; Print-Ready Pre-Press Dielines
                  </h2>
                  <p className="text-sm sm:text-base text-[#D8C8B8]">
                    Hold Media Agency requires editable design files and artwork prepared for print. Toggle individual separation plates below to inspect how Mystica’s rigid keepsake box is engineered for the press.
                  </p>
                </div>

                {/* Layer Separation Toggles */}
                <div className="flex flex-wrap items-center gap-2">
                  {(
                    [
                      { key: 'cutLine', label: 'Die-Cut (0.25pt)', color: '#F43F5E' },
                      { key: 'creaseLine', label: 'Crease / Score', color: '#22D3EE' },
                      { key: 'bleedZone', label: '3.0mm Bleed', color: '#38BDF8' },
                      { key: 'foilPlate', label: 'Gold Foil Plate', color: '#E5C992' },
                      { key: 'debossPlate', label: 'Blind Deboss', color: '#C084FC' },
                      { key: 'ribbonSlot', label: 'Silk Ribbon Slots', color: '#34D399' },
                    ] as const
                  ).map((layer) => {
                    const active = dielineLayers[layer.key];
                    return (
                      <button
                        key={layer.key}
                        type="button"
                        onClick={() => toggleDielineLayer(layer.key)}
                        className={`btn-tactile px-3 py-1.5 rounded-full text-xs font-mono-spec inline-flex items-center gap-1.5 border ${
                          active
                            ? 'bg-[#320A10] text-[#F8F4EC] border-[#C8A96E]/60'
                            : 'bg-transparent text-[#D8C8B8]/50 border-[#D8C8B8]/20'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: active ? layer.color : '#6B7280' }}
                        />
                        <span>{layer.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Interactive Vector CAD Pre-Press Dieline Sheet */}
                <div className="lg:col-span-7 rounded-[16px] bg-[#1E080C] border border-[#C8A96E]/35 p-5 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-spec text-[#E5C992]">
                    <span>FILE: MYSTICA_SOLANDER_COFFRET_240x180x45MM_PRESS.AI</span>
                    <span>SCALE 1:1 · ISO 12647-2 OFFSET &amp; HOT FOIL</span>
                  </div>

                  <div className="rounded-[12px] bg-[#140508] p-3 sm:p-4 border border-[#C8A96E]/20">
                    <svg
                      viewBox="0 0 680 420"
                      className="w-full h-auto"
                      fill="none"
                      aria-label="Mystica Solander Keepsake Box Interactive Print Dieline"
                    >
                      {/* Registration Crosshairs */}
                      <g stroke="#9CA3AF" strokeWidth="1">
                        <circle cx="24" cy="24" r="6" />
                        <line x1="14" y1="24" x2="34" y2="24" />
                        <line x1="24" y1="14" x2="24" y2="34" />
                        <circle cx="656" cy="24" r="6" />
                        <line x1="646" y1="24" x2="666" y2="24" />
                        <line x1="656" y1="14" x2="656" y2="34" />
                        <circle cx="24" cy="396" r="6" />
                        <line x1="14" y1="396" x2="34" y2="396" />
                        <line x1="24" y1="386" x2="24" y2="406" />
                        <circle cx="656" cy="396" r="6" />
                        <line x1="646" y1="396" x2="666" y2="396" />
                        <line x1="656" y1="386" x2="656" y2="406" />
                      </g>

                      {/* 3.0mm Bleed Zone */}
                      {dielineLayers.bleedZone && (
                        <g stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4">
                          <rect x="44" y="38" width="592" height="344" rx="4" />
                          <text x="54" y="54" fill="#38BDF8" fontSize="10" fontFamily="monospace">
                            3.0MM BLEED PERIMETER (PANTONE 7428 C FLOOD WRAP)
                          </text>
                        </g>
                      )}

                      {/* Die-Cut Perimeter (Magenta 0.25pt) */}
                      {dielineLayers.cutLine && (
                        <g stroke="#F43F5E" strokeWidth="1.6">
                          {/* Left Base Tray Panel */}
                          <rect x="64" y="64" width="230" height="292" />
                          {/* Center Spine Wall */}
                          <rect x="294" y="64" width="52" height="292" />
                          {/* Right Front Lid Panel */}
                          <rect x="346" y="64" width="230" height="292" />
                          {/* Flap Wings */}
                          <path d="M64 64 L84 44 L274 44 L294 64" />
                          <path d="M64 356 L84 376 L274 376 L294 356" />
                          <path d="M346 64 L366 44 L556 44 L576 64" />
                          <path d="M346 356 L366 376 L556 376 L576 356" />
                        </g>
                      )}

                      {/* Crease / Score Fold Lines (Cyan Dashed) */}
                      {dielineLayers.creaseLine && (
                        <g stroke="#22D3EE" strokeWidth="1.3" strokeDasharray="6 4">
                          <line x1="100" y1="64" x2="100" y2="356" />
                          <line x1="294" y1="64" x2="294" y2="356" />
                          <line x1="346" y1="64" x2="346" y2="356" />
                          <line x1="540" y1="64" x2="540" y2="356" />
                          <line x1="64" y1="100" x2="576" y2="100" />
                          <line x1="64" y1="320" x2="576" y2="320" />
                        </g>
                      )}

                      {/* Blind Deboss Frame Plate (Purple) */}
                      {dielineLayers.debossPlate && (
                        <g stroke="#C084FC" strokeWidth="1.4">
                          <rect x="372" y="118" width="146" height="184" rx="2" />
                          <rect x="122" y="118" width="146" height="184" rx="2" strokeDasharray="2 2" />
                          <text x="382" y="134" fill="#C084FC" fontSize="9" fontFamily="monospace">
                            BLIND DEBOSS (0.45MM)
                          </text>
                        </g>
                      )}

                      {/* Silk Ribbon Die-Cut Slots (Emerald) */}
                      {dielineLayers.ribbonSlot && (
                        <g stroke="#34D399" strokeWidth="1.8" fill="rgba(52,211,153,0.15)">
                          <rect x="92" y="196" width="16" height="28" rx="2" />
                          <rect x="532" y="196" width="16" height="28" rx="2" />
                          <text x="72" y="238" fill="#34D399" fontSize="9" fontFamily="monospace">
                            16MM RIBBON SLOT
                          </text>
                        </g>
                      )}

                      {/* Hot Gold Foil Stamp Plate (Gold) */}
                      {dielineLayers.foilPlate && (
                        <g stroke="#E5C992" strokeWidth="1.5">
                          <circle cx="445" cy="195" r="32" fill="rgba(229,201,146,0.12)" />
                          <path
                            d="M445 166 L450 188 L472 195 L450 202 L445 224 L440 202 L418 195 L440 188 Z"
                            fill="rgba(229,201,146,0.28)"
                          />
                          <text
                            x="445"
                            y="246"
                            textAnchor="middle"
                            fill="#E5C992"
                            fontSize="13"
                            fontFamily="Georgia, serif"
                            letterSpacing="3"
                          >
                            MYSTICA
                          </text>
                          <text
                            x="445"
                            y="264"
                            textAnchor="middle"
                            fill="#E5C992"
                            fontSize="13"
                            fontFamily="serif"
                          >
                            مِسْتِيكَا
                          </text>
                          {/* Spine Foil Stamp */}
                          <text
                            x="320"
                            y="210"
                            textAnchor="middle"
                            fill="#E5C992"
                            fontSize="9"
                            fontFamily="monospace"
                            transform="rotate(-90 320 210)"
                          >
                            MYSTICA · ARCHIVE EDITION
                          </text>
                        </g>
                      )}

                      {/* Dimension Callouts */}
                      <g fill="#D8C8B8" fontSize="10" fontFamily="monospace">
                        <text x="178" y="395" textAnchor="middle">← 180 MM BASE TRAY →</text>
                        <text x="320" y="395" textAnchor="middle">45MM</text>
                        <text x="460" y="395" textAnchor="middle">← 180 MM FRONT LID →</text>
                      </g>
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-spec text-[#D8C8B8]">
                    <div className="p-2.5 rounded bg-[#140508] border border-[#C8A96E]/20">
                      <span className="text-[#E5C992] block">BOARD CORE</span>
                      <span>2.5mm Greyboard (1500gsm)</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#140508] border border-[#C8A96E]/20">
                      <span className="text-[#E5C992] block">OUTER WRAP</span>
                      <span>135gsm Dyed Burgundy Cloth</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#140508] border border-[#C8A96E]/20">
                      <span className="text-[#E5C992] block">FOIL DIE</span>
                      <span>7mm CNC Brass @ 115°C</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#140508] border border-[#C8A96E]/20">
                      <span className="text-[#E5C992] block">DELIVERABLES</span>
                      <span>AI · PDF/X-4 · EPS · DXF</span>
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Studio Packaging Mockup Gallery */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="rounded-[16px] overflow-hidden bg-[#320A10] border border-[#C8A96E]/35">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`${BASE}assets/mystica-stationery-suite-flatlay.png`}
                        alt="Mystica complete stationery flat-lay showing deep burgundy envelopes, warm ivory deckle-edge cotton cards, silk ribbon spool, and brass wax stamp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-1.5">
                      <h3 className="font-display text-xl text-[#F8F4EC]">
                        Complete Correspondence &amp; Wax Seal Suite
                      </h3>
                      <p className="text-xs text-[#D8C8B8]">
                        600gsm mould-made cotton cards paired with silk-lined burgundy envelopes, woven ribbon spools, and engraved brass seal matrices.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-[14px] overflow-hidden bg-[#320A10] border border-[#C8A96E]/30">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={`${BASE}assets/mystica-wedding-milestone-coffret.png`}
                          alt="Mystica rigid burgundy drawer coffret with ivory silk ribbon pull"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3.5">
                        <h4 className="font-display text-base text-[#F8F4EC]">
                          Milestone Drawer Coffret
                        </h4>
                        <p className="text-[11px] text-[#D8C8B8] mt-0.5">
                          Velvet-lined keepsake tray with satin ribbon pull tab.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[14px] overflow-hidden bg-[#320A10] border border-[#C8A96E]/30">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={`${BASE}assets/mystica-ramadan-eid-gifting-suite.png`}
                          alt="Mystica seasonal Ramadan and Eid bilingual gifting keepsake box"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3.5">
                        <h4 className="font-display text-base text-[#F8F4EC]">
                          Bilingual Seasonal Gifting
                        </h4>
                        <p className="text-[11px] text-[#D8C8B8] mt-0.5">
                          Arabic &amp; English foil-stamped celebration boxes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            SECTION 4: DIGITAL ADVERTISING, SOCIAL CREATIVES & MOTION STUDIO
           ===================================================================== */}
        {(activeSection === 'all' || activeSection === 'campaigns') && (
          <section
            id="campaigns-motion"
            className="py-14 lg:py-20 border-b border-[#4A121A]/15 bg-[#F8F4EC]"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
              {/* Heading Block (No kicker above heading) */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#4A121A]/15 pb-6">
                <div className="space-y-2 max-w-2xl">
                  <h2 className="font-display text-3xl sm:text-4xl text-[#1E1114] font-normal">
                    Digital Advertising Creatives &amp; Choreographed Brand Motion
                  </h2>
                  <p className="text-sm sm:text-base text-[#42161D]">
                    Built for paid social acquisition and organic brand storytelling across Instagram Reels, TikTok, and Meta Carousel ads—combining bilingual hooks with tactile unboxing motion.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {(
                    [
                      { id: 'story-9x16', label: '9:16 Reels / Story Ad' },
                      { id: 'carousel-4x5', label: '4:5 Paid Feed Carousel' },
                      { id: 'film-16x9', label: '16:9 Launch Bumper' },
                    ] as const
                  ).map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setActiveAdFormat(fmt.id)}
                      className={`btn-tactile px-3.5 py-2 rounded-full text-xs font-medium border ${
                        activeAdFormat === fmt.id
                          ? 'bg-[#4A121A] text-[#F8F4EC] border-[#4A121A]'
                          : 'bg-[#EFE7DA]/70 text-[#1E1114] border-[#4A121A]/20'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setIsReelPlaying((p) => !p)}
                    className="btn-tactile px-3.5 py-2 rounded-full bg-[#320A10] text-[#E5C992] text-xs font-mono-spec inline-flex items-center gap-1.5"
                  >
                    {isReelPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isReelPlaying ? 'Pause Motion' : 'Play Motion'}</span>
                  </button>
                </div>
              </div>

              {/* Active Ad Format Specification Bar */}
              <div className="paper-sheet-ruled rounded-[12px] px-4 py-3 bg-[#EFE7DA]/75 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#4A121A] text-[#E5C992] font-mono-spec text-[11px]">
                    ACTIVE FORMAT SPEC
                  </span>
                  <strong className="text-[#1E1114]">
                    {activeAdFormat === 'story-9x16'
                      ? '9:16 Vertical Reels & TikTok Story Ad (1080×1920px · 4:5 Safe Zone)'
                      : activeAdFormat === 'carousel-4x5'
                      ? '4:5 Meta Paid Feed Carousel Suite (1080×1350px · Bilingual GCC Copy)'
                      : '16:9 Launch Film & Web Hero Bumper (1920×1080px · 6.0s Seamless SVG/WAAPI Loop)'}
                  </strong>
                </div>
                <span className="font-mono-spec text-[11px] text-[#4A121A]">
                  {activeAdFormat === 'story-9x16'
                    ? 'HOOK RATE TARGET: 42% · AUDIO + CAPTIONS'
                    : activeAdFormat === 'carousel-4x5'
                    ? 'CTR BENCHMARK: 3.4% · DYNAMIC CATALOG'
                    : '60FPS GPU COMPOSITED · ZERO LAYOUT SHIFT'}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Live Social Ad Creative Trio */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Ad Unit 1: 9:16 Vertical Story / Reels Creative */}
                  <div
                    onClick={() => setActiveAdFormat('story-9x16')}
                    className={`paper-sheet-elevated rounded-[16px] overflow-hidden bg-[#320A10] text-[#F8F4EC] flex flex-col justify-between transition-opacity duration-200 ${
                      activeAdFormat === 'story-9x16'
                        ? 'ring-2 ring-[#C8A96E] opacity-100'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="p-3.5 bg-[#1E080C] border-b border-[#C8A96E]/25 flex items-center justify-between text-[11px] font-mono-spec text-[#E5C992]">
                      <span>IG REEL / TIKTOK AD · 9:16</span>
                      <span>
                        {activeAdFormat === 'story-9x16' ? '● SELECTED FORMAT' : 'ROAS CREATIVE A'}
                      </span>
                    </div>

                    <div className="relative aspect-[9/13] overflow-hidden bg-[#26080D]">
                      <img
                        src={`${BASE}assets/mystica-hero-keepsake-box.png`}
                        alt="Mystica vertical social ad preview"
                        className="w-full h-full object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E080C] via-[#1E080C]/35 to-transparent p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm tracking-widest text-[#E5C992]">
                            MYSTICA · مِسْتِيكَا
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#4A121A]/90 border border-[#C8A96E]/40 text-[10px] font-mono-spec">
                            SPONSORED
                          </span>
                        </div>

                        <div className="space-y-3">
                          <p className="font-arabic text-xl text-[#E5C992]" dir="rtl">
                            صُنعت لتبقى ذكرى لا تُنسى
                          </p>
                          <h3 className="font-display text-2xl text-[#F8F4EC] leading-snug">
                            Some words deserve more than a screen.
                          </h3>
                          <p className="text-xs text-[#D8C8B8]">
                            600gsm cotton rag cards &amp; silk-ribboned keepsake boxes. Personalize in English &amp; Arabic.
                          </p>
                          <div className="pt-1">
                            <a
                              href="#atelier-customizer"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigateToSection('atelier-customizer');
                              }}
                              className="btn-tactile inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C8A96E] text-[#1E1114] text-xs font-medium no-underline"
                            >
                              <span>Design Your Keepsake Suite</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ad Unit 2: Bilingual Seasonal Gifting Carousel Card (Single elevation: paper-sheet-elevated only, no outer border) */}
                  <div
                    onClick={() => setActiveAdFormat('carousel-4x5')}
                    className={`paper-sheet-elevated rounded-[16px] overflow-hidden bg-[#F8F4EC] text-[#1E1114] flex flex-col justify-between transition-opacity duration-200 ${
                      activeAdFormat === 'carousel-4x5'
                        ? 'ring-2 ring-[#4A121A] opacity-100'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="p-3.5 bg-[#EFE7DA] border-b border-[#4A121A]/15 flex items-center justify-between text-[11px] font-mono-spec text-[#4A121A]">
                      <span>META CAROUSEL · 4:5 FEED</span>
                      <span>
                        {activeAdFormat === 'carousel-4x5' ? '● SELECTED FORMAT' : 'BILINGUAL GCC CAMPAIGN'}
                      </span>
                    </div>

                    <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="aspect-[4/3] rounded-[12px] overflow-hidden relative border border-[#4A121A]/15">
                        <img
                          src={`${BASE}assets/mystica-ramadan-eid-gifting-suite.png`}
                          alt="Mystica Ramadan and Eid gifting ad creative"
                          className="w-full h-full object-cover"
                        />
                        <div className="silk-ribbon-band absolute bottom-0 inset-x-0 py-1.5 px-3 flex items-center justify-between text-[11px] text-[#F8F4EC]">
                          <span>COMPLIMENTARY FOIL MONOGRAMMING</span>
                          <span className="font-arabic" dir="rtl">نقش ذهبي مجاني</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="font-display text-xl text-[#1E1114]">
                            The Royal Gifting Coffret
                          </h3>
                          <span className="font-arabic text-lg text-[#4A121A] font-bold" dir="rtl">
                            صندوق الإهداء الملكي
                          </span>
                        </div>
                        <p className="text-xs text-[#5C4347] leading-relaxed">
                          Wrapped in 16mm deep burgundy satin ribbon with micro-etched champagne gold star seals. Ships in 48 hours across Dubai, Riyadh, Doha, and London.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#4A121A]/15 flex items-center justify-between text-xs">
                        <span className="font-mono-spec text-[#4A121A]">MYSTICA-ATELIER.COM</span>
                        <a
                          href="#atelier-customizer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateToSection('atelier-customizer');
                          }}
                          className="btn-tactile px-3.5 py-1.5 rounded-full bg-[#4A121A] text-[#F8F4EC] font-medium no-underline"
                        >
                          Shop Collection
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Choreographed Motion System & Promo Reel Stage */}
                <div
                  onClick={() => setActiveAdFormat('film-16x9')}
                  className={`lg:col-span-5 paper-sheet-ruled rounded-[16px] p-6 sm:p-7 bg-[#EFE7DA]/60 space-y-6 transition-opacity duration-200 ${
                    activeAdFormat === 'film-16x9' ? 'ring-2 ring-[#4A121A] opacity-100' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-1.5">
                    <h3 className="font-display text-2xl text-[#1E1114]">
                      Animated Brand Elements &amp; Interaction Choreography
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4347]">
                      Every Mystica interaction follows physical paper and ribbon mechanics: fast response on release, zero `scale(0)` pops, and off-main-thread CSS transforms.
                    </p>
                  </div>

                  {/* Live Animated Emblem & Ribbon Unwrap Stage */}
                  <div className="rounded-[14px] bg-[#320A10] text-[#F8F4EC] p-6 border border-[#C8A96E]/40 space-y-5">
                    <div className="flex items-center justify-between text-[11px] font-mono-spec text-[#E5C992]">
                      <span>
                        {activeAdFormat === 'film-16x9'
                          ? '● SELECTED FORMAT · 16:9 PROMO BUMPER'
                          : 'PROMO BUMPER · 6.0S LOOP'}
                      </span>
                      <span>{isReelPlaying ? 'PLAYING' : 'PAUSED'}</span>
                    </div>

                    <div className="py-6 text-center space-y-4 relative">
                      <svg
                        viewBox="0 0 180 120"
                        className="w-44 h-28 mx-auto"
                        fill="none"
                        aria-label="Animated Mystica Star Seal and Ribbon"
                      >
                        <circle
                          cx="90"
                          cy="60"
                          r="44"
                          stroke="#C8A96E"
                          strokeWidth="1.2"
                          strokeDasharray="4 3"
                          className={isReelPlaying ? 'foil-twinkle' : ''}
                        />
                        <path
                          d="M90 18 L97 49 L128 60 L97 71 L90 102 L83 71 L52 60 L83 49 Z"
                          stroke="#E5C992"
                          strokeWidth="1.6"
                          fill="rgba(200,169,110,0.2)"
                          className={isReelPlaying ? 'foil-twinkle' : ''}
                        />
                        {/* Animated Ribbon Tails */}
                        <path
                          d="M20 60 C45 52, 65 68, 90 60 C115 52, 135 68, 160 60"
                          stroke="#C8A96E"
                          strokeWidth="1.8"
                          className={isReelPlaying ? 'ribbon-wave' : ''}
                        />
                        <circle cx="90" cy="60" r="3.5" fill="#FFF5D6" />
                      </svg>

                      <div className="space-y-1">
                        <p className="font-display text-2xl tracking-wide text-[#F8F4EC]">
                          MYSTICA · مِسْتِيكَا
                        </p>
                        <p className="text-xs text-[#E5C992] italic font-display">
                          Celebrating Life’s Meaningful Moments
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono-spec text-[#D8C8B8]">
                      <div className="p-2.5 rounded bg-[#1E080C] border border-[#C8A96E]/20">
                        <span className="text-[#E5C992] block">UI EASING TOKEN</span>
                        <span>cubic-bezier(0.23, 1, 0.32, 1)</span>
                      </div>
                      <div className="p-2.5 rounded bg-[#1E080C] border border-[#C8A96E]/20">
                        <span className="text-[#E5C992] block">PRESS FEEDBACK</span>
                        <span>scale(0.97) · 150ms ease-out</span>
                      </div>
                    </div>
                  </div>

                  {/* Motion Engineering Specifications Table */}
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-[10px] bg-[#F8F4EC] border border-[#4A121A]/15 flex items-center justify-between">
                      <div>
                        <strong className="text-[#1E1114] block">1. Foil Catchlight Specular Sweep</strong>
                        <span className="text-[#5C4347]">Directional gradient sheen synced to gallery light angle</span>
                      </div>
                      <span className="font-mono-spec text-[11px] text-[#4A121A]">GPU Composite</span>
                    </div>
                    <div className="p-3 rounded-[10px] bg-[#F8F4EC] border border-[#4A121A]/15 flex items-center justify-between">
                      <div>
                        <strong className="text-[#1E1114] block">2. Tactile Swatch &amp; Dieline Retargeting</strong>
                        <span className="text-[#5C4347]">Interruptible CSS transitions (180–240ms) with zero layout shift</span>
                      </div>
                      <span className="font-mono-spec text-[11px] text-[#4A121A]">180ms ease-out</span>
                    </div>
                    <div className="p-3 rounded-[10px] bg-[#F8F4EC] border border-[#4A121A]/15 flex items-center justify-between">
                      <div>
                        <strong className="text-[#1E1114] block">3. Reduced-Motion Accessibility</strong>
                        <span className="text-[#5C4347]">Preserves opacity comprehension while neutralizing spatial motion</span>
                      </div>
                      <span className="font-mono-spec text-[11px] text-[#4A121A]">WCAG AAA Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            SECTION 5: HOLD MEDIA AGENCY BRIEF FULFILLMENT & CAPABILITIES MATRIX
           ===================================================================== */}
        <section id="pitch-matrix" className="py-14 lg:py-20 bg-[#EFE7DA]/65">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#4A121A]/15 pb-6">
              <div className="space-y-2 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl text-[#1E1114] font-normal">
                  Hold Media Agency Brief — Deliverable &amp; Capability Verification
                </h2>
                <p className="text-sm sm:text-base text-[#42161D]">
                  Prepared by <strong>Dayle Angelo Peña</strong> to demonstrate how every requirement in the Mystica brief is answered with production-ready craft—including full-stack website development.
                </p>
              </div>

              <div className="px-4 py-2.5 rounded-[12px] bg-[#4A121A] text-[#F8F4EC] text-xs flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-[#E5C992]" />
                <span>
                  <strong>Website Development Specification:</strong> Yes — Full Production React, TypeScript, Tailwind &amp; Shopify/Headless E-Commerce Development Included.
                </span>
              </div>
            </div>

            {/* Structured Brief-to-Proof Ledger (Responsive Stacked Rows on Mobile, Full Table on md+) */}
            <div className="paper-sheet-ruled rounded-[16px] overflow-hidden bg-[#F8F4EC]">
              <div className="hidden md:block">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#320A10] text-[#F8F4EC] text-xs font-mono-spec">
                      <th className="py-3.5 px-5">HOLD MEDIA BRIEF REQUIREMENT</th>
                      <th className="py-3.5 px-5">MYSTICA EXECUTION ON THIS PAGE</th>
                      <th className="py-3.5 px-5">PRODUCTION FILES &amp; STACK</th>
                      <th className="py-3.5 px-5 text-right">INSPECT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#4A121A]/15">
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#1E1114]">
                        Brand Identity (Logos, Typography, Colours, Signature Icon)
                      </td>
                      <td className="py-4 px-5 text-[#42161D]">
                        8-pointed Celestial Star-Seal &amp; Silk Ribbon cypher, Deep Burgundy (`#4A121A`) + Warm Ivory (`#F8F4EC`) + Champagne Foil (`#C8A96E`) palette.
                      </td>
                      <td className="py-4 px-5 font-mono-spec text-xs text-[#5C4347]">
                        SVG · AI · Pantone / CMYK / HEX Tokens
                      </td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href="#brand-identity"
                          onClick={() => navigateToSection('brand-identity')}
                          className="text-xs font-medium text-[#4A121A] underline"
                        >
                          View Identity
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#1E1114]">
                        Arabic &amp; English Typography Advantage
                      </td>
                      <td className="py-4 px-5 text-[#42161D]">
                        Optical-size <strong>Bodoni Moda</strong> paired with classical Cairo <strong>Amiri</strong> Naskh &amp; <strong>Readex Pro</strong> on a shared baseline grid with live RTL/LTR switching.
                      </td>
                      <td className="py-4 px-5 font-mono-spec text-xs text-[#5C4347]">
                        EN + العربية Live Bilingual System
                      </td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href="#brand-identity"
                          onClick={() => navigateToSection('brand-identity')}
                          className="text-xs font-medium text-[#4A121A] underline"
                        >
                          View Type Sheet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#1E1114]">
                        Packaging, Stationery &amp; Editable Print Artwork
                      </td>
                      <td className="py-4 px-5 text-[#42161D]">
                        Solander keepsake box &amp; correspondence flat-lays paired with an interactive CAD pre-press dieline inspector (`3mm` bleed, die-cut, score, foil &amp; deboss plates).
                      </td>
                      <td className="py-4 px-5 font-mono-spec text-xs text-[#5C4347]">
                        ISO 12647-2 PDF/X-4 · AI Dielines · Kurz Foil
                      </td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href="#packaging-dielines"
                          onClick={() => navigateToSection('packaging-dielines')}
                          className="text-xs font-medium text-[#4A121A] underline"
                        >
                          View Dielines
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#1E1114]">
                        Elegant, Intuitive Website + Full Website Development
                      </td>
                      <td className="py-4 px-5 text-[#42161D]">
                        Interactive Bespoke Keepsake Customizer with real-time stock, silk ribbon, foil finish, and bilingual monogram preview across desktop and mobile.
                      </td>
                      <td className="py-4 px-5 font-mono-spec text-xs text-[#5C4347]">
                        React 19 · TypeScript · Tailwind CSS · Vite
                      </td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href="#atelier-customizer"
                          onClick={() => navigateToSection('atelier-customizer')}
                          className="text-xs font-medium text-[#4A121A] underline"
                        >
                          Try Customizer
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#1E1114]">
                        Social Media Designs, Digital Ads &amp; Animated Content
                      </td>
                      <td className="py-4 px-5 text-[#42161D]">
                        9:16 Reels/TikTok story ads, 4:5 bilingual GCC carousel creatives, interactive foil light-catch physics, and choreographed motion tokens.
                      </td>
                      <td className="py-4 px-5 font-mono-spec text-xs text-[#5C4347]">
                        WAAPI / CSS GPU Motion · 9:16 &amp; 4:5 Suites
                      </td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href="#campaigns-motion"
                          onClick={() => navigateToSection('campaigns-motion')}
                          className="text-xs font-medium text-[#4A121A] underline"
                        >
                          View Ads &amp; Motion
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Ledger View */}
              <div className="md:hidden divide-y divide-[#4A121A]/15 text-xs">
                {[
                  {
                    req: 'Brand Identity (Logos, Typography, Colours, Signature Icon)',
                    exec: '8-pointed Celestial Star-Seal & Silk Ribbon cypher, Deep Burgundy (#4A121A) + Warm Ivory (#F8F4EC) + Champagne Foil (#C8A96E).',
                    stack: 'SVG · AI · Pantone / CMYK / HEX',
                    targetId: 'brand-identity',
                  },
                  {
                    req: 'Arabic & English Typography Advantage',
                    exec: 'Bodoni Moda paired with Cairo Amiri Naskh & Readex Pro on a shared baseline grid with live RTL/LTR switching.',
                    stack: 'EN + العربية Live System',
                    targetId: 'brand-identity',
                  },
                  {
                    req: 'Packaging, Stationery & Editable Print Artwork',
                    exec: 'Solander keepsake box & correspondence flat-lays + interactive CAD pre-press dieline inspector (3mm bleed, die-cut, score, foil).',
                    stack: 'ISO 12647-2 PDF/X-4 · AI Dielines',
                    targetId: 'packaging-dielines',
                  },
                  {
                    req: 'Elegant Website + Full Website Development',
                    exec: 'Interactive Bespoke Keepsake Customizer with real-time stock, silk ribbon, foil finish, and bilingual monogram preview.',
                    stack: 'React 19 · TypeScript · Tailwind CSS',
                    targetId: 'atelier-customizer',
                  },
                  {
                    req: 'Social Media Designs, Digital Ads & Motion',
                    exec: '9:16 Reels/TikTok story ads, 4:5 bilingual GCC carousel creatives, foil light-catch physics, and custom easing choreography.',
                    stack: 'CSS GPU Motion · 9:16 & 4:5 Suites',
                    targetId: 'campaigns-motion',
                  },
                ].map((row) => (
                  <div key={row.req} className="p-4 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <strong className="text-[#1E1114] text-sm">{row.req}</strong>
                      <a
                        href={`#${row.targetId}`}
                        onClick={() => navigateToSection(row.targetId)}
                        className="text-[#4A121A] underline shrink-0 font-medium"
                      >
                        Inspect
                      </a>
                    </div>
                    <p className="text-[#42161D]">{row.exec}</p>
                    <p className="font-mono-spec text-[11px] text-[#5C4347]">{row.stack}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FOOTER: ANCHORED CLOSE
         ===================================================================== */}
      <footer className="burgundy-deep-surface border-t border-[#C8A96E]/30">
        <div className="silk-ribbon-band h-2.5 w-full" aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-[#F8F4EC]">MYSTICA</span>
              <span className="text-[#C8A96E]">·</span>
              <span className="font-arabic text-2xl text-[#E5C992]" dir="rtl">
                مِسْتِيكَا
              </span>
            </div>
            <p className="text-xs text-[#D8C8B8] max-w-md">
              Stationery &amp; Keepsake Brand Identity, Packaging Pre-Press Dielines, Motion Design &amp; Full-Stack Website Pitch crafted for <strong>Hold Media Agency</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#D8C8B8]">
            <div className="px-4 py-2.5 rounded-[10px] bg-[#1E080C] border border-[#C8A96E]/30">
              <span className="text-[#E5C992] font-medium block">Candidate &amp; Developer</span>
              <span>Dayle Angelo Peña — Multidisciplinary Designer &amp; Web Developer</span>
            </div>
            <a
              href="#top"
              className="btn-tactile px-4 py-2.5 rounded-full bg-[#C8A96E] text-[#1E1114] font-medium no-underline"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

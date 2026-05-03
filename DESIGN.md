---
name: Kian Sentinel
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45464e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#76767f'
  outline-variant: '#c6c6cf'
  surface-tint: '#525d81'
  primary: '#000002'
  on-primary: '#ffffff'
  primary-container: '#0e1a3a'
  on-primary-container: '#7883a9'
  inverse-primary: '#bac5ee'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#bac5ee'
  on-primary-fixed: '#0e1a3a'
  on-primary-fixed-variant: '#3b4668'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c7c7c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#464744'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: newsreader
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: newsreader
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 96px
---

## Brand & Style

The brand personality is anchored in the concepts of **security, reliability, and precision**. It targets homeowners and business owners who value expert craftsmanship over budget shortcuts. The design system must evoke a sense of "quiet confidence"—it should feel established and authoritative, yet accessible through modern clarity.

The visual style follows a **Corporate / Modern** aesthetic with a strong emphasis on **Minimalism**. We leverage heavy whitespace to give the content room to breathe, suggesting a methodical and organized approach to service. High-contrast pairings of deep navy and vibrant gold create a premium feel, while the interplay of traditional serifs and functional sans-serifs balances heritage with contemporary efficiency.

## Colors

The palette is designed to project stability and premium service. 

- **Primary (Navy):** Used for headers, hero backgrounds, and primary text to establish an authoritative foundation.
- **Secondary (Gold):** Reserved strictly for high-priority calls to action, accents, and critical indicators. It provides a warm contrast to the cooler primary tones.
- **Tertiary (Cream):** A soft off-white used for section backgrounds to provide subtle separation from the pure white base without introducing harsh gray tones.
- **Neutral (White):** The primary canvas color, ensuring the interface remains clean and airy.

Functional colors for success, error, and warning should be muted to maintain the professional tone, using low-saturation variants of green and red.

## Typography

This design system utilizes a sophisticated typographic pairing to signal both tradition and modernity. 

**Headlines** use a serif font to communicate trust, legacy, and the "master locksmith" persona. These should be set with tighter line-heights in larger sizes to create a strong visual impact.

**Body text** and **labels** utilize a clean, systematic sans-serif. This ensures maximum readability across technical specifications and service descriptions. Labels and small "over-lines" should be set in uppercase with slight letter spacing to act as clear navigational anchors.

## Layout & Spacing

The layout employs a **fixed grid** model for desktop, centering content within a generous container to maintain focus. A 12-column system provides flexibility for service grids and multi-column feature lists.

Spacing follows an 8px base unit. To achieve the requested "clean" look, vertical rhythm is emphasized through large section gaps (96px+), preventing the UI from feeling cluttered. Elements within cards or components should use tighter spacing (16px-24px) to maintain grouping and proximity.

## Elevation & Depth

To maintain a professional and "flat-plus" aesthetic, this design system avoids heavy, muddy shadows. 

- **Low-contrast outlines:** Cards and containers use a subtle 1px border (#E5E7EB) rather than shadows to define boundaries.
- **Tonal layers:** Elevation is primarily communicated through color shifts. For example, moving an element from the white background to a cream (#F9F8F3) container signals a change in context.
- **Subtle Surface Lift:** For interactive elements like cards, a very soft, highly diffused ambient shadow may be used on hover to indicate interactivity (e.g., `0 10px 30px rgba(14, 26, 58, 0.04)`).

## Shapes

The shape language is **Soft (Level 1)**. 

Precision is key in locksmithing, so overly rounded "bubbly" corners are avoided. Instead, a refined 4px (0.25rem) radius is applied to standard buttons and form fields. For larger containers like cards or content blocks, a 8px (0.5rem) radius provides a modern touch while maintaining a structured, architectural feel.

## Components

### Buttons
- **Primary:** Gold background (#D4AF37) with Navy text (#0E1A3A). Bold weight, uppercase.
- **Secondary:** Navy background (#0E1A3A) with White text.
- **Outline:** Navy 1px border with Navy text. Used for less urgent actions like "Learn More."

### Navigation Bar
- A sticky top bar with a white background. 
- Use the Navy primary color for links.
- Include a prominent Gold "Call" button as the primary conversion point.

### Form Fields
- Minimalist design with 1px light gray borders. 
- Labels should be small, uppercase, and positioned above the field. 
- Focus state uses a 1px Navy border to signal active attention.

### Cards
- White background with a 1px #E5E7EB border.
- Generous internal padding (32px).
- Headlines within cards should use the Serif font at a medium scale.

### Accordions (FAQ)
- Clean, text-only headers with a simple "+" or "-" icon in Gold.
- Subtle horizontal dividers between items to maintain the minimalist structure.
import type { Prompt } from '../types'

export const visualStyle: Prompt[] = [
  {
    id: 'visual-style.minimal-swiss',
    title: 'Minimal Swiss',
    prompt:
      'Design in a minimal Swiss / International style: strict alignment to an invisible grid, generous empty space, flat surfaces with no shadows, and hairline rules as the only dividers. Let hierarchy come from size and placement rather than decoration.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.flat',
    title: 'Flat design',
    prompt:
      'Use pure flat design: solid fills, no gradients, no drop shadows, no bevels or textures. Distinguish interactive elements through shape and fill contrast alone, with simple geometric icons and crisp edges.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.material-like',
    title: 'Material-like surfaces',
    prompt:
      'Follow a Material-like visual language: layered surfaces with soft ambient shadows that encode elevation, 8dp-style rounded corners, filled primary buttons and tonal secondary buttons, and floating action buttons for the main action. Keep elevation levels to three or four and use them consistently.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.glassmorphism',
    title: 'Glassmorphism',
    prompt:
      'Apply glassmorphism: semi-transparent panels with a backdrop blur of 12-24px, a 1px translucent light border, and a very soft large-radius shadow so panels appear to float over a layered background. Reserve the glass treatment for a few key surfaces such as cards, modals, and the nav bar; keep text on solid or well-blurred areas for legibility.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.neumorphism',
    title: 'Neumorphism',
    prompt:
      'Use a neumorphic soft-UI look: elements are the same tone as the background and read as extruded or pressed through paired shadows, one light on the top-left and one dark on the bottom-right. Use large radii, no hard borders, and switch to an inset shadow pair for pressed and active states.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.neo-brutalism',
    title: 'Neo-brutalism',
    prompt:
      'Design in a neo-brutalist style: thick 2-3px solid high-contrast borders on every component, hard offset shadows with zero blur (for example 4px 4px 0), zero or near-zero corner radius, and oversized chunky buttons. Embrace deliberate rawness, high-contrast blocks, and slightly off-grid placement.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.skeuomorphic',
    title: 'Skeuomorphic realism',
    prompt:
      'Use skeuomorphic detailing: controls mimic physical objects with subtle gradients, inner highlights, stitched or brushed textures, realistic shadows, and toggles that look like actual switches. Keep the metaphor consistent per component and make affordances obvious through material cues.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.retro-futurism',
    title: 'Retro-futurism',
    prompt:
      'Design in a retro-futurist style as the 1960s-80s imagined the future: chrome-like reflective surfaces, rounded capsule and pill shapes, perspective grid horizons, starburst and orbit motifs, and glowing outlines around key elements. Combine optimistic space-age curves with a slight scanline or grain texture.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.vaporwave',
    title: 'Vaporwave',
    prompt:
      'Apply a vaporwave aesthetic: receding perspective grids, chrome or marble textures, classical statue and palm silhouettes as decorative imagery, glitch and VHS tracking artifacts, and a subtle scanline overlay. Use windowed panels with visible title bars reminiscent of 1990s operating systems.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.y2k',
    title: 'Y2K',
    prompt:
      'Design in a Y2K style: glossy bubble buttons with strong specular highlights, chrome and liquid-metal shapes, translucent plastic-like panels, star and sparkle decorations, and pill-shaped nav elements. Allow slightly overlapping components and rounded blob shapes for a playful early-2000s tech feel.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.pixel-8bit',
    title: 'Pixel / 8-bit',
    prompt:
      'Use a pixel-art 8-bit style: square corners only, stepped pixel borders, blocky pixel icons, dithered fills instead of smooth gradients, and shadows rendered as hard one-pixel offsets. Disable anti-aliasing where possible and align every element to a coarse pixel grid.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.editorial-magazine',
    title: 'Editorial magazine',
    prompt:
      'Design like a printed magazine spread: strong headline-led hierarchy, multi-column text areas, pull quotes, oversized drop caps, full-bleed imagery, and thin rules separating sections. Use asymmetric composition and deliberate white space rather than uniform cards.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.bento-grid',
    title: 'Bento grid tiles',
    prompt:
      'Present content as a bento box: a mosaic of rounded tiles in mixed sizes (1x1, 2x1, 2x2) with uniform gutters, uniform corner radius, and each tile a self-contained unit with its own subtle surface. Make every tile visually complete on its own and avoid text or shapes that cross tile boundaries.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.dashboard-dense',
    title: 'Dense dashboard',
    prompt:
      'Design a dense analytics dashboard look: compact panels with thin 1px borders, small headers, tight tabular data, sparkline-style charts, and minimal padding. Prefer many small consistent panels over a few large ones and keep decorative elements near zero so data dominates.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.terminal-hacker',
    title: 'Terminal / hacker',
    prompt:
      'Design like a command-line terminal: text is the whole design, with no card chrome, zero corner radius, box-drawing or ASCII borders, a blinking block cursor, and prompt-style prefixes such as > or $ on interactive lines. Use a subtle scanline or CRT vignette and render states as text markers rather than icons.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.hand-drawn-sketchy',
    title: 'Hand-drawn sketchy',
    prompt:
      'Give the design a hand-drawn sketch look: slightly wobbly irregular borders, imperfect rounded shapes, hatching or scribble fills, doodle-style icons, and marker-like underlines. Keep line weights consistent and avoid perfectly straight or perfectly aligned edges.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.paper-print',
    title: 'Paper and print',
    prompt:
      'Make the design feel like printed paper: subtle paper grain texture, layered sheets with soft realistic shadows, torn or folded edges as section breaks, stamp and label motifs, and ink-like borders. Cards should read as physical index cards or pages rather than digital panels.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.corporate-clean',
    title: 'Corporate clean',
    prompt:
      'Use a clean corporate SaaS style: plain light cards with 1px subtle borders, 8px corner radius, restrained shadows, a left sidebar plus top bar shell, and standard form controls. Stay conservative and consistent; avoid decorative shapes, illustrations, or unusual layouts.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.scandinavian',
    title: 'Scandinavian',
    prompt:
      'Design in a Scandinavian style: airy layouts, natural material textures such as wood grain or linen in imagery, soft rounded but not bubbly corners, very light shadows, and few but carefully placed elements. Favor calm functional simplicity over visual density or ornament.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.industrial',
    title: 'Industrial utilitarian',
    prompt:
      'Design in an industrial style: exposed structure with visible grid lines and measurement-tick decorations, metal-plate or concrete textures, riveted or bolted corner details, stencil-style labels, and hard rectangular components. Show the mechanics of the layout instead of hiding them.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.luxury',
    title: 'Luxury refined',
    prompt:
      'Apply a luxury visual style: abundant white space, very thin hairline borders and dividers, small elegant details, subtle metallic-foil accents on a few key elements, and large restrained imagery. Remove anything that looks default or bulky; every element should feel intentional and understated.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.playful-rounded',
    title: 'Playful rounded',
    prompt:
      'Use a playful rounded style: large corner radii (16-24px), pill-shaped buttons, chunky friendly icons, blob-shaped decorative backgrounds, and soft puffy shadows. Slightly oversize interactive elements and let shapes feel bouncy and approachable.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.sharp-geometric',
    title: 'Sharp geometric',
    prompt:
      'Design with sharp geometry: zero corner radius everywhere, crisp 1px borders, diagonal cuts and angled dividers, triangles and rectangles as decorative motifs, and perfectly aligned edges. Avoid any softness such as blur, rounding, or diffuse shadows.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.monoline-outline',
    title: 'Monoline outline',
    prompt:
      'Use a monoline outline style: every icon, border, and illustration drawn with the same thin 1.5px stroke, no fills inside shapes, and outlined rather than filled buttons for secondary actions. Keep stroke weight identical across the whole design for a light, technical consistency.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.heavy-outline',
    title: 'Heavy outline',
    prompt:
      'Use heavy outlines as the defining trait: 3-4px solid borders on cards, inputs, and buttons, bold thick-stroke icons, and thick underlines on links. Skip shadows entirely and let the weight of the lines create structure and hierarchy.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.card-based',
    title: 'Card-based',
    prompt:
      'Structure the design as discrete cards: each unit of content sits in its own contained surface with consistent padding, corner radius, and a subtle border or shadow, separated by even gutters. Keep card anatomy consistent (header, body, footer) and never mix bordered and borderless cards.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.borderless',
    title: 'Borderless open',
    prompt:
      'Design without borders or card containers: separate content through spacing and subtle background tone shifts only, with no dividing lines, no outlined boxes, and no drop shadows. Inputs are indicated by a single bottom line or a soft filled field.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.gradient-mesh',
    title: 'Gradient mesh backgrounds',
    prompt:
      'Use gradient mesh as a background surface treatment: several large soft radial blobs blended together behind the content, with foreground panels kept solid or lightly translucent so text stays readable. Restrict the mesh to hero and page backgrounds, not to buttons or small components.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.claymorphism',
    title: 'Claymorphism',
    prompt:
      'Apply claymorphism: puffy inflated 3D shapes with very large corner radii, an inner shadow that gives a rounded clay-like edge, and a soft outer shadow so elements look like moulded plasticine. Use friendly 3D illustrations and keep surfaces matte rather than glossy.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.aurora',
    title: 'Aurora glow',
    prompt:
      'Use an aurora treatment: large heavily blurred luminous bands drifting slowly behind the content like northern lights, with a dark or very light solid base and simple flat foreground components. Keep the glow behind hero sections and empty areas only, never behind body text.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.cyberpunk',
    title: 'Cyberpunk HUD',
    prompt:
      'Design in a cyberpunk HUD style: angular panels with clipped or chamfered corners, thin glowing outlines, bracket-shaped corner markers, scanline and noise overlays, and technical readouts such as coordinates or status codes as decoration. Layer translucent panels over a dark textured background.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.bauhaus',
    title: 'Bauhaus',
    prompt:
      'Design in a Bauhaus style: composition built from primary geometric forms (circles, squares, triangles), asymmetric but balanced layouts, thick straight rules, and flat solid fills with no shadows. Treat every element as a functional part of the composition; no ornament.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.art-deco',
    title: 'Art Deco interface',
    prompt:
      'Apply an Art Deco style: symmetrical layouts, stepped and fan-shaped motifs, sunburst patterns, thin double-line borders with corner ornaments, and metallic-foil textures on framing elements. Use tall vertical proportions and decorative frames around key content.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.memphis',
    title: 'Memphis',
    prompt:
      'Use a Memphis design style: scattered geometric confetti shapes, squiggles and zigzags, polka-dot and terrazzo patterns as textures, clashing pattern blocks, and playful hard-edged shapes with thick borders. Embrace visual noise as decoration while keeping content areas clean.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.brutalist-raw-html',
    title: 'Brutalist raw HTML',
    prompt:
      'Use a brutalist raw-web style: default browser-like controls, visible underlined links, plain unstyled lists and tables, dense text blocks, no rounded corners, no shadows, and minimal or no imagery. Structure should be exposed and unpolished, like an early web document.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.ios-like',
    title: 'iOS-like native',
    prompt:
      'Follow an iOS-like visual language: grouped inset lists with continuous rounded corners, translucent blurred bars, thin separators inset from the left edge, pill and capsule controls, and system-style sheet modals with a grab handle. Keep chrome light and let content sit on a plain grouped background.',
    category: 'visual-style',
  },
  {
    id: 'visual-style.single-consistent-style',
    title: 'One style, applied everywhere',
    prompt:
      'Commit to one visual style and apply it to every component without exception: identical corner radius, border treatment, shadow recipe, and icon style across buttons, inputs, cards, and modals. Do not mix styles (for example glass cards next to flat cards) anywhere in the interface.',
    category: 'visual-style',
  },
]

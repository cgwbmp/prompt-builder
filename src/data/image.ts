import type { Prompt } from '../types'

/**
 * Image-model modifiers. Each `prompt` is a comma-separated fragment string
 * meant to be appended to a subject description for Midjourney, DALL-E,
 * Stable Diffusion, or Flux. Entries prefixed with `Negative prompt:` go into
 * the negative field (Stable Diffusion) or a `--no` parameter (Midjourney).
 */
export const image: Prompt[] = [
  // Style and medium
  {
    id: 'image.photorealistic',
    title: 'Photorealistic photo',
    prompt: 'photorealistic, raw photo, dslr photograph, natural skin texture, realistic lighting, subtle film grain',
    category: 'image',
  },
  {
    id: 'image.flat-vector',
    title: 'Flat vector illustration',
    prompt: 'flat vector illustration, clean geometric shapes, solid fills, no gradients, limited color palette, crisp edges',
    category: 'image',
  },
  {
    id: 'image.watercolor',
    title: 'Watercolor painting',
    prompt: 'watercolor painting, wet-on-wet washes, soft bleeding edges, visible paper texture, loose expressive brushwork',
    category: 'image',
  },
  {
    id: 'image.oil-painting',
    title: 'Classical oil painting',
    prompt: 'oil painting on canvas, thick impasto brushstrokes, rich glazing, classical chiaroscuro, visible canvas texture',
    category: 'image',
  },
  {
    id: 'image.pixel-art',
    title: 'Retro pixel art',
    prompt: 'pixel art, 16-bit, limited palette, crisp pixels, no anti-aliasing, retro video game sprite',
    category: 'image',
  },
  {
    id: 'image.isometric-3d',
    title: 'Isometric 3D render',
    prompt: 'isometric 3d render, clean geometry, soft ambient occlusion, pastel materials, miniature diorama, octane render',
    category: 'image',
  },
  {
    id: 'image.low-poly',
    title: 'Low poly 3D',
    prompt: 'low poly 3d, faceted geometry, flat shading, simple color blocks, stylized game asset',
    category: 'image',
  },
  {
    id: 'image.anime',
    title: 'Anime style',
    prompt: 'anime style, cel shading, clean line art, large expressive eyes, vibrant flat colors, 90s anime aesthetic',
    category: 'image',
  },
  {
    id: 'image.comic-book',
    title: 'Comic book style',
    prompt: 'comic book style, bold ink outlines, halftone dots, dynamic pose, flat saturated colors, graphic novel panel',
    category: 'image',
  },
  {
    id: 'image.line-art',
    title: 'Clean line art',
    prompt: 'black and white line art, clean ink strokes, single line weight, white background, no shading, no color',
    category: 'image',
  },
  {
    id: 'image.pencil-sketch',
    title: 'Pencil sketch',
    prompt: 'graphite pencil sketch, crosshatching, rough construction lines, smudged shading, sketchbook paper texture',
    category: 'image',
  },
  {
    id: 'image.cyberpunk',
    title: 'Cyberpunk city',
    prompt: 'cyberpunk, rain-slicked streets, holographic signage, neon pink and cyan, dystopian night megacity, futuristic tech',
    category: 'image',
  },
  {
    id: 'image.vaporwave',
    title: 'Vaporwave aesthetic',
    prompt: 'vaporwave aesthetic, pastel pink and teal, retro 80s grid floor, chrome shapes, glitch artifacts, marble busts and palm trees',
    category: 'image',
  },
  {
    id: 'image.minimalist',
    title: 'Minimalist',
    prompt: 'minimalist, single subject, clean lines, generous negative space, two-color palette, no clutter',
    category: 'image',
  },
  {
    id: 'image.bauhaus',
    title: 'Bauhaus poster',
    prompt: 'bauhaus poster design, primary colors, geometric circles triangles and squares, bold flat shapes, asymmetric grid layout',
    category: 'image',
  },
  {
    id: 'image.art-deco',
    title: 'Art deco',
    prompt: 'art deco, gold and black, symmetrical geometric ornament, sunburst motifs, 1920s glamour, streamlined elegance',
    category: 'image',
  },

  // Lighting
  {
    id: 'image.cinematic-lighting',
    title: 'Cinematic lighting',
    prompt: 'cinematic lighting, dramatic shadows, high dynamic range, moody atmosphere, film still, anamorphic lens flare',
    category: 'image',
  },
  {
    id: 'image.golden-hour',
    title: 'Golden hour',
    prompt: 'golden hour, warm low sun, long soft shadows, backlit glow, gentle lens flare, amber tones',
    category: 'image',
  },
  {
    id: 'image.studio-softbox',
    title: 'Studio softbox lighting',
    prompt: 'studio lighting, large softbox, even diffused light, high key, clean seamless backdrop, no harsh shadows',
    category: 'image',
  },
  {
    id: 'image.volumetric-light',
    title: 'Volumetric light rays',
    prompt: 'volumetric lighting, god rays, light shafts through fog, dust particles in the air, atmospheric haze',
    category: 'image',
  },
  {
    id: 'image.neon-glow',
    title: 'Neon glow',
    prompt: 'neon glow, vivid magenta and electric blue light, wet reflective surfaces, bloom effect, night scene',
    category: 'image',
  },
  {
    id: 'image.low-key',
    title: 'Low key with rim light',
    prompt: 'low key lighting, single hard light source, rim light, glowing edge outline, deep shadows, chiaroscuro, black background',
    category: 'image',
  },

  // Camera and lens
  {
    id: 'image.35mm-film',
    title: '35mm film look',
    prompt: 'shot on 35mm film, kodak portra 400, natural perspective, subtle grain, candid documentary feel',
    category: 'image',
  },
  {
    id: 'image.85mm-portrait',
    title: '85mm portrait',
    prompt: '85mm portrait lens, f/1.8, shallow depth of field, creamy bokeh, sharp focus on the eyes, head and shoulders framing',
    category: 'image',
  },
  {
    id: 'image.macro',
    title: 'Macro close-up',
    prompt: 'macro photography, extreme close-up, 1:1 magnification, fine surface detail, razor-thin focus plane, soft blurred background',
    category: 'image',
  },
  {
    id: 'image.wide-angle',
    title: 'Wide angle',
    prompt: 'wide angle 16mm lens, expansive perspective, dramatic foreground, slight barrel distortion, environmental shot',
    category: 'image',
  },
  {
    id: 'image.drone-top-down',
    title: 'Drone top-down',
    prompt: "drone shot, top-down aerial view, bird's eye perspective, high altitude, flat lay of the landscape",
    category: 'image',
  },
  {
    id: 'image.tilt-shift',
    title: 'Tilt-shift miniature',
    prompt: 'tilt-shift photography, miniature effect, selective focus band, toy-like scene, elevated viewpoint',
    category: 'image',
  },
  {
    id: 'image.long-exposure',
    title: 'Long exposure',
    prompt: 'long exposure, light trails, silky smooth water, motion-blurred clouds, tripod shot, night city',
    category: 'image',
  },

  // Composition
  {
    id: 'image.rule-of-thirds',
    title: 'Rule of thirds',
    prompt: 'rule of thirds composition, subject off-center, leading lines, balanced negative space',
    category: 'image',
  },
  {
    id: 'image.centered-symmetrical',
    title: 'Centered and symmetrical',
    prompt: 'centered composition, perfect symmetry, frontal view, mirrored balance, formal and still',
    category: 'image',
  },
  {
    id: 'image.full-body',
    title: 'Full body shot',
    prompt: 'full body shot, head to toe visible, standing pose, eye-level camera, environmental context',
    category: 'image',
  },

  // Mood and color
  {
    id: 'image.pastel-palette',
    title: 'Soft pastel palette',
    prompt: 'soft pastel palette, baby pink mint and lavender, dreamy, gentle gradients, low saturation',
    category: 'image',
  },
  {
    id: 'image.monochrome',
    title: 'Black and white',
    prompt: 'black and white, monochrome, high contrast grayscale, deep blacks, fine tonal range',
    category: 'image',
  },
  {
    id: 'image.muted-earth-tones',
    title: 'Muted earth tones',
    prompt: 'muted earth tones, terracotta olive sand and ochre, desaturated, warm and organic',
    category: 'image',
  },
  {
    id: 'image.duotone',
    title: 'Duotone poster',
    prompt: 'duotone, two-color gradient map, deep navy and hot coral, bold graphic poster look',
    category: 'image',
  },

  // Quality tags
  {
    id: 'image.quality-tags',
    title: 'Quality boost tags',
    prompt: 'masterpiece, best quality, highly detailed, sharp focus, intricate details, 8k uhd',
    category: 'image',
  },

  // Negative prompts
  {
    id: 'image.negative-artifacts-text',
    title: 'No artifacts or text',
    prompt:
      'Negative prompt: blurry, out of focus, low quality, lowres, jpeg artifacts, noise, text, watermark, signature, logo, cropped, out of frame',
    category: 'image',
  },
  {
    id: 'image.negative-anatomy',
    title: 'No anatomy errors',
    prompt:
      'Negative prompt: extra fingers, missing fingers, fused fingers, extra limbs, bad anatomy, deformed hands, malformed face, cross-eyed, duplicate',
    category: 'image',
  },
  {
    id: 'image.negative-not-photo',
    title: 'No illustration look',
    prompt: 'Negative prompt: cartoon, anime, 3d render, cgi, painting, illustration, drawing, sketch',
    category: 'image',
  },
]

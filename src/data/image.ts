import type { Prompt } from '../types'

export const image: Prompt[] = [
  {
    id: 'image.cinematic',
    title: 'Cinematic lighting',
    prompt: 'cinematic lighting, dramatic shadows, volumetric light, shallow depth of field, anamorphic lens',
    category: 'image',
  },
  {
    id: 'image.photoreal',
    title: 'Photorealistic',
    prompt: 'photorealistic, ultra-detailed, 8k, natural skin texture, realistic materials, shot on 35mm film',
    category: 'image',
  },
  {
    id: 'image.flat-illustration',
    title: 'Flat vector illustration',
    prompt: 'flat vector illustration, clean shapes, limited color palette, no gradients, no outlines, minimal detail',
    category: 'image',
  },
  {
    id: 'image.neon-space',
    title: 'Neon space aesthetic',
    prompt: 'neon space aesthetic, deep navy background, glowing cyan and magenta accents, stars, subtle nebula, retro-futuristic',
    category: 'image',
  },
  {
    id: 'image.isometric',
    title: 'Isometric 3D',
    prompt: 'isometric 3D render, soft studio lighting, pastel colors, clay material, centered composition, white background',
    category: 'image',
  },
]

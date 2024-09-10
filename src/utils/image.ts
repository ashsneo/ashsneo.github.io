import type { ImageMetadata } from 'astro';

export const defaultCardHeadImg = function() {
  const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/image/common/card-placeholder-*.png");
  if (!images) throw new Error('No image found.');
  const imageFuncs = Object.values(images)
  return imageFuncs[Math.floor(Math.random() * imageFuncs.length)]();
}
/**
 * Motion tokens mirrored from globals.css for JS-driven animations.
 * Keep durations in sync with --dur-* CSS variables.
 */

export const duration = {
  instant: 0.08,
  fast: 0.15,
  normal: 0.22,
  slow: 0.36,
  hero: 0.72,
  cinematic: 1.2,
} as const;

export const easing = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  emphasis: [0.32, 0.72, 0, 1],
} as const;

export const stagger = {
  default: 0.06,
  loose: 0.1,
} as const;

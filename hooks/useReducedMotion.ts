'use client';

import { useReducedMotion as useReducedMotionMotion } from 'motion/react';

const useReducedMotion = (): boolean => useReducedMotionMotion() ?? false;

export { useReducedMotion };

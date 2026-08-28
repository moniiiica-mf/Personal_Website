import type { Variants } from "framer-motion";

/** Shared, restrained motion primitives. Every consumer respects
 * prefers-reduced-motion via framer-motion's `useReducedMotion` hook —
 * components should switch these to instant/no-op variants when it's set. */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const viewportOnce = { once: true, margin: "-80px 0px" };

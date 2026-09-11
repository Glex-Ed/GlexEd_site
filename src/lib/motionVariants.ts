import type { Variants, Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const ctaHover = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 380, damping: 22 },
};

export const cardHover = {
  whileHover: { y: -4 },
  transition: { type: "spring" as const, stiffness: 320, damping: 24 },
};

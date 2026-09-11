import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"div">;

/**
 * Wrapper that adds a subtle lift + tap feedback to any CTA (Link/button).
 * Use it around the actual interactive element so the hit-area stays correct.
 */
export const MotionButton = forwardRef<HTMLDivElement, Props>(function MotionButton(
  { children, ...rest },
  ref,
) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.div ref={ref} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

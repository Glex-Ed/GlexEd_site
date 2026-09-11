import { motion, useReducedMotion } from "framer-motion";

type Size = "sm" | "md";
type Position = "right" | "left";

interface SectionGraphicProps {
  src: string;
  alt: string;
  position?: Position;
  size?: Size;
  /** Hide on mobile when the section already feels dense. */
  hideOnMobile?: boolean;
  /** LCP-eligible piece (home only). */
  eager?: boolean;
  className?: string;
}

const sizeClass: Record<Size, string> = {
  sm: "w-[clamp(120px,18vw,200px)]",
  md: "w-[clamp(160px,24vw,280px)]",
};

/**
 * Asymmetric accent graphic. Sits as a subtle visual mark,
 * never competing with the section copy.
 */
export function SectionGraphic({
  src,
  alt,
  position = "right",
  size = "md",
  hideOnMobile = false,
  eager = false,
  className = "",
}: SectionGraphicProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.img
      src={src}
      alt={alt}
      width={1024}
      height={1024}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      aria-hidden="true"
      className={[
        sizeClass[size],
        "h-auto select-none pointer-events-none",
        "drop-shadow-[0_18px_40px_rgba(124,58,237,0.18)]",
        position === "right" ? "ml-auto" : "mr-auto",
        hideOnMobile ? "hidden sm:block" : "",
        className,
      ].join(" ")}
      initial={reduceMotion ? false : { y: 0 }}
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}

export default SectionGraphic;

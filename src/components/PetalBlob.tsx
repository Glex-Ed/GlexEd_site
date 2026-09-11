import type { CSSProperties } from "react";

type PetalColorVar =
  | "brand-magenta"
  | "brand-navy"
  | "brand-red"
  | "brand-orange"
  | "brand-yellow"
  | "brand-green";

type Props = {
  color?: PetalColorVar;
  size?: number;
  className?: string;
  opacity?: number;
  blur?: number;
  rotate?: number;
  style?: CSSProperties;
};

/**
 * Decorative petal-shaped blob inspired by the GLEX ED isotype.
 * Use as background accent in heroes, CTAs and brand sections.
 * Always purely decorative — set aria-hidden by default.
 */
export function PetalBlob({
  color = "brand-magenta",
  size = 320,
  className = "",
  opacity = 0.18,
  blur = 60,
  rotate = 0,
  style,
}: Props) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: `var(--${color})`,
        borderRadius: "62% 38% 55% 45% / 55% 42% 58% 45%",
        filter: `blur(${blur}px)`,
        opacity,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    />
  );
}

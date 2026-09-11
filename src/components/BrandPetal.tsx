import type { ReactNode } from "react";

export type PetalColor =
  | "navy"
  | "magenta"
  | "indigo"
  | "purple"
  | "red"
  | "orange"
  | "yellow"
  | "green";

const petalBg: Record<PetalColor, string> = {
  navy: "bg-brand-navy/12",
  magenta: "bg-brand-magenta/12",
  indigo: "bg-brand-navy/12",
  purple: "bg-brand-magenta/12",
  red: "bg-brand-red/12",
  orange: "bg-brand-orange/15",
  yellow: "bg-brand-yellow/25",
  green: "bg-brand-green/15",
};

const petalText: Record<PetalColor, string> = {
  navy: "text-brand-navy",
  magenta: "text-brand-magenta",
  indigo: "text-brand-navy",
  purple: "text-brand-magenta",
  red: "text-brand-red",
  orange: "text-brand-orange",
  // yellow petal: text needs a darker, AA-readable tone
  yellow: "text-[oklch(0.55_0.16_85)]",
  green: "text-brand-green",
};

export const PETAL_COLORS: PetalColor[] = [
  "magenta",
  "red",
  "orange",
  "yellow",
  "green",
  "navy",
];

type Props = {
  color: PetalColor;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

const sizeMap = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

/**
 * Brand "petal" — organic blob inspired by the GLEX ED isotype.
 * Drops in wherever a colored icon background is needed.
 */
export function BrandPetal({ color, size = "md", children, className = "" }: Props) {
  return (
    <span
      className={`grid place-items-center clip-petal ${sizeMap[size]} ${petalBg[color]} ${petalText[color]} ${className}`}
    >
      {children}
    </span>
  );
}

export const petalTextClass = petalText;

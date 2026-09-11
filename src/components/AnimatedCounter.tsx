import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  /** Original value string, e.g. "+92%", "−40%", "12/12", "2.900+", "9.2/10" */
  value: string;
  /** Animation duration in seconds */
  duration?: number;
  className?: string;
}

/**
 * Renders a number-like string and animates the FIRST numeric run from 0 → target
 * when it scrolls into view. Preserves prefixes ("+", "−"), suffixes ("%", "/12", "+"),
 * decimals, and thousand separators. Respects prefers-reduced-motion.
 */
export function AnimatedCounter({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  // Find the first numeric run (supports "2.900", "9.2", "92")
  const match = value.match(/(\d[\d.,]*)/);
  const numericStr = match?.[0] ?? "";
  const start = match?.index ?? 0;
  const end = start + numericStr.length;
  const prefix = value.slice(0, start);
  const suffix = value.slice(end);

  // Determine separators by looking at the source string
  const hasDot = numericStr.includes(".");
  const hasComma = numericStr.includes(",");
  // If both, assume "." is thousands and "," is decimal (es-AR style is opposite,
  // but project values like "2.900" use "." as thousands separator).
  const decimalSep = hasComma ? "," : hasDot && /\.\d{1,2}$/.test(numericStr) ? "." : "";
  const thousandsSep = decimalSep === "," ? "." : decimalSep === "." ? "," : ".";

  const target = parseFloat(
    numericStr.replace(thousandsSep === "." ? /\./g : /,/g, "").replace(",", "."),
  );
  const decimals = decimalSep && numericStr.split(decimalSep)[1]
    ? numericStr.split(decimalSep)[1].length
    : 0;

  const [display, setDisplay] = useState(reduce || !match ? numericStr : "0");

  useEffect(() => {
    if (reduce || !match) {
      setDisplay(numericStr);
      return;
    }
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const fixed = v.toFixed(decimals);
        const [intPart, decPart] = fixed.split(".");
        const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
        setDisplay(decPart ? `${withThousands}${decimalSep}${decPart}` : withThousands);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

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
  const hasMatch = Boolean(match);
  const numericStr = match?.[0] ?? "";
  const start = match?.index ?? 0;
  const end = start + numericStr.length;
  const prefix = value.slice(0, start);
  const suffix = value.slice(end);

  // Treat a single separator followed by three digits as a thousands separator,
  // so both Spanish "2.900" and English "2,900" animate to 2900.
  const hasDot = numericStr.includes(".");
  const hasComma = numericStr.includes(",");
  const hasBothSeparators = hasDot && hasComma;
  const singleSeparator = hasDot ? "." : hasComma ? "," : "";
  const singleSeparatorParts = singleSeparator ? numericStr.split(singleSeparator) : [];
  const isSingleThousandsValue =
    !hasBothSeparators &&
    Boolean(singleSeparator) &&
    singleSeparatorParts.length === 2 &&
    singleSeparatorParts[1].length === 3;
  const decimalSep = hasBothSeparators
    ? numericStr.lastIndexOf(".") > numericStr.lastIndexOf(",")
      ? "."
      : ","
    : isSingleThousandsValue
      ? ""
      : singleSeparator;
  const thousandsSep = hasBothSeparators
    ? decimalSep === "."
      ? ","
      : "."
    : isSingleThousandsValue
      ? singleSeparator
      : "";
  const normalizedNumericStr = numericStr
    .replace(thousandsSep ? new RegExp(`\\${thousandsSep}`, "g") : /$^/g, "")
    .replace(decimalSep || /$^/g, ".");
  const target = parseFloat(normalizedNumericStr);
  const decimals = decimalSep && numericStr.split(decimalSep)[1]
    ? numericStr.split(decimalSep)[1].length
    : 0;

  const [display, setDisplay] = useState(reduce || !hasMatch ? numericStr : "0");

  useEffect(() => {
    if (reduce || !hasMatch) {
      setDisplay(numericStr);
      return;
    }
    if (!inView) {
      setDisplay("0");
      return;
    }

    setDisplay("0");
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
  }, [decimalSep, duration, hasMatch, inView, numericStr, reduce, target, thousandsSep, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

type Props = {
  className?: string;
  height?: number;
};

/**
 * Horizontal stripe of the 6 brand petal colors.
 * Use as a delicate transition between sections.
 */
export function PetalDivider({ className = "", height = 6 }: Props) {
  const colors = [
    "var(--brand-magenta)",
    "var(--brand-red)",
    "var(--brand-orange)",
    "var(--brand-yellow)",
    "var(--brand-green)",
    "var(--brand-navy)",
  ];
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`flex w-full ${className}`}
      style={{ height }}
    >
      {colors.map((c, i) => (
        <span key={i} className="flex-1" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}

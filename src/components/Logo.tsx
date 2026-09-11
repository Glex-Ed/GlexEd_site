import logo from "@/assets/glex-logo-horizontal.png";

type Props = {
  className?: string;
  textClassName?: string;
  size?: number;
};

/**
 * Glex Ed lockup: official horizontal logo (isotype + wordmark).
 * `size` controls the height in px; width scales proportionally.
 */
export function Logo({ className = "", size = 36 }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logo}
        alt="Glex Ed"
        height={size}
        className="block w-auto shrink-0"
        style={{ height: size }}
      />
    </span>
  );
}

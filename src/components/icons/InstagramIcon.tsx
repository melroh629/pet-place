import type { SVGProps } from "react";

export type InstagramIconProps = {
  size?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
} & Omit<SVGProps<SVGSVGElement>, "width" | "height" | "stroke" | "strokeWidth" | "fill">;

export default function InstagramIcon({
  size = 20,
  stroke = "#ffffff",
  fill = "none",
  strokeWidth = 1.3,
  ...rest
}: InstagramIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <rect
        x={3.5}
        y={3.5}
        width={17}
        height={17}
        rx={5}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <circle
        cx={12}
        cy={12}
        r={3.5}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <circle cx={17.2} cy={6.8} r={0.9} fill={stroke} />
    </svg>
  );
}

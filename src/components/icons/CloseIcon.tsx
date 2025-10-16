import type { SVGProps } from "react";

export type CloseIconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
} & Omit<SVGProps<SVGSVGElement>, "width" | "height" | "stroke" | "strokeWidth">;

export default function CloseIcon({
  size = 20,
  stroke = "#1f2937",
  strokeWidth = 1.6,
  ...rest
}: CloseIconProps) {
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
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

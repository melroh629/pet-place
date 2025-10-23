import type { ComponentProps } from "react";
import { X } from "lucide-react";

import { iconColors } from "@/styles/colors";

export type CloseIconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
} & Omit<ComponentProps<typeof X>, "size" | "color" | "strokeWidth">;

export default function CloseIcon({
  size = 20,
  stroke = iconColors.default,
  strokeWidth = 1.6,
  ...rest
}: CloseIconProps) {
  return <X size={size} color={stroke} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" {...rest} />;
}

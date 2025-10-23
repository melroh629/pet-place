import type { ComponentProps } from "react";
import { ArrowLeft } from "lucide-react";

import { iconColors } from "@/styles/colors";

export type ArrowLeftIconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
} & Omit<ComponentProps<typeof ArrowLeft>, "size" | "color" | "strokeWidth">;

export default function ArrowLeftIcon({
  size = 20,
  stroke = iconColors.default,
  strokeWidth = 1.6,
  ...rest
}: ArrowLeftIconProps) {
  return <ArrowLeft size={size} color={stroke} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" {...rest} />;
}

import type { ComponentProps } from "react";
import { Home } from "lucide-react";

import { iconColors } from "@/styles/colors";

export type HomeIconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
} & Omit<ComponentProps<typeof Home>, "size" | "color" | "strokeWidth">;

export default function HomeIcon({
  size = 20,
  stroke = iconColors.default,
  strokeWidth = 1.6,
  ...rest
}: HomeIconProps) {
  return <Home size={size} color={stroke} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" {...rest} />;
}

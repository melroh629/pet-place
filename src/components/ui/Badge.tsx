import styled from "styled-components";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
};

export default function Badge({ children, variant = "primary", className, style }: BadgeProps) {
  return (
    <StyledBadge $variant={variant} className={className} style={style}>
      {children}
    </StyledBadge>
  );
}

const StyledBadge = styled.span<{ $variant: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${(props) =>
    props.$variant === "primary"
      ? "var(--badge-bg-primary, #e8fff4)"
      : "var(--badge-bg-secondary, #f5f5f5)"};
  color: ${(props) =>
    props.$variant === "primary"
      ? "var(--badge-color-primary, #007a4d)"
      : "var(--badge-color-secondary, #555555)"};
`;

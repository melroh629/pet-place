import styled from "styled-components";

import { baseColors } from "@/styles/colors";

type EmptyStateProps = {
  title: string;
  description?: string;
  variant?: "default" | "loading";
  style?: React.CSSProperties;
};

export default function EmptyState({ title, description, variant = "default", style }: EmptyStateProps) {
  return (
    <Container $variant={variant} style={style}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
}

const Container = styled.div<{ $variant: "default" | "loading" }>`
  grid-column: 1 / -1;
  padding: 56px 0;
  text-align: center;
  background: ${baseColors.overlay.medium};
  border: 1px dashed ${baseColors.border.medium};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  ${(props) =>
    props.$variant === "loading" &&
    `
    color: var(--loading-color, ${baseColors.text.primary});
  `}
`;

const Title = styled.h3`
  margin: 0;
  font-size: 17px;
  color: ${baseColors.text.primaryDark};
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${baseColors.text.tertiary};
`;

import styled from "styled-components";

import { baseColors } from "@/styles/colors";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Card({ children, onClick, className }: CardProps) {
  return (
    <StyledCard
      onClick={onClick}
      className={className}
      role={onClick ? "button" : undefined}
    >
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.article<{ onClick?: () => void }>`
  display: flex;
  gap: 18px;
  align-items: stretch;
  border-radius: 22px;
  background: ${baseColors.white};
  border: 1px solid ${baseColors.border.light};
  padding: 18px;
  box-shadow: ${baseColors.shadow.normal};
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  transition: transform 0.16s ease, box-shadow 0.16s ease;

  ${(props) =>
    props.onClick &&
    `
    &:hover {
      transform: translateY(-3px);
    }
  `}
`;

export const CardThumb = styled.div<{ $bgColor?: string }>`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  flex-shrink: 0;
  background: ${(props) => props.$bgColor || baseColors.background};
  border: 1px solid ${baseColors.border.normal};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${baseColors.text.primaryDark};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.4;
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${baseColors.text.tertiary};
  line-height: 1.45;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

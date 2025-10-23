"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { baseColors, brandColors } from "@/styles/colors";

type PageHeaderProps = {
  leftActions?: ReactNode;
  rightActions?: ReactNode;
};

export default function PageHeader({ leftActions, rightActions }: PageHeaderProps) {
  return (
    <Header>
      <LeftSection>{leftActions}</LeftSection>
      <Logo>포플레이스</Logo>
      <RightSection>{rightActions}</RightSection>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${baseColors.white};
  border-bottom: 1px solid ${baseColors.border.light};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.95);
`;

const LeftSection = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 16px 20px;
  font-size: 17px;
  font-weight: 700;
  color: ${brandColors.primaryDark};
  text-align: center;
  letter-spacing: -0.02em;
`;

const RightSection = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
`;

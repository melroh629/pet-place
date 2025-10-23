"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { brandColors } from "@/styles/colors";

type HeaderButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  "aria-label": string;
};

export default function HeaderButton({ onClick, children, "aria-label": ariaLabel }: HeaderButtonProps) {
  return (
    <Button type="button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.16s ease, transform 0.16s ease;

  &:hover {
    background: ${brandColors.primarySubtle};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

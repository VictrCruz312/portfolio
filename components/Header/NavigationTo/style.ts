import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface INavigationToStyledProps {
  menu: string;
  text: string;
}

interface IListNavigation {
  isOpen: boolean;
  visible: boolean;
}

export const ListNavigation = styled.ul<IListNavigation>`
  display: ${({ isOpen, visible }) =>
    visible ? (isOpen ? "flex" : "none") : "none"};
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  margin: 0;
  padding: 0;
  right: 7%;
  gap: 40px;
  padding-top: 40px;

  @media screen and (min-width: 1024px) {
    display: ${({ visible }) => (visible ? "none" : "flex")};
    gap: 30px;
    flex-direction: row;
    position: static;
    padding: 0;
  }
`;

export const NavigationToStyled = styled.li<INavigationToStyledProps>`
  list-style: none;
  font-size: 17px;
  font-weight: 600;
  padding: 3px;
  color: ${({ menu, text }) =>
    menu === text ? "rgb(var(--color-secondary))" : "inherit"};
  text-decoration: ${({ menu, text }) =>
    menu === text ? "underline" : "none"};

  &:hover {
    color: rgb(var(--color-secondary));
    text-decoration: underline;
  }
`;

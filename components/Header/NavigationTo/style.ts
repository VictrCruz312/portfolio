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
  align-items: flex-start;
  position: absolute;
  margin: 0;
  padding: 0 20px 0 20px;
  right: 1px;
  gap: 40px;
  padding-top: 40px;
  background-color: rgba(var(--color-header), 1);
  border-radius: 7px;

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

  button {
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    padding: 3px;
    background: none;
    border: none;
    color: ${({ menu, text }) =>
      menu === text ? "rgb(var(--color-secondary))" : "inherit"};
    text-decoration: ${({ menu, text }) =>
      menu === text ? "underline" : "none"};

    &:hover {
      color: rgb(var(--color-secondary));
      text-decoration: underline;
    }
  }
`;

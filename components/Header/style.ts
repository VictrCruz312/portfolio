import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface INavigationStyledProps {
  isOpen: boolean;
}

export const HeaderStyled = styled.div`
  width: 100vw;
  height: 10vh;
  max-width: 100vw;
  padding: 0 3.5%;
  position: fixed;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(var(--color-header), 1);

  @media screen and (min-width: 665px) {
    padding: 0 7%;
  }

  .containerLogo {
    display: flex;
    align-items: center;
    color: rgb(var(--color-secondary));
    min-width: 256px;

    @media screen and (min-width: 665px) {
      min-width: 294px;
    }

    .logo {
      color: rgb(var(--color-text));
      font-weight: 700;
      font-size: 26px;

      background: -webkit-linear-gradient(
        180deg,
        rgb(var(--color-text)),
        rgb(var(--color-secondary)) 80%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media screen and (min-width: 665px) {
        font-size: 31px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
      margin: 0 4px;
    }
  }
`;

export const NavigationStyled = styled.nav<INavigationStyledProps>`
  .menuSuspense {
    display: flex;

    @media screen and (min-width: 1024px) {
      display: none;
    }

    button {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1024px) {
    .menuSuspense {
      display: none;
    }
  }
`;

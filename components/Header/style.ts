import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface INavigationStyledProps {
  isOpen: boolean;
}

export const HeaderStyled = styled.header`
  background: rgb(var(--color-tertiary));
  width: 100vw;
  max-width: 100vw;
  position: fixed;
  top: 0;

  .containerStyling {
    padding: 0 7%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(var(--color-secondary), 0.02);

    .containerLogo {
      display: flex;
      align-items: center;
      color: rgb(var(--color-secondary));
      min-width: 294px;

      .logo {
        color: rgb(var(--color-text));
        font-weight: 700;
        font-size: 31px;

        background: -webkit-linear-gradient(
          180deg,
          rgb(var(--color-text)),
          rgb(var(--color-secondary)) 80%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      svg {
        width: 20px;
        height: 20px;
        margin: 0 4px;
      }
    }
  }
`;

export const NavigationStyled = styled.nav<INavigationStyledProps>`
  .menuSuspense {
    display: flex;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    .menuSuspense {
      display: none;
    }
  }
`;

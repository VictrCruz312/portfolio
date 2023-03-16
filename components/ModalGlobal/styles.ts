import styled from "styled-components";

interface IPropsModalGlobalStyled {
  closeModal: boolean;
}

export const ModalGlobalStyled = styled.div<IPropsModalGlobalStyled>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: ${({ closeModal }) => (closeModal ? "none" : "flex")};
  justify-content: center;
  align-items: flex-start;
  padding-top: 34px;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 520px) {
    padding-top: 20px;
  }
  .containerModal {
    width: 97vw;
    height: 90vh;
    background: rgb(var(--color-text));
    border-radius: 8px;
    padding: 18px 3px 16px 3px;
    @media screen and (min-width: 520px) {
      width: 90vw;
      padding: 18px 14px 24px 14px;
    }
    .modalInfo {
      display: flex;
      justify-content: flex-end;
      height: 5%;
      button {
        cursor: pointer;
        border: none;
        padding: 0;
        margin: 0;
        background: inherit;
        svg {
          width: 34px;
          height: 34px;
        }
      }

      a {
        color: rgb(var(--color-secondary));
        font-weight: 500;
        font-style: italic;
        padding-right: 15px;
        text-decoration: underline;

        svg {
          width: 13px;
          height: 13px;
        }
      }
    }

    .containerInfos {
      height: 95%;
    }
  }
`;

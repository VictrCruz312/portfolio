import styled from "styled-components";

export const InitHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 50px;

  @media screen and (min-width: 665px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
  .containerInfos {
    display: flex;
    flex-direction: column;
    color: rgb(var(--color-secondary));
    min-width: 294px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 665px) {
      align-items: flex-start;
      text-align: start;
    }

    background: -webkit-linear-gradient(
      180deg,
      rgb(var(--color-text)),
      rgb(var(--color-secondary)) 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    .apresentation {
      color: rgb(var(--color-text));
      font-weight: 700;
      font-size: 39px;
      margin: 2px 0;
    }

    .description {
      margin: 14px 0 0 0;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
    }

    .buttonsContact {
      margin-top: 34px;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 20px;

      @media screen and (min-width: 665px) {
        justify-content: flex-start;
      }

      .redirectContact {
        -webkit-text-fill-color: rgb(var(--color-text));
        cursor: pointer;
        transition: 200ms;
        border-radius: 4px;
        padding: 3px 10px;

        font-size: 23px;
        font-weight: 700;
        color: rgb(var(--color-text));
      }

      .linkedin {
        border: 2px solid transparent;
        background: rgb(var(--color-secondary));

        :hover {
          border: 2px solid rgb(var(--color-secondary));
          background: rgb(var(--color-button-hover));
        }
      }

      .gitHub {
        background: rgb(var(--color-tertiary));
        border: 2px solid rgb(var(--color-primary));

        :hover {
          border: 2px solid rgba(var(--color-text), 1);
          background: rgb(var(--color-button-hover));
        }
      }
    }
  }

  .perfilImg {
    min-width: 87vw;
    height: 87vw;

    @media screen and (min-width: 466px) {
      min-width: 300px;
      height: 300px;
    }

    @media screen and (min-width: 766px) {
      min-width: 400px;
      height: 400px;
    }
  }
`;

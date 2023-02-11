import styled from "styled-components";

export const AboutStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 50px;

  @media screen and (min-width: 665px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-between;
  }

  .sobreContainerImg {
    width: 70%;
    min-width: 300px;
    display: none;

    @media screen and (min-width: 665px) {
      display: block;
      width: 35%;
      max-width: 400px;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .sobreContainerTexts {
    width: 100%;

    @media screen and (min-width: 665px) {
      width: 60%;
    }

    .sobreTitle {
      font-weight: 800;
      color: rgb(var(--color-secondary));
    }

    .sobreLocalization {
      font-style: italic;
      font-size: 15px;
    }

    .sobreApresentation {
      line-height: 22px;
    }
  }

  .buttonsContact {
    margin-top: 34px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    .redirectContact {
      -webkit-text-fill-color: rgb(var(--color-text));
      cursor: pointer;
      transition: 200ms;
      border-radius: 4px;
      padding: 3px 10px;

      font-size: 15px;
      font-weight: 700;
      color: rgb(var(--color-text));
    }

    .linkedin {
      border: 2px solid transparent;
      background: rgb(var(--color-secondary));

      :hover {
        border: 2px solid rgb(var(--color-secondary));
        background: rgb(var(--color-tertiary));
      }
    }

    .curriculum {
      background: rgb(var(--color-tertiary));
      border: 2px solid rgb(var(--color-primary));

      :hover {
        -webkit-text-fill-color: rgb(var(--color-text));
        background: rgb(var(--color-tertiary));
        border: 2px solid rgba(var(--color-text), 1);
      }
    }
  }
`;

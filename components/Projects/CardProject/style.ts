import styled from "styled-components";

export const CardProjectStyled = styled.li`
  width: 90vw;
  min-width: 260px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  text-decoration: none;
  user-select: none;

  @media (min-width: 480px) {
    width: 30vw;
    min-width: 312px;
    max-width: 380px;
  }

  :hover {
    box-shadow: 0px 0px 7px -2px rgba(63, 61, 86, 0.5);
  }

  .projectContainerImage {
    pointer-events: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .redirects {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

    a {
      -webkit-text-fill-color: rgb(var(--color-text));
      cursor: pointer;
      transition: 200ms;
      border-radius: 4px;
      padding: 3px 10px;

      font-size: 18px;
      font-weight: 700;
      color: rgb(var(--color-text));
    }
    .repositorio {
      border: 3px solid rgb(var(--color-secondary));
      background: rgb(var(--color-tertiary));

      :hover {
        border: 3px solid rgb(var(--color-primary));
        background: rgba(var(--color-button-hover), 1);
      }
    }
    .deploy {
      background: rgb(var(--color-tertiary));
      border: 3px solid rgb(var(--color-primary));

      :hover {
        border: 3px solid rgb(var(--color-secondary));
        background: rgba(var(--color-button-hover), 1);
      }
    }

    .deployBloqued {
      background: rgba(var(--color-tertiary), 0.1);
      border: 3px solid rgba(var(--color-primary), 0.1);

      pointer-events: none;
    }
  }

  .containerDescription {
    display: flex;
    align-items: center;
    height: 170px;
    padding: 10px 30px;

    .description {
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 8px;
        background-color: rgba(var(--color-text), 0.3);
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgb(var(--color-primary));
      }
      font-size: 15px;
      height: 100%;
    }
  }
`;

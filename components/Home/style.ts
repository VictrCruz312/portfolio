import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;
  max-height: 100vh;
  padding: 78.5px 7% 0 7%;

  .apresentation {
    .spanApresentation {
      background: -webkit-linear-gradient(
        180deg,
        rgb(var(--color-text)),
        rgb(var(--color-secondary)) 80%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .containerButtons {
    display: flex;
    gap: 30px;

    button {
      width: 140px;
      height: 60px;
      border-radius: 12px;

      font-size: 17px;
      font-weight: 600;
      color: rgb(var(--color-text));
      border: 2px solid rgb(var(--color-text));
      transition: 300ms;

      &:hover {
        font-size: 18px;
        border: 2px solid rgb(var(--color-textMin));
        color: rgb(var(--color-textMin));
      }
    }

    .buttonCV {
      background: -webkit-linear-gradient(
        180deg,
        rgb(var(--color-secondary)) 60%,
        rgb(var(--color-tertiary))
      );

      &:hover {
        background: -webkit-linear-gradient(
          180deg,
          rgb(var(--color-tertiary)),
          rgb(var(--color-secondary)) 60%
        );
      }
    }

    .buttonContact {
      background: -webkit-linear-gradient(
        180deg,
        rgb(var(--color-tertiary)),
        rgb(var(--color-secondary)) 60%
      );

      &:hover {
        background: -webkit-linear-gradient(
          180deg,
          rgb(var(--color-secondary)) 60%,
          rgb(var(--color-tertiary))
        );
      }
    }
  }
`;

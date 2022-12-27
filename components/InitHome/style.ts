import styled from "styled-components";

export const InitHomeStyled = styled.div`
  .containerApresentation {
    display: flex;
    align-items: center;
    color: rgb(var(--color-secondary));
    min-width: 294px;
    .apresentation {
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
  }
`;

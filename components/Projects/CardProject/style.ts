import styled from "styled-components";

export const CardProjectStyled = styled.li`
  width: 312px;
  min-width: 312px;
  height: 350px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 480px) {
    width: 30vw;
  }

  :hover {
    box-shadow: 0px 0px 7px -2px rgba(63, 61, 86, 0.5);
  }
  .projectContainerImage {
    margin: 0;
    padding: 0;
    width: 100%;

    .projectImage {
      width: 312px !important;
    }
  }
`;

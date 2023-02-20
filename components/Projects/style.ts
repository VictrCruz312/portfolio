import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export const ProjectsStyled = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .projectsTitle {
    color: rgb(var(--color-secondary));
  }

  .projectsList {
    display: block;
    padding: 0;
    width: 95%;
    margin: auto;

    list-style: none;

    .slick-slide {
      padding: 0 10px;
    }
  }
`;

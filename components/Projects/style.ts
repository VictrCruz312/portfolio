import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export const ProjectsStyled = styled.div`
  width: 95%;
  text-align: center;
  margin: auto;
  padding: 15% 0 0 0;

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

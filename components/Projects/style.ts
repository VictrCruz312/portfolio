import styled from "styled-components";

export const ProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  width: 100%;
  height: 100vh;

  .projectsTitle {
    color: rgb(var(--color-secondary));
  }

  .projectsList {
    display: flex;
  }
`;

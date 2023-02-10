import styled from "styled-components";

export const TechnologiesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  width: 100%;
  height: 100vh;

  .technologiesTitle {
    color: rgb(var(--color-secondary));
  }

  .technologiesContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

    .technologiesSkillsContainer {
      background-image: url("/background-shell.png");
      background-size: cover;

      padding: 20px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 320px;
      width: 320px;

      .technologiesSkillTitle {
        margin: 5px 0 10px 0;
      }
    }
  }
`;

export const ContainerListSkills = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

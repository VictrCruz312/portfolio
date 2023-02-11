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

  .technologiesSkill {
    .technologiesSkillName {
    }
  }
`;

export const ScrollableContainer = styled.div`
  overflow-y: auto;
  max-height: 400px;
  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgb(var(--color-tertiary));
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(var(--color-primary));
  }
`;

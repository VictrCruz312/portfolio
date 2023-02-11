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

      padding: 20px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 280px;
      width: 320px;
      max-width: 340px;

      @media screen and (min-width: 755px) {
        width: 440px;
        max-width: 440px;
        height: 320px;
      }

      .technologiesSkillTitle {
        margin: 0 0 25px 0 !important;
        background: -webkit-linear-gradient(
          180deg,
          rgb(var(--color-text)),
          rgb(var(--color-secondary)) 80%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
        font-size: 22px;

        @media screen and (min-width: 655px) {
          margin: 5px 0 10px 0;
        }
      }
    }
  }
`;

export const ContainerListSkills = styled.ul`
  display: flex;
  max-width: 320px;
  width: 210px;
  padding: 0;
  height: 220px;
  margin: auto;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 755px) {
    width: inherit;
    max-width: inherit;
    gap: 6px;
  }

  .technologiesSkill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;

    font-size: 12px;
    list-style: none;
    height: 75px;
    width: 100px;

    .technologiesSkillName {
      color: rgba(var(--color-textMin), 1);
      font-size: 12px;
      margin: 0;
    }

    .technologiesSkillLevel {
      width: 60px;
      height: 5px;
      border-radius: 5px;
      background: rgb(var(--color-secondary));
    }
  }
`;

export const ScrollableContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  max-height: 100vh;
  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(var(--color-text), 0.3);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(var(--color-primary));
  }
`;

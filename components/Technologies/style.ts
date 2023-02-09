import styled from "styled-components";

export const TechnologiesStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 50px;

  @media screen and (min-width: 665px) {
    height: 90vh;
    flex-direction: row;
    justify-content: space-between;
  }

  .technologiesListSkills {
    display: flex;
    gap: 40px;
  }
`;

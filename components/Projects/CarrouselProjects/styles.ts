import styled from "styled-components";

export const CarrouselProjectsStyled = styled.div`
  position: relative;
  z-index: 50;
  width: 100vw;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;

  @media (min-width: 480px) {
    padding: 0px 100px;
  }
  .CarrouselProjects {
    padding: 0;
    width: 100vw;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    a:last-child {
      margin: 10px 0px 10px 0px;
    }
    @media (min-width: 480px) {
      width: 100%;
    }

    .project {
      transition: 200ms;
      width: 100vw;
      height: 380px;
      border: none;
      outline: 0;
      padding: none;
      margin: 10px 20px 10px 0px;
      border-radius: 8px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;

      @media (min-width: 480px) {
        width: 30vw;
      }

      :hover {
        box-shadow: 0px 0px 7px -2px rgba(63, 61, 86, 0.5);
      }
      .projectContainerImage {
        border-radius: 8px 8px 0px 0px;
        width: 250px;
        max-width: 30vw;
        height: 230px;
        max-height: 230px;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        @media (min-width: 480px) {
          width: 30vw;
        }
        .projectsImage {
          width: 250px;
          max-width: 250px;
          height: auto;
          max-height: 100%;

          @media (min-width: 480px) {
            width: 30vw;
          }
        }
      }
    }
  }

  #buttonLeft,
  #buttonRight {
    position: absolute;
    cursor: pointer;
    width: 70px;
    height: 70px;
    padding: none;
    border: none;
    outline: 0;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    svg {
      transition: 200ms;
      font-size: 70px;
      color: #f5f5f5;
      :hover {
        transition: 200ms;
        color: #1976d2;
      }
    }
    z-index: 49;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(2, 2, 2, 0.5);
    @media (min-width: 480px) {
      width: 80px;
      height: 80px;
    }
  }
  #buttonLeft {
    left: 5px;
    @media (min-width: 480px) {
      left: 15px;
    }
  }
  #buttonRight {
    right: 5px;
    @media (min-width: 480px) {
      right: 15px;
    }
  }
`;

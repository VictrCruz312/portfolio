import styled from "styled-components";

interface IPropsCarrousel {
  gapBetweenItems?: string;
}

export const CarrouselProjectsStyled = styled.div<IPropsCarrousel>`
  width: 100%;
  overflow: hidden;
  .ListItems {
    padding-bottom: 10px;
    display: flex;
    gap: ${({ gapBetweenItems }) =>
      gapBetweenItems ? gapBetweenItems : "48px"};

    overflow: auto;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(var(--color-text), 0.3);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgb(var(--color-primary));
    }
  }
`;

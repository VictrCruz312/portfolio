import styled from "styled-components";

interface IPropsCarrousel {
  gapBetweenItems?: string;
}

export const CarrouselProjectsStyled = styled.div<IPropsCarrousel>`
  width: 100%;
  overflow: hidden;
  .ListItems {
    overflow: hidden;
    display: flex;
    gap: ${({ gapBetweenItems }) =>
      gapBetweenItems ? gapBetweenItems : "48px"};
  }
`;

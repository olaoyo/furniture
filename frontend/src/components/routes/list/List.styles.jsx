import styled, { css } from "styled-components";

export const FurnitureListStyles = styled.div`
  grid-column: 2 / span 10;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28.7rem, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
  justify-items: center;
  margin-bottom: 5.5rem;
`;

export const FurnitureCard = styled.article`
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  width: 28.7rem;
  height: 37.2rem;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;

export const FurnitureImg = styled.img`
  width: 28.7rem;
  height: 28.7rem;
`;

export const FurnitureText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;

  width: 28.7rem;
  height: 8.5rem;
`;

export const FurnitureNamePrice = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ price }) =>
    price
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
        `}
`;

import styled, { css } from "styled-components";

export const TopPicksStyles = styled.div`
  grid-column: 2 / span 10;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
`;

export const TopPicksTextGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1rem;
  justify-items: center;
  margin: 5.5rem 0 2rem 0;
`;

export const TopPicksHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const TopPicksParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey.one};
`;

export const TopPicksProductsListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10rem;
  justify-items: center;
`;

export const TopPicksProducts = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 1.2rem;
`;

export const TopPicksImg = styled.img`
  width: 28.7rem;
  height: 28.7rem;
  margin-bottom: 1.8rem;
`;

export const TopPicksDetails = styled.div`
  display: grid;
  grid-template-rows: repeat(max-content);
  row-gap: 3.3rem;
`;

export const TopPicksText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  justify-self: center;

  ${({ price }) =>
    price
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
        `}
`;

export const TopPicksViewMore = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 7.5rem 0 8rem 0;
`
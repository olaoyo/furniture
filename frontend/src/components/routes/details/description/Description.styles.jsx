import styled, { css } from "styled-components";

export const DescriptionStyles = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));
  grid-template-rows: repeat(3, max-content);
`;

export const Paragraph = styled.p`
  grid-column: 2 / span 10;
  justify-self: center;
  margin-bottom: 4rem;
  ${({ p1 }) =>
    p1
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          /* width: 150rem; */
          padding: 0 20rem;
          text-align: justify;
        `}

  ${({ grey }) =>
    grey
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : css`
          color: ${({ theme }) => theme.colors.black};
        `}
`;

export const Furniture = styled.div`
  grid-column: 2 / span 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const FurnitureCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 60.5rem;
  height: 34.8rem;
  background: ${({ theme }) => theme.colors.accents};
  border-radius: 10px;
  justify-self: center;
  justify-items: center;
  align-items: center;
`;

export const FurnitureImg = styled.img`
  width: auto;
  height: 120%;
`;

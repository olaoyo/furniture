import styled, { css } from "styled-components";

export const DetailsNavStyles = styled.div`
  grid-column: left-start / right-end;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  width: 12.1rem;
  height: 2.4rem;
  column-gap: 1rem;
  margin: 5rem 0 0 10rem;
  align-items: center;
`;

export const DetailsParagraphs = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  z-index: 2;

  ${({ black }) =>
    black
      ? css`
          color: ${({ theme }) => theme.colors.black};
        `
      : css`
          color: ${({ theme }) => theme.colors.grey.one};
        `}
`;

export const DetailsNavArrowActive = styled.div`
  display: grid;
  
  justify-items: center;
  width: 4rem;
  height: 4rem;
  z-index: 2;
  
  span {
    color: ${({ theme }) => theme.colors.black};
    align-self: center;
  }
`;

export const DetailsNavButton = styled.button`
  display: grid;
  grid-template-columns: 1fr;

  background: transparent;
  width: 42.2rem;
  height: 3.7rem;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.grey.one};
  padding: 0 0 0 2rem;
  justify-items: start;
  align-items: center;
`;
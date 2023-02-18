import styled, { css } from "styled-components";

export const HomeNavStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  width: 12.1rem;
  height: 2.4rem;
`;

export const HomeParagraphs = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.black};
  z-index: 2;

  ${({ medium }) =>
    medium
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.medium};
        `
      : css`
          font-weight: ${({ theme }) => theme.fontWeights.light};
        `}
`;

export const HomeNavArrowActive = styled.div`
  display: grid;
  justify-items: center;
  width: 4rem;
  height: 4rem;
  z-index: 2;

  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;

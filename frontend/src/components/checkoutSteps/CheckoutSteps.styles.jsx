import styled, { css } from "styled-components";

export const CheckoutStepsStyles = styled.nav`
  grid-column: col-start 2 / col-end 8;

  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));

  padding-top: 4rem;
`;

export const CheckoutStepsItemsGrid = styled.ul`
  grid-column: 2 / span 6;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  list-style: none;
`;

export const CheckoutStepsStatus = styled.li`
  ${({ active, inactive }) =>
    active
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
          color: ${({ theme }) => theme.colors.black};
        `
      : inactive
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
          color: ${({ theme }) => theme.colors.grey.two};
        `
      : css``}
`;

export const CheckoutStepsArrow = styled.div`
  display: grid;
  justify-items: center;
  width: 4rem;
  height: 4rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
  }

  ${({ active, inactive }) =>
    active
      ? css`
          span {
            color: ${({ theme }) => theme.colors.black};
          }
        `
      : inactive
      ? css`
          span {
            color: ${({ theme }) => theme.colors.grey.two};
          }
        `
      : css``}
`;

 

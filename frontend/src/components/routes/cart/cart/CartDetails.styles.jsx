import styled, { css } from "styled-components";

export const CartDetailsStyles = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));

  margin-top: 7.8rem;
`;

export const FurnitureDetails = styled.div`
  grid-column: 2 / span 6;

  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const DetailsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  background: ${({ theme }) => theme.colors.accents};
  width: 81.7rem;
  height: 5.5rem;
  margin-bottom: 2.6rem;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  ${({ product, price, quantity, subtotal }) =>
    product
      ? css`
          grid-column: 2 / span 1;
        `
      : price
      ? css`
          grid-column: 3 / span 1;
        `
      : quantity
      ? css`
          grid-column: 4 / span 1;
        `
      : subtotal
      ? css`
          grid-column: 5 / span 1;
        `
      : css``}
`;

export const DetailsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  width: 81.7rem;
  height: 16.1rem;
`;

export const Image = styled.img`
  grid-column: 1 / span 1;
  background: ${({ theme }) => theme.colors.primary};
  width: 10.6rem;
  height: 10.6rem;
  border: none;
  border-radius: 10px;
  justify-self: center;
  align-self: center;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  ${({ product, price, quantity, subtotal, trash }) =>
    product
      ? css`
          grid-column: 2 / span 1;
        `
      : price
      ? css`
          grid-column: 3 / span 1;
        `
      : quantity
      ? css`
          grid-column: 4 / span 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 1rem;
          width: 9.6rem;
        `
      : subtotal
      ? css`
          grid-column: 5 / span 1;
        `
      : trash
      ? css`
          grid-column: 6 / span 1;
          color: ${({ theme }) => theme.colors.primary};
          transition: all 0.2s;

          span {
            :hover {
              cursor: pointer;
              transform: translateY(-2px) scale(1.01);
            }

            :active {
              transform: scale(1);
            }
          }
        `
      : css``}
`;

export const Paragraph = styled.p`
  ${({ black, grey, gold }) =>
    black
      ? css`
          color: ${({ theme }) => theme.colors.black};
        `
      : grey
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : gold
      ? css`
          color: ${({ theme }) => theme.colors.gold.thr};
        `
      : css``}

  ${({ p2, p3, h6 }) =>
    p2
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
        `
      : p3
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
        `
      : h6
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.headers.h6};
        `
      : css``}

  ${({ regular, medium, semiBold }) =>
    regular
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.regular};
        `
      : medium
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.regular};
        `
      : semiBold
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        `
      : css``}

  ${({ border }) =>
    border
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.grey.one};
          border-radius: 5px;
          width: 3.2rem;
          height: 3.2rem;
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          align-items: center;
        `
      : css``}

  ${({ left, right }) =>
    left
      ? css`
          justify-self: start;
        `
      : right
      ? css`
          justify-self: end;
        `
      : css``}
`;

export const AddRemove = styled.div`
  display: grid;
  grid-template-columns: 1, max-content;
  transition: all 0.2s;

  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(0.8);
  }
`;

export const FurnitureTotal = styled.div`
  grid-column: 9 / span 3;

  display: grid;
  grid-template-rows: repeat(4, max-content);
  row-gap: 3rem;
  justify-items: center;
  padding-top: 4rem;

  background: ${({ theme }) => theme.colors.accents};
  width: 39.3rem;
  height: 39rem;
`;

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 24.6rem;
`;
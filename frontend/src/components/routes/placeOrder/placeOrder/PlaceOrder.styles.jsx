import styled, { css } from "styled-components";

/* --------------- ORDER DETAILS ------------------ */

export const PlaceOrderStyles = styled.div`
  grid-column: left-start 1 / right-end 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 6.8rem 0 17rem 0;
`;

/* --------------- SHIPPING & PAYMENT METHOD ------------------ */

export const DetailsGrid = styled.div`
  grid-column: 2 / span 4;
  grid-template-rows: repeat(2, 1fr);
  margin: 0 5rem 0 0;
`;

export const OrderAndPaymentDetailsGrid = styled.div`
  grid-column: 1 / span 5;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const OrderFurniture = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  width: 30rem;
  row-gap: 2.5rem;
`;

export const PaymentMethod = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2.5rem;
`;

export const ProductOrderLine = styled.div`
  justify-self: center;
  margin-top: -1rem;
`;

/* --------------- FURNITURE, QTY & PRICE ------------------ */

export const FurnitureKey = styled.div``;

export const FurnitureGrid = styled.div`
  grid-column: 1 / span 6;

  display: grid;
  grid-template-columns: repeat(5, 1fr); // Check this
  width: 70rem;
  background: ${({ theme }) => theme.colors.accents};
  border-radius: 1rem;
  column-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 2rem 0;
  transition: all 0.2s;

  :hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px) scale(1.01);
  }

  :active {
    transform: scale(1);
  }
`;

export const FurnitureImage = styled.img`
  width: 18.5rem;
  height: 14.3rem;
`;

/* --------------- ORDER SUMMARY ------------------ */

export const SummaryGrid = styled.div`
  grid-column: 6 / span 3;
  background: ${({ theme }) => theme.colors.accents};
  border-radius: 1rem;
  width: 50.7rem;
  height: 54.2rem;

  display: grid;
  grid-template-rows: repeat(6, max-content);
`;

export const SummaryContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);

  ${({ center, centerNoMarginTop }) =>
    center
      ? css`
          justify-items: center;
          margin: 5rem 0 0 0;
        `
      : centerNoMarginTop
      ? css`
          justify-items: center;
        `
      : css``}
`;

export const SummaryParagraphGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.3rem 3.5rem;
`;

export const SummaryAmount = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
  justify-self: end;

  ${({ bold, gold }) =>
    bold
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
          `
      : gold
      ? css`
          color: ${({ theme }) => theme.colors.gold.thr};
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        `
      : css``}
`;

export const SummaryLine = styled.div`
  justify-self: center;
  margin-top: -1rem;
`;

export const SummaryButton = styled.button`
  width: 43.1rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.black.three};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  border: none;
  background: linear-gradient(
    261.88deg,
    ${({ theme }) => theme.colors.gold.two} -5.03%,
    ${({ theme }) => theme.colors.gold.three} 98.82%
  );
  margin: 4rem 3rem 2rem 3.5rem;

  &:hover {
    cursor: pointer;
  }
`;

import styled, { css } from "styled-components";

export const MessageStyles = styled.div`
  ${({ smallGold }) =>
    smallGold
      ? css`
          display: grid;
          justify-items: center;
          margin: 1rem;
        `
      : css`
          grid-column: left-start / right-end;
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          align-items: center;
        `}
`;

export const MessageText = styled.p`
  ${({ smallGold }) =>
    smallGold
      ? css`
          color: ${({ theme }) => theme.colors.gold.thr};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
          text-transform: capitalize;
          letter-spacing: 0.12rem;
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
          color: ${({ theme }) => theme.colors.grey.one};
          text-transform: capitalize;
          padding-top: 10rem;
        `}
`;

import styled from "styled-components";

export const ShopStyles = styled.div`
  grid-column: 2 / span 10;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 1rem;
  justify-items: center;
  margin: 5.5rem 0 2rem 0;
`;

export const ShopHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const ShopParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey.one};
`;

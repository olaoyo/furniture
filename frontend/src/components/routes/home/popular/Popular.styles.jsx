import styled from "styled-components";

export const PopularStyles = styled.div`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.secondary};
  padding: 8rem 0 11rem 0;
`;

export const PopularImgGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2rem;
  justify-items: center;
`;

export const PopularSideTable = styled.img`
  width: 44rem;
  height: 35.4rem;
`;

export const PopularSofa = styled.img`
  width: 40.8rem;
  height: 29.6rem;
  margin-top: 6rem;
`;

export const PopularTextGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 1.5rem;
    justify-items: center;
`

export const PopularHeader = styled.h5`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.headers.h5};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`
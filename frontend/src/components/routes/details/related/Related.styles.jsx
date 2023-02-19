import styled from "styled-components";

export const RelatedStyles = styled.div`
  grid-column: left-start / right-end;
  display: grid;
  grid-template-columns: 1, 1fr;
  justify-items: center;
  margin: 12rem 0 4rem;
`;

export const RelatedHeader = styled.h5`
    font-size: ${({ theme }) => theme.fontSizes.headers.h5};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`
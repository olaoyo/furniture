import styled from "styled-components";

export const NewArrivalsStyles = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: max-content 1fr;
  background: ${({ theme }) => theme.colors.accents};
  align-items: center;
`;

export const NewArrivalsImg = styled.img`
  width: 86.5rem;
  height: 58.2rem;
  margin: 6.3rem 0 0 5rem;

`;

export const NewArivalsText = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
  row-gap: 1rem;
`;

export const NewArrivalsParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const NewArrivalsHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
`;

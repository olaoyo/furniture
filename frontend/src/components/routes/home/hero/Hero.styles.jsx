import styled from "styled-components";

export const HeroStyles = styled.div`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.primary};
  padding-bottom: 9.5rem;
`;

export const HeroText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 3.7rem;
  padding: 32rem 0 0 25rem;
`;

export const HeroHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headers.h1};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
  width: 44rem;
  height: 19.2rem;
  line-height: 9.6rem;
`;

export const HeroImage = styled.img`
  width: 72.6rem;
  height: 70.5rem;
  margin-top: 7rem;
`;

import styled from "styled-components";

export const InstagramStyles = styled.div`
  grid-column: 1 / span 12;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const InstagramCard = styled.div`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1rem;
  justify-items: center;
  align-items: center;
  height: 45rem;
  width: auto;
  position: relative;
  overflow: hidden;
  padding-top: 12rem;
`;

export const InstagramImg = styled.img`
  position: absolute;
  width: 80%;
  height: auto;
  bottom: -69%;
  left: 11%;
  opacity: 0.35;
  z-index: 1;
`;

export const InstagramHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  z-index: 2;
`;

export const InstagramParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.black};
  margin-top: -1.5rem;
  z-index: 2;
`;

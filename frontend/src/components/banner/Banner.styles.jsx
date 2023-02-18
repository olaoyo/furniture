import styled from "styled-components";

export const BannerStyles = styled.div`
  grid-column: 1 / span 12;
`;

export const BannerBox = styled.div`
  width: auto;
  height: 31.6rem;
  position: relative;
  overflow: hidden;
  padding-top: 6.5rem;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -310%;
  opacity: 0.35;
  z-index: 1;
`;

export const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
`;

export const BannerHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
  margin-top: -2rem;
  z-index: 2;
`
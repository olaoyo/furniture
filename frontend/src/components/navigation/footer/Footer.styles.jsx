import styled, { css } from "styled-components";

export const FooterStyles = styled.footer`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));
  grid-template-rows: repeat(2, max-content);

  row-gap: 7.5rem;
  background: ${({ theme }) => theme.colors.white};

  padding: 3rem 0;
`;

export const FooterInfo = styled.div`
  grid-column: 2 / span 10;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.two};
  padding-bottom: 4rem;
`;

export const FooterAddressGrid = styled.div`
  align-self: center;
  margin-top: 4.5rem;
`;

export const FooterAddress = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey.one};
  margin-left: -2rem;
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 4.5rem;
  margin-top: 6.2rem;
`;

export const FooterParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${({ grey }) =>
    grey
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : css`
          color: ${({ theme }) => theme.colors.grey.black};
        `}
`;

export const FooterCopyright = styled.p`
  grid-column: 2 / span 3;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.black};
  margin: -3.5rem 0 0 -2rem;
`;

import styled from "styled-components";

export const InfoStyles = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background: ${({ theme }) => theme.colors.secondary};
  height: 300px;
  justify-items: center;
  margin: 21rem 0 0 0;
`;

export const InfoText = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  align-self: center;
`;

export const InfoHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h6};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const InfoParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey.one};
`;

import styled from "styled-components";

export const MessageSmallStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 2rem 0 2rem 0;
`;

export const MessageSmallText = styled.p`
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  text-transform: capitalize;
  letter-spacing: 0.12rem;
`;

import styled from "styled-components";


export const MessageStyles = styled.div`
  grid-column: left-start / right-end;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

export const MessageText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.one};
  text-transform: capitalize;
  padding-top: 10rem;
`;

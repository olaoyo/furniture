import styled from "styled-components";

export const FurnitureStyles = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  background: ${({ theme }) => theme.colors.secondary};
  margin: 5rem 0 2rem 0;
`;

export const FurnitureFilter = styled.div`
  column-gap: 1 / span 12;
  width: 100%;
  height: 10rem;
`;



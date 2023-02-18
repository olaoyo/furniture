import styled from "styled-components";

export const RatingStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  column-gap: 1rem;
  margin: 2rem 0 0 7rem;
`;

export const RatingStars = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`;

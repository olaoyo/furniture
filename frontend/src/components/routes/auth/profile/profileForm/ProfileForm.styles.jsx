import styled from "styled-components";

export const ProfileFormStyles = styled.div`
  grid-column: left-start / right-end;
  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));

  justify-items: center;
  margin-top: 9.5rem;
`;

export const MyProfile = styled.div`
  grid-column: 3 / span 4;
`;

export const MyOrders = styled.div`
  grid-column: 7 / span 4;
`;

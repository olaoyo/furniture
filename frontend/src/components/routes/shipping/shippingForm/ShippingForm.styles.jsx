import styled from "styled-components";

export const ShippingFormStyles = styled.div`
  grid-column: left-start / right-end;
  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));

  justify-items: center;
  margin-top: 9.5rem;
`;

export const ShippingDetails = styled.div`
  grid-column: 5 / span 4;
  justify-self: center;
`;


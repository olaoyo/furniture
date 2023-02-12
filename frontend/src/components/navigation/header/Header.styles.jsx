import styled from "styled-components";

export const HeaderStyles = styled.header`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));
  background: ${({ theme }) => theme.colors.primary};
  padding: 3rem 0;
`;

export const Logo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  grid-column: 2 / span 2;
  width: 15rem;
  height: 3rem;
  align-self: center;
  margin-left: 1.5rem;
`;

export const Menu = styled.div`
  grid-column: 6 / span 3;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.black.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: 400;
`;

export const Cart = styled.div`
  grid-column: 9 / span 1;
  align-self: center;
`;

export const ProfileOuter = styled.div`
  grid-column: 10 / span 1;

  display: grid;
  grid-template-columns: 1fr;

  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 6px 16px ${({ theme }) => theme.colors.black.three});
  border-radius: 50%;
  width: 5.3rem;
  height: 5.3rem;
  justify-self: center;
  align-self: center;
`;

export const ProfileInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 4.821rem;
  height: 4.378rem;
  justify-self: center;
  align-self: center;

  p {
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
    justify-self: center;
    align-self: center;
  }
`;

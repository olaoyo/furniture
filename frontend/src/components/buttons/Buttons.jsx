import styled from "styled-components";

export const LoginButton = styled.button`
  grid-column: 11 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.white.one};
  background: ${({ theme }) => theme.colors.primary};
  width: 102px;
  height: 45px;
  box-shadow: 0px 4px 32px rgba(223, 195, 124, 0.25);
  border-radius: 33px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  justify-self: center;
  align-self: center;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#ffffff5f, 0.2);
    cursor: pointer;
  }
`;

export const ShopNowButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  width: 121px;
  height: 36px;
  padding-bottom: 4rem;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#ffffff5f, 0.2);
    cursor: pointer;
  }
`;

export const OrderNowButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  width: 25.5rem;
  height: 6.4rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: transparent;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#ffffff5f, 0.2);
    cursor: pointer;
  }
`;

export const FollowUsButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  width: 25.5rem;
  height: 6.4rem;
  z-index: 2;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#ffffff5f, 0.2);
    cursor: pointer;
  }
`;

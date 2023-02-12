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

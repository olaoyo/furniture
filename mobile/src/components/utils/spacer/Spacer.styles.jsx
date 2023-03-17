import styled, { css } from "styled-components/native";

const Spacer = styled.View`
  ${({ verticalOne, verticalTwo, verticalThree, verticalFour, verticalFive, horizontalOne, horizontalTwo, horizontalThree, horizontalFour, horizontalFive }) =>
    verticalOne
      ? css`
          margin: ${({ theme }) => theme.layout.one} 0;
        `
      : verticalTwo
      ? css`
          margin: ${({ theme }) => theme.layout.two} 0;
        `
      : verticalThree
      ? css`
          margin: ${({ theme }) => theme.layout.three} 0;
        `
      : verticalFour
      ? css`
          margin: ${({ theme }) => theme.layout.four} 0;
        `
      : verticalFive
      ? css`
          margin: ${({ theme }) => theme.layout.five} 0;
        `
      : horizontalOne
      ? css`
          margin: 0 ${({ theme }) => theme.layout.one};
        `
      : horizontalTwo
      ? css`
          margin: 0 ${({ theme }) => theme.layout.two};
        `
      : horizontalThree
      ? css`
          margin: 0 ${({ theme }) => theme.layout.three};
        `
      : horizontalFour
      ? css`
          margin: 0 ${({ theme }) => theme.layout.four};
        `
      : horizontalFive
      ? css`
          margin: 0 ${({ theme }) => theme.layout.five};
        `
      : css``}
`;

export default Spacer;

import styled, { css } from "styled-components/native";

export const TotalAndCheckout = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  margin: 30px 0;
`;

export const CartInfo = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  ${({ cartTotal, checkout }) =>
    cartTotal
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
          font-size: ${({ theme }) => theme.fontSizes.title};
          color: ${({ theme }) => theme.colors.black};
          background: ${({ theme }) => theme.colors.primary};
          border-width: 1px;
          border-radius: 10px;
          border-color: ${({ theme }) => theme.colors.primary};
          width: 150px;
          height: 40px;
          padding-top: 5px;
          align-self: center;
          text-align: center;
          overflow: hidden;
        `
      : checkout
      ? css`
          width: 150px;
          height: 40px;
          border-width: 1px;
          border-radius: 10px;
          border-color: ${({ theme }) => theme.colors.black};
          align-self: center;
          text-align: center;
          padding-top: 10px;
        `
      : css``}
`;

export const Pressable = styled.TouchableOpacity``;

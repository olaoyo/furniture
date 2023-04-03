import styled, { css } from "styled-components/native";

export const OrderStyles = styled.View``;

export const OrderGrid = styled.View`
  flex-direction: row;
  width: 200px;
`;

export const OrderInfo = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  ${({ furnitureName, qty, subtotal }) =>
    furnitureName
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
          width: 150px;
          height: 50px;
          align-self: center;
          text-align: center;
          margin-top: 20px;
          padding-top: 10px;
          overflow: hidden;
        `
      : qty
      ? css`
          background: ${({ theme }) => theme.colors.primary};
          border-radius: 10px;
          border-width: 1px;
          border-color: ${({ theme }) => theme.colors.primary};
          width: 150px;
          height: 40px;
          font-family: ${({ theme }) => theme.fonts.medium};
          text-align: center;
          padding-top: 10px;
          align-self: center;
          overflow: hidden;
        `
      : subtotal
      ? css`
          background: ${({ theme }) => theme.colors.accents};
          border-radius: 10px;
          border-width: 1px;
          border-color: ${({ theme }) => theme.colors.accents};
          width: 150px;
          height: 40px;
          font-family: ${({ theme }) => theme.fonts.bold};
          text-align: center;
          padding-top: 10px;
          align-self: center;
          overflow: hidden;
        `
      : css``}
`;

export const ImgAndQty = styled.View`
  flex-direction: column;
  width: 200px;
  height: 190px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.Image`
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  width: 180px;
  height: 190px;
`;

export const Pressable = styled.TouchableOpacity``;

export const NameAndPrice = styled.View`
  flex-direction: column;
  width: 200px;
  height: 185px;
  justify-content: space-between;
`;



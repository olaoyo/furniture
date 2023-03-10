import styled, { css } from "styled-components/native";

export const CartFlatList = styled.FlatList`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const CartDetailsStyles = styled.View``;

export const Pressable = styled.TouchableOpacity``;

export const CartGrid = styled.View`
  flex-direction: row;
  width: 200px;
  height: 300px;
`;

export const ImgAndQty = styled.View`
  flex-direction: column;
  width: 200px;
  height: 250px;
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

export const QtyButton = styled.View`
  flex-direction: row;
  background: transparent;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.black};
  justify-content: space-around;
  width: 150px;
  height: 40px;
  justify-items: center;
  align-items: center;

  ${({ outOfStock }) =>
    outOfStock
      ? css`
          border-color: ${({ theme }) => theme.colors.grey.one};
        `
      : css``}
`;

export const IconPress = styled.TouchableOpacity`
  ${({ ml }) =>
    ml
      ? css`
          margin-left: 10px;
        `
      : css``}
`;

export const NameAndPrice = styled.View`
  flex-direction: column;
  width: 200px;
  height: 250px;
  justify-content: space-between;
`;

export const CartInfo = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  ${({
    cartTotal,
    deleteItem,
    furnitureName,
    outOfStock,
    price,
    qty,
    subtotal,
  }) =>
    cartTotal
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
          font-size: ${({ theme }) => theme.fontSizes.title};
          color: ${({ theme }) => theme.colors.black};
        `
      : deleteItem
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
      : furnitureName
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
      : outOfStock
      ? css``
      : price
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
      : qty
      ? css``
      : subtotal
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
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

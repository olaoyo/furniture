import styled, { css } from "styled-components/native";

export const DetailsStyles = styled.View``;

export const ImgAndPurchase = styled.View`
  flex-direction: row;
`;

export const ImgBg = styled.View`
  border-radius: 5px;
  align-items: center;
  ${({ large, small }) =>
    large
      ? css`
          background: ${({ theme }) => theme.colors.accents};
          width: 196px;
          height: 151px;
          margin: 20px 0 0 10px;
        `
      : small
      ? css`
          background: ${({ theme }) => theme.colors.accents};
          width: 70px;
          height: 60px;
        `
      : css``}
`;

export const Img = styled.Image`
  ${({ large, small }) =>
    large
      ? css`
          width: 135px;
          height: 131px;
        `
      : small
      ? css`
          width: 54px;
          height: 53px;
        `
      : css``}
`;

export const InfoAndCartButton = styled.View`
  margin: 20px 50px 0 0;
  align-items: center;
`;

export const Info = styled.Text`
  text-align: center;

  ${({ name, price, button, qty }) =>
    name
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.body};
          color: ${({ theme }) => theme.colors.black};
          width: 150px;
          height: 50px;
        `
      : price
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.body};
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : button
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.button};
          color: ${({ theme }) => theme.colors.black};
        `
      : qty
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.button};
          color: ${({ theme }) => theme.colors.black};
          width: 25px;
        `
      : css``}
`;

export const RatingContainer = styled.View`
  width: 100px;
  height: 30px;
`;

export const QtyAndAddToCart = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const QtyButton = styled.View`
  flex: 1;
  flex-direction: row;
  background: transparent;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.black};
  justify-content: space-around;
  height: 40px;
  margin-left: 15px;
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

export const ImgSmallContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  margin: 30px 10px;
`;

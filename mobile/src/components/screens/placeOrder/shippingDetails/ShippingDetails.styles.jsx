import styled, { css } from "styled-components/native";

export const ShippingDetailsStyles = styled.View`
  background: ${({ theme }) => theme.colors.yellow};
  align-self: center;
  width: 340px;
  height: 370px;
  border-radius: 10px;
`;

export const DetailsGrid = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin: 0 30px;
`;

export const ShippingInfo = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  ${({ bold, gold }) =>
    bold
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
          color: ${({ theme }) => theme.colors.black};
        `
      : gold
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
          color: ${({ theme }) => theme.colors.gold.thr};
        `
      : css``}
`;

export const Pressable = styled.TouchableOpacity``;

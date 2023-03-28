import styled, { css } from "styled-components/native";

export const CheckoutStepsStyles = styled.View`
  padding-top: 40px;
`;

export const CheckoutStepsItemsGrid = styled.View`
  flex-direction: row;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  margin: 0 40px;
`;

export const CheckoutTouch = styled.TouchableOpacity``;

export const CheckoutStepsStatus = styled.Text`

  font-size: ${({ theme }) => theme.fontSizes.body};
  ${({ active, inactive }) =>
    active
      ? css`
          color: ${({ theme }) => theme.colors.black};
        `
      : inactive
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : css``}
`;


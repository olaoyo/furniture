import styled, { css } from "styled-components/native";
import { theme } from "../../themes/themes";
import { Button, RadioButton } from "react-native-paper";

export const CustomButton = styled.TouchableOpacity`
  background: transparent;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.black};
  width: 121px;
  height: 36px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.button};
  align-self: center;
`;

export const AuthButton = styled(Button).attrs({
  textColor: theme.colors.black,
})`
  ${({ border, noBorder }) =>
    border
      ? css`
          background: ${({ theme }) => theme.colors.white};
          border-radius: 10px;
          border-color: ${({ theme }) => theme.colors.black};
          border-width: 1px;
        `
      : noBorder
      ? css`
          background: transparent;
          border-color: ${({ theme }) => theme.colors.black};
        `
      : css``}
`;

export const Radio = styled(RadioButton).attrs({
  color: theme.colors.purple,
  backgroundColor: theme.colors.yellow
})``;

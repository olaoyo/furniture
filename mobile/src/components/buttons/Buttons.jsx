import styled from "styled-components/native";

export const BorderBottomButton = styled.TouchableOpacity`
  background: transparent;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.black};
  width: 121px;
  height: 36px;
  justify-content: center;
`;

export const BorderBottomText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.button};
  align-self: center;
`;

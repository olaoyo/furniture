import styled from "styled-components/native";

export const WelcomeStyles = styled.View`
flex: 0.6;
`;

export const UserNameLogout = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  align-self: center;
`;

export const PressLogin = styled.TouchableOpacity``;

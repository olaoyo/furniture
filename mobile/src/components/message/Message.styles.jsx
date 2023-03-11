import styled from "styled-components/native";

export const MessageGrid = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MessageText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.grey.one};
  text-transform: capitalize;
  padding-top: 10px;
`;

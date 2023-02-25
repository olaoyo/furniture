import { FlatList } from "react-native";
import styled from "styled-components/native";

export const FurnitureFlatList = styled(FlatList)`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const FurnitureStyles = styled.TouchableOpacity`
  flex: 1;
`;

export const FurnitureGrid = styled.View`
  margin: 30px;
  align-items: center;
`;

export const FurnitureImage = styled.Image`
  width: 113px;
  height: 91px;
  margin-bottom: 10px;
`;

export const FurnitureTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  text-align: center;
  margin: 10px 0;
`;

export const FurniturePrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;

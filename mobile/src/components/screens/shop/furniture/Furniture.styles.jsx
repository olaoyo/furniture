import { FlatList } from "react-native";
import styled from "styled-components/native";

export const FurnitureFlatList = styled(FlatList)`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const FurnitureStyles = styled.View`
  flex: 1;
`;

export const FurnitureGrid = styled.View`
  margin: 30px;
`;

export const FurnitureImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const FurnitureTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  text-align: center;
`;

export const FurniturePrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;

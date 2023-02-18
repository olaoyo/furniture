import styled from "styled-components/native";

export const PopularStyles = styled.View`
  flex-direction: row;
  height: 200px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const PopularGrid = styled.View`
  margin: 40px;
  justify-content: center;
  align-items: center;
`;

export const PopularSideTable = styled.Image`
  width: 113px;
  height: 91px;
  margin-bottom: 10px;
`;

export const PopularSofa = styled.Image`
  width: 102.47px;
  height: 73.78px;
  margin-bottom: 20px;
`;

export const PopularHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
`;

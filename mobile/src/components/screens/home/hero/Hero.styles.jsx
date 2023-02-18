import styled from "styled-components/native";

export const HeroStyles = styled.View`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primary};
  align-self: center;
  padding: 30px 50px 0 80px;
`;

export const HeroText = styled.View`
  flex-direction: column;
`;

export const HeroHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  width: 150px;
  padding: 20px 0;
`;

export const HeroImage = styled.Image`
  width: 220px;
  height: 220px;
`;

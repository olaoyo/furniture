import styled from "styled-components/native";

export const SafeAreaiOS = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.primary};
`;

export const SafeAreaAndroid = styled.View`
  margin-top: 38px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

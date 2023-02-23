import styled from "styled-components/native";

export const DescriptionStyles = styled.View`
  background: ${({ theme }) => theme.colors.accents};
  margin: 20px 0;;
  `;

export const DescriptionInfo = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.body};
    text-align: justify;
    margin: 30px;
`
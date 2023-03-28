import styled, { css } from "styled-components/native";

export const Form = styled.View`
  height: 100px;
  justify-content: center;
`;

export const TextTouch = styled.TouchableOpacity``;

export const TextInfo = styled.Text`
  ${({ header, button, error }) =>
    header
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSizes.h5};
        `
      : button
      ? css`
          font-family: ${({ theme }) => theme.fonts.regular};
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSizes.button};
        `
      : error
      ? css`
          font-family: ${({ theme }) => theme.fonts.regular};
          color: ${({ theme }) => theme.colors.purple};
          font-size: ${({ theme }) => theme.fontSizes.caption};
          justify-content: center;
        `
      : css``}
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin: ${({ theme }) => theme.layout.one};
`;

export const InputCard = styled.View``;

export const AuthInputGrid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AuthInput = styled.TextInput`
  ${({ error, errorMedium, medium }) =>
    error
      ? css`
          font-family: ${({ theme }) => theme.fonts.regular};
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSizes.body};
          width: 300px;
          height: 50px;
          border-width: 2px;
          border-radius: 10px;
          border-color: ${({ theme }) => theme.colors.purple};
          padding: 0 15px;
        `
      : errorMedium
      ? css`
          font-family: ${({ theme }) => theme.fonts.regular};
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSizes.body};
          width: 140px;
          height: 50px;
          border-width: 2px;
          border-radius: 10px;
          border-color: ${({ theme }) => theme.colors.purple};
          padding: 0 15px;
        `
      : medium
      ? css`
          font-family: ${({ theme }) => theme.fonts.regular};
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSizes.body};
          width: 140px;
          height: 50px;
          border-width: 1px;
          border-radius: 10px;
          padding: 0 15px;
        `
      : css`
          font-family: ${({ theme }) => theme.fonts.regular};
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSizes.body};
          width: 300px;
          height: 50px;
          border-width: 1px;
          border-radius: 10px;
          padding: 0 15px;
        `}
`;

export const CheckboxAndText = styled.View`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
  align-items: center;
`;

export const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.body};
  ${({ regular, medium, bold }) =>
    regular
      ? css`
          font-family: ${({ theme }) => theme.fonts.regular};
        `
      : medium
      ? css`
          font-family: ${({ theme }) => theme.fonts.medium};
        `
      : bold
      ? css`
          font-family: ${({ theme }) => theme.fonts.bold};
        `
      : css``}
`;

export const LoginAndRegister = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

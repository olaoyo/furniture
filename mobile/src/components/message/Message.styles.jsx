import styled from "styled-components/native";

export const MessageText = styled.Text`
    font-size: ${({ theme }) => theme.fontSizes.title};
    color: ${({ theme }) => theme.colors.grey.one};
    text-transform: capitalize;
    padding-top: 10rem;
`
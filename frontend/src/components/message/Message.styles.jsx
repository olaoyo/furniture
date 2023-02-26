import styled from "styled-components";

export const MessageText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
    color: ${({ theme }) => theme.colors.grey.one};
    text-transform: capitalize;
    padding-top: 10rem;
`
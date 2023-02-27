import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadingStyles = styled.div`
  grid-column: left-start / right-end;
  grid-template-columns: 1fr;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2rem;
  padding-top: 10rem;
  justify-items: center;
  align-items: center;
`;

export const LoadingSpinner = styled.div`
  width: 10rem;
  height: 10rem;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 90%;
  border-top: none;
  margin: 16px auto;
  animation: ${spinner} 0.3s linear infinite;
`;

export const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.one};
`;
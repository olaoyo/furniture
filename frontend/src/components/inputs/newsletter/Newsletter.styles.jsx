import styled from "styled-components";

export const NewsletterStyles = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const NewsletterInput = styled.input`
  width: 17.3rem;
  height: 2.1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1.5rem 0;

  :focus {
    outline: none;
  }

  :focus:invalid {
    border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.one};
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p5};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-weight: 400;
  }
`;

export const NewsletterButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  width: 7.5rem;
  text-transform: uppercase;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#ffffff5f, 0.2);
    cursor: pointer;
  }

`;

import styled from "styled-components";

export const SearchForm = styled.form`
  grid-column: 4 / span 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 22.2rem;
  height: 4rem;

  align-self: center;
`;

export const SearchButton = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.white};
  width: 4rem;
  height: 4rem;
  border-radius: 35px 0 0 35px;
  border: none;
  span {
    align-self: center;
    justify-self: center;
  }

  :hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white.one};
  width: 18.2rem;
  height: 4rem;
  border: none;
  border-radius: 0 35px 35px 0;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  padding: 1rem;

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.one};
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
    font-weight: 400;
  }
`;

import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ center }) =>
    center
      ? css`
          grid-column: 5 / span 2;
          display: grid;
          grid-template-rows: repeat(5, max-content);
          row-gap: 4rem;

          justify-self: center;
        `
      : css`
          grid-column: 6 / span 2;
          display: grid;
          grid-template-rows: repeat(5, max-content);
          row-gap: 4rem;

          justify-self: center;
        `}
`;

export const Header = styled.h5`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const LabelAndInput = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2rem;

  ${({ gridStart, gridEnd, gridColumn }) =>
    gridStart
      ? css`
          justify-self: start;
        `
      : gridEnd
      ? css`
          justify-self: end;
        `
      : gridColumn
      ? css`
          grid-template-columns: repeat(2, max-content);
          column-gap: 2rem;
        `
      : css``}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Input = styled.input`
  width: 42.3rem;
  height: 7.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey.one};
  border-radius: 8px;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(${({ theme }) => theme.colors.gold.two}, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &:focus:invalid {
    border: 1px solid ${({ theme }) => theme.colors.gold.one};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.two};
  }

  ${({ medium, radio }) =>
    medium
      ? css`
          width: 19.15rem;
        `
      : radio
      ? css`
          width: 2rem;
          height: 2rem;
          border: 1px solid transparent;
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.grey.one};
          font-size: ${({ theme }) => theme.fontSizes.headers.h7};
          font-weight: 400;
          padding-left: 2rem;
        `
      : css``}
`;

export const MediumInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
`;

export const CheckboxAndText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 3rem;
  height: 2.7rem;
  border: 1px solid ${({ theme }) => theme.colors.grey.one};
  border-radius: 5px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  ${({ light, regular }) =>
    light
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.light};
        `
      : regular
      ? css`
          font-weight: ${({ theme }) => theme.fontWeights.regular};
        `
      : ``}
`;

export const LoginAndRegister = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 3rem;
  align-items: center;
`;

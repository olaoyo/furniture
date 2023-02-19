import styled, { css } from "styled-components";

export const PurchaseStyles = styled.div`
  grid-column: left-start / right-end;
  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));

  margin: 8rem 0 4.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.two};
  padding-bottom: 5.5rem;
`;

export const ImgSmallGrid = styled.div`
  grid-column: 2 / span 1;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  row-gap: 3rem;
  margin-left: -2rem;
`;

export const ImgSmall = styled.img`
  background: ${({ theme }) => theme.colors.accents};
  width: 7.6rem;
  height: 8rem;

  border: none;
  border-radius: 10px;
`;

export const ImgBigGrid = styled.div`
  grid-column: 3 / span 3;
  display: grid;
  grid-template-columns: 1fr;

  background: ${({ theme }) => theme.colors.accents};
  grid-column: 3 / span 4;
  width: 42.3rem;
  height: 50rem;
  border-radius: 10px;
`;

export const ImgBig = styled.img`
  width: 42.3rem;
  height: auto;
  border: none;
  border-radius: 10px;
  justify-self: center;
  align-self: center;
`;

export const DetailsGrid = styled.div`
  grid-column: 7 / span 4;

  display: grid;
  grid-template-rows: repeat(8, max-content);
`;

export const DetailsHeader = styled.h4`
  width: 60rem;
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: -1rem;
`;

export const DetailsP1P2 = styled.p`
  ${({ grey }) =>
    grey
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : css`
          color: ${({ theme }) => theme.colors.black};
        `};

  ${({ p1 }) =>
    p1
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
        `}
`;

export const DetailsP3P5 = styled.p`
  ${({ grey }) =>
    grey
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : css`
          color: ${({ theme }) => theme.colors.black};
        `};

  ${({ p3 }) =>
    p3
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p5};
        `}

  ${({ ml }) =>
    ml
      ? css`
          margin-left: -2rem;
        `
      : css``}
`;

export const DetailsP6 = styled.p`
  ${({ grey }) =>
    grey
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
        `
      : css`
          color: ${({ theme }) => theme.colors.black};
        `};

  ${({ p6 }) =>
    p6
      ? css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p6};
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p7};
        `}
`;

export const Reviews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
`;

export const RatingGrid = styled.div`
  width: 18rem;
  margin-top: 0.5rem;
  margin: 1.5rem 0 1.5rem 0;
`;

export const ReviewsButton = styled.button`
  display: grid;
  grid-template-columns: 1fr;

  background: transparent;
  width: 20.2rem;
  height: 3.7rem;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.grey.one};
  padding: 0 0 0 2rem;
  justify-items: start;
  align-items: center;
`;

export const Description = styled.div`
  width: 50rem;
`;

export const SizeAndColorGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  margin-top: .5rem;
  row-gap: 1.3rem;
`;

export const SizeAndColor = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 12.3rem;
  height: 3rem;
`;

export const SizeBg = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  justify-items: center;
  align-items: center;

  ${({ selected }) =>
    selected
      ? css`
          background: ${({ theme }) => theme.colors.primary};
        `
      : css`
          background: ${({ theme }) => theme.colors.secondary};
        `}
`;

export const ColorBg1 = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  justify-items: center;
  align-items: center;

  ${({ purple }) =>
    purple
      ? css`
          background: ${({ theme }) => theme.colors.purple};
        `
      : css`
          background: ${({ theme }) => theme.colors.black};
        `}
`;

export const ColorBg2 = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  justify-items: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gold.one};
`;

export const QtyAddToCart = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey.two};
  margin: 3.1rem 0 4rem 0;
  padding-bottom: 6rem;
  column-gap: 2rem;
`;

export const Qty = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 12.3rem;
  height: 6.4rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey.one};
  justify-items: center;
  align-items: center;
`;

export const AddRemove = styled.div`
  display: grid;
  grid-template-columns: 1, max-content;
`;

export const Tags = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  width: 20rem;
  row-gap: 1.4rem;
`;

export const Tag = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  margin-left: -2rem;
  /* padding-right: 30rem; */
`;

export const Social = styled.div`
  padding: 0 0.5rem;

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grey.one};
  }
`;

import styled from "styled-components";

export const BlogStyles = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
  padding-bottom: 6.3rem;
`;

export const BlogTextGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1rem;
  justify-items: center;
  margin: 5.5rem 0 2rem 0;
`;

export const BlogHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const BlogParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey.one};
`;

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 10rem;
  justify-self: center;
  margin-bottom: 7.5rem;
`;

export const BlogDetails = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  justify-items: center;
  row-gap: 1.8rem;
`;

export const BlogImg = styled.img`
  width: 39.3rem;
  height: 39.3rem;
  margin-bottom: 1.3rem;
`;

export const BlogParagraph2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const BlogIconDateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
`;

export const BlogIconDateTime = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1rem;
`;

export const BlogIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p7};
  width: 2.4rem;
  height: 2.4rem;
`;

export const BlogDateTime = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.black};
`;

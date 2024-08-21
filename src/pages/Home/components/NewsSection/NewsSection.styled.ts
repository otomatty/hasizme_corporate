import { styled } from "solid-styled-components";

export const NewsContainer = styled.section`
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const NewsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const NewsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const NewsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const NewsImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
`;

export const NewsDate = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;

export const NewsItemTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

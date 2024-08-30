import { styled } from 'solid-styled-components';

export const NewsContainer = styled('div')`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const NewsTitle = styled('h1')`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const NewsList = styled('ul')`
  list-style: none;
  padding: 0;
`;

export const NewsListItem = styled('li')`
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;

  &:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const NewsItemTitle = styled('h2')`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const NewsDate = styled('p')`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const NewsExcerpt = styled('p')`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0 0;
`;

export const LoadingMessage = styled('p')`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

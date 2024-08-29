import { styled } from 'solid-styled-components';

export const BlogContainer = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BlogList = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const BlogItem = styled('article')`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const BlogImage = styled('img')<{ isDefault: boolean }>`
  width: 100%;
  height: 200px;
  object-fit: ${(props) => (props.isDefault ? 'contain' : 'cover')};
`;

export const BlogTitle = styled('h2')`
  font-size: 1.5rem;
  margin: 1rem;
  color: #333;
`;

export const BlogMeta = styled('p')`
  font-size: 0.9rem;
  color: #666;
  margin: 0 1rem;
`;

export const BlogTags = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 1rem;
`;

export const Tag = styled('li')`
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

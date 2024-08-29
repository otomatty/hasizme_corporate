import { styled } from 'solid-styled-components';

export const RelatedPostsContainer = styled('div')`
  margin-top: 4rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 2rem;
`;

export const RelatedPostsTitle = styled('h3')`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

export const RelatedPostsList = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const RelatedPostItem = styled('article')`
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const RelatedPostImage = styled('img')`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const RelatedPostTitle = styled('h4')`
  font-size: 1rem;
  margin: 0.75rem;
  color: #333;
`;

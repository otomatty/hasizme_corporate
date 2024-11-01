import { styled } from 'solid-styled-components';

export const BlogSectionContainer = styled.section`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BlogTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BlogItem = styled.a`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const BlogImage = styled.img<{ isDefault: boolean }>`
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  object-fit: ${(props) => (props.isDefault ? 'contain' : 'cover')};
  border-radius: 4px;
`;

export const BlogItemTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  line-height: 1.4;
`;

export const BlogMeta = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const BlogTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
`;

export const Tag = styled.li`
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MoreBlogButton = styled.a`
  display: block;
  width: 200px;
  padding: 1rem;
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  margin: 1rem auto 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

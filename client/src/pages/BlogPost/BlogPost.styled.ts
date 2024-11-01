import { styled } from 'solid-styled-components';

export const BlogContainer = styled('div')`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

export const BlogTitle = styled('h1')`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
  text-align: left;
`;

export const BlogMeta = styled('p')`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: left;
`;

export const BlogContent = styled('div')`
  font-size: 1.1rem;
  text-align: left;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #1a1a1a;
  }

  p {
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 2rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  a {
    color: #0066cc;
    text-decoration: none;
    border-bottom: 1px solid #0066cc;
    transition: border-bottom-color 0.2s ease;

    &:hover {
      border-bottom-color: transparent;
    }
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #0066cc;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #555;
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin-bottom: 1.5rem;

    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;

export const BlogTags = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const Tag = styled('li')`
  background-color: #f0f0f0;
  color: #333;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

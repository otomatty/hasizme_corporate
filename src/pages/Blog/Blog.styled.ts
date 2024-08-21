import { styled } from "solid-styled-components";

export const BlogContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const BlogPost = styled("section")`
  margin: 2rem 0;
  text-align: center;
`;

export const BlogTitle = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const BlogContent = styled("p")`
  font-size: 1.25rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;
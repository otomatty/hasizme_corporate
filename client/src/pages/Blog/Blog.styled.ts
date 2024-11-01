import { styled } from "solid-styled-components";
import { A } from "@solidjs/router";

export const BlogContainer = styled("div")`
  background-color: #f5f5f5;
  padding: 3rem 0;
`;

export const BlogList = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const BlogItem = styled("article")`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const BlogImage = styled("img")<{ isDefault: boolean }>`
  width: 100%;
  height: 200px;
  object-fit: ${(props) => (props.isDefault ? "contain" : "cover")};
  border-bottom: 1px solid #e0e0e0;
`;

export const BlogTitle = styled("h2")`
  font-size: 1.25rem;
  margin: 1rem;
  color: #333;
  font-weight: 600;
`;

export const BlogMeta = styled("p")`
  font-size: 0.9rem;
  color: #666;
  margin: 0 1rem 0.5rem;
`;

export const BlogExcerpt = styled("p")`
  font-size: 1rem;
  color: #444;
  margin: 0 1rem 1rem;
  flex-grow: 1;
`;

export const ReadMoreLink = styled(A)`
  display: inline-block;
  margin: 0 1rem 1rem;
  padding: 0.5rem 1rem;
  background-color: #0066cc;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;

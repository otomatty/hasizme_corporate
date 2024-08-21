import { styled } from "solid-styled-components";

export const ProductsContainer = styled("section")`
  text-align: center;
  margin: 2rem 0;
`;

export const ProductsTitle = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductsContent = styled("p")`
  font-size: 1.25rem;
  color: #555;
`;

export const ProductsGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const MoreButton = styled("button")`
  display: block;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

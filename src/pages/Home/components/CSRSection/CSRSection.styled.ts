import { styled } from "solid-styled-components";

export const CSRContainer = styled("section")`
  text-align: center;
  margin: 2rem 0;
  width: 100%;
  overflow: hidden;
`;

export const CSRTitle = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CSRCard = styled("div")`
  background-color: var(--base-color);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

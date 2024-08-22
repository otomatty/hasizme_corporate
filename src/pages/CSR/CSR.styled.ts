import { styled } from "solid-styled-components";

export const CSRContainer = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const CSRTitle = styled("h1")`
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
`;

export const CSRGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

export const CSRCard = styled("div")`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CSRCardImage = styled("img")`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CSRCardTitle = styled("h3")`
  font-size: 1.2rem;
  margin: 1rem;
  text-align: center;
  color: var(--primary-color);
`;

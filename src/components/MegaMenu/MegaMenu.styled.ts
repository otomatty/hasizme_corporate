import { styled } from "solid-styled-components";

export const MegaMenuContainer = styled("div")<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};
  background-color: #f5f5f5;
  padding: 1rem 0;
`;

export const MegaMenuContent = styled("div")<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-wrap: wrap;
  gap: 1rem;
`;

export const MegaMenuItem = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: var(--text-color);
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: var(--primary-color);
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

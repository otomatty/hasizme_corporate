import { styled } from "solid-styled-components";

export const StyledButton = styled("button")`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darken(var(--primary-color), 10%);
  }
`;

import { styled } from "solid-styled-components";

export const HeaderContainer = styled("header")`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled("a")`
  color: white;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

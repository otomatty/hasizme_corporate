import { styled } from "solid-styled-components";

export const NavbarContainer = styled("nav")`
  background-color: #444;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled("a")<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "yellow" : "white")};
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

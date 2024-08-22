import { styled } from "solid-styled-components";

export const NavbarContainer = styled("nav")`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavLink = styled("a")<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "yellow" : "white")};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

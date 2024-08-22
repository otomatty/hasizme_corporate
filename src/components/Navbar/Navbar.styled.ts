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
  color: ${({ isActive }) =>
    isActive ? "var(--primary-color)" : "var(--font-color)"};
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;

  &:hover {
    color: var(--primary-color);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary-color);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

import { styled } from "solid-styled-components";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
`;

export const Logo = styled("div")`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HamburgerButton = styled("button")`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavbarContainer = styled("div")<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--primary-color);
    padding: 1rem;
  }
`;

export const NavLink = styled("a")`
  color: white;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

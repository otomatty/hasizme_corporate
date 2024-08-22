import { styled } from "solid-styled-components";

export const HeaderContainer = styled("header")<{ isVisible: boolean }>`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-150%")});
`;

export const LogoWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    display: inline-block;
  }

  img {
    height: 40px;
    width: auto;
  }
`;

export const CompanyName = styled("h1")`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
`;

export const NavWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
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

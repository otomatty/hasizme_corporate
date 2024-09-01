import { styled } from 'solid-styled-components';

export const NavbarContainer = styled('nav')`
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NavItem = styled('div')`
  position: relative;
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';

    height: 60%;
    width: 1px;
    background-color: #e0e0e0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const NavButton = styled('button')<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  color: ${(props) => (props.isActive ? 'var(--primary-color)' : 'inherit')};
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    transform: scaleX(${(props) => (props.isActive ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const MegaMenu = styled('div')<{ isActive: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
`;

export const MegaMenuContent = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 0;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const MobileNavItem = styled.li`
  list-style: none;
  width: 100%;
`;

export const MobileNavButton = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#0080ff' : 'inherit')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-right: 10px;
  }
`;

export const SubMenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 1rem;
`;

export const SubMenuItem = styled.li`
  list-style: none;
  margin: 0.5rem 0;
`;

export const SubMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: inherit;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #f0f0f0;
  }
`;

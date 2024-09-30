import { styled } from "solid-styled-components";

export const HeaderContainer = styled("header")<{
  isVisible: boolean;
  isExpanded: boolean;
}>`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out, height 0.3s ease-in-out;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-150%")});
`;

export const HeaderTopRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* 追加 */
`;

export const LogoWrapper = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 1rem 0;

  @media (min-width: 1200px) {
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  img {
    height: 40px;
    margin-right: 0.5rem;
  }
`;

export const CompanyName = styled("h1")`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0.2rem 0 0 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeaderRight = styled("div")`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
`;

export const HeaderBottomRow = styled("div")`
  border-top: 1px solid #e0e0e0;
`;

export const HeaderExpanded = styled("div")<{ isActive: boolean }>`
  display: none;
  background-color: #f5f5f5;

  @media (min-width: 1200px) {
    display: ${(props) => (props.isActive ? "block" : "none")};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

// ハンバーガーメニューが開いたときのスタイル
interface NavLinksOpenProps {
  isOpen: boolean;
}

export const NavLinksOpen = styled("nav")<NavLinksOpenProps>`
  @media (max-width: 1200px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const NavItem = styled("li")`
  list-style: none;
`;

export const NavButton = styled("button")<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: ${(props) => (props.isActive ? "#0080ff" : "white")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

  &:hover {
    color: #0080ff;
  }
`;

export const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SlideInMenuContainer = styled("div")<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%; /* 画面全体に広がるように修正 */
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;

export const SlideInMenuOverlay = styled("div")<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;
  z-index: 1001;
`;

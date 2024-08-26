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
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out, height 0.3s ease-in-out;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
  overflow: hidden;
`;

export const HeaderTopRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const HeaderBottomRow = styled("div")`
  border-top: 1px solid #e0e0e0;
`;

export const LogoWrapper = styled("div")`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    height: 40px;
    margin-right: 1rem;
    transition: filter 0.2s ease-in-out;
  }

  &:hover img {
    filter: brightness(1.2);
  }
`;

export const CompanyName = styled("h1")`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  transition: color 0.2s ease-in-out;
`;

export const HeaderExpanded = styled("div")<{ isActive: boolean }>`
  max-height: ${(props) => (props.isActive ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background-color: #f5f5f5;
`;

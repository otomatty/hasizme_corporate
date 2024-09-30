import { styled } from "solid-styled-components";

export const StyledHamburgerButton = styled("button")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;

  @media (min-width: 375px) {
    width: 6rem;
    height: 6rem;
    background: var(--primary-color);
    border: none;
    border-radius: 0 0 0 50%;
    position: absolute;
    top: 0;
    right: -1rem;
    z-index: 1001;
    color: #fff;
  }

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
    right: -2rem;
  }

  @media (min-width: 992px) {
    right: -3rem;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const HamburgerIcon = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    background-color: var(--primary-color);
    width: 2rem;
    height: 4px;
    border-radius: 4px;
    margin: 4px 0;
    transition: all 0.3s ease;

    @media (min-width: 375px) {
      width: 2.4rem;
      height: 6px;
      background-color: #fff;
    }
  }
`;

export const MenuText = styled("p")`
  margin: 4px 0 0;
  font-size: 0.8rem;
  font-weight: bold;

  @media (min-width: 375px) {
    font-size: 1rem;
  }
`;

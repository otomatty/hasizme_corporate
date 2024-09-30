import { Component } from "solid-js";
import {
  StyledHamburgerButton,
  HamburgerIcon,
  MenuText,
} from "./HamburgerButton.styled";

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton: Component<HamburgerButtonProps> = (props) => {
  return (
    <StyledHamburgerButton onClick={props.onClick}>
      <HamburgerIcon>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <MenuText>メニュー</MenuText>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;

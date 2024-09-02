import { Component } from 'solid-js';
import { StyledHamburgerButton } from './HamburgerButton.styled';

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton: Component<HamburgerButtonProps> = (props) => {
  return (
    <StyledHamburgerButton onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;

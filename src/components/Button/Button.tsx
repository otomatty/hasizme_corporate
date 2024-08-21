import { JSX } from "solid-js";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  children: JSX.Element;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;

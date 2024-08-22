import { JSX } from "solid-js";
import { StyledButton, IconWrapper } from "./Button.styled";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "danger"
  | "success";

interface ButtonProps {
  children: JSX.Element;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  color?: ButtonColor;
}

function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
  icon,
  iconPosition = "left",
  color = "primary",
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      class={className}
      hasIcon={!!icon}
      iconPosition={iconPosition}
      color={color}
    >
      {icon && iconPosition === "left" && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {icon && iconPosition === "right" && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  );
}

export default Button;

import { styled } from "solid-styled-components";
import { ButtonColor } from "./Button";

interface StyledButtonProps {
  hasIcon: boolean;
  iconPosition: "left" | "right";
  color: ButtonColor;
}

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case "primary":
      return "var(--primary-color)";
    case "secondary":
      return "#a0a0a0"; // より明るいグレー
    case "accent":
      return "var(--accent-color)";
    case "danger":
      return "#dc3545";
    case "success":
      return "#28a745";
    default:
      return "var(--primary-color)";
  }
};

export const StyledButton = styled("button")<StyledButtonProps>`
  background-color: ${(props) => getButtonColor(props.color)};
  color: white;
  padding: ${(props) => (props.hasIcon ? "0.75rem 1.25rem" : "0.75rem 1.5rem")};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: ${(props) =>
    props.iconPosition === "left" ? "row" : "row-reverse"};

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transform: translateY(0);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 6px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const IconWrapper = styled("span")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
`;

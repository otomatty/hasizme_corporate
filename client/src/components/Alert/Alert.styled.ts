import { styled } from "solid-styled-components";

const alertColors = {
  success: "#d4edda",
  error: "#f8d7da",
  warning: "#fff3cd",
  info: "#d1ecf1",
};

export const AlertContainer = styled("div")<{
  type: "success" | "error" | "warning" | "info";
}>`
  padding: 1rem;
  border-radius: 4px;
  background-color: ${({ type }) => alertColors[type]};
  color: ${({ type }) =>
    type === "error"
      ? "#721c24"
      : type === "warning"
      ? "#856404"
      : type === "info"
      ? "#0c5460"
      : "#155724"};
  border: 1px solid
    ${({ type }) =>
      type === "error"
        ? "#f5c6cb"
        : type === "warning"
        ? "#ffeeba"
        : type === "info"
        ? "#bee5eb"
        : "#c3e6cb"};
`;

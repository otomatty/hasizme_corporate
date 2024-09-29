import { AlertContainer } from "./Alert.styled";

interface AlertProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

function Alert({ message, type }: AlertProps) {
  return <AlertContainer type={type}>{message}</AlertContainer>;
}

export default Alert;

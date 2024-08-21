import { JSX } from "solid-js";
import { StyledContainer } from "./Container.styled";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

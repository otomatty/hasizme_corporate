import { styled } from "solid-styled-components";

interface HeroProps {
  hasImage?: boolean;
}

export const HeroContainer = styled("div")<HeroProps>`
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background-color: ${(props) => (props.hasImage ? "transparent" : "#f0f0f0")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroFilter = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HeroTitle = styled("h1")<HeroProps>`
  position: ${(props) => (props.hasImage ? "absolute" : "static")};
  top: ${(props) => (props.hasImage ? "50%" : "auto")};
  left: ${(props) => (props.hasImage ? "50%" : "auto")};
  transform: ${(props) => (props.hasImage ? "translate(-50%, -50%)" : "none")};
  color: ${(props) => (props.hasImage ? "white" : "var(--primary-color)")};
  font-size: 3rem;
  text-align: center;
  z-index: 1;
`;

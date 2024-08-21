import { styled } from "solid-styled-components";

export const ModalContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled("div")`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
`;

export const CloseButton = styled("button")`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

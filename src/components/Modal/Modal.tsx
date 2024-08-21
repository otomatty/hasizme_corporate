import { ModalContainer, ModalContent, CloseButton } from "./Modal.styled";
import { JSX } from "solid-js";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

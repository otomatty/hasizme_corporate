import { JSX, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { ModalOverlay, ModalContent } from './Modal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export function Modal(props: ModalProps) {
  return (
    <Show when={props.isOpen}>
      <Portal>
        <ModalOverlay onClick={props.onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {props.children}
          </ModalContent>
        </ModalOverlay>
      </Portal>
    </Show>
  );
}

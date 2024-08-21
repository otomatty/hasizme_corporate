import { styled, keyframes } from "solid-styled-components";

export const ModalOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled("div")`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalContent = styled("div")`
  position: relative;
`;

export const CloseButton = styled("button")`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ProductImage = styled("img")`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled("h2")`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled("p")`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const ProductCategory = styled("span")<{ color: string }>`
  display: inline-block;
  background-color: ${(props) => props.color};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 16px;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled("div")`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

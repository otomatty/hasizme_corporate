import { styled } from "solid-styled-components";

export const MissionContainer = styled("div")`
  margin: 4rem 0;
`;

export const MissionCatchphrase = styled("h2")`
  font-size: 2rem;

  color: #333;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const MainTitle = styled("h3")`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;

  @media (min-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`;

export const MissionItemWrapper = styled("div")`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const MissionItem = styled("div")<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const MissionCircle = styled("div")`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MissionTitle = styled("h4")`
  font-size: 1rem;
  text-align: center;
  margin: 0;
  color: white;
  transition: transform 0.3s ease;
`;

export const ChevronWrapper = styled("div")<{ isOpen: boolean }>`
  transition: transform 0.3s ease, margin-top 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  margin-top: 0.5rem;

  .mission-circle:hover:hover & {
    margin-top: 1rem;
  }
`;

export const MissionContent = styled("div")<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  max-width: 60%;
  margin: 0 auto;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  text-align: left;
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: ${(props) => (props.isOpen ? "1rem" : "0 1rem")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  p {
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }

  strong {
    color: var(--primary-color);
  }
`;

export const MissionContentTitle = styled("h3")`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const MissionIcon = styled("span")`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

export const MissionContentText = styled("p")`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  white-space: pre-line;
  word-wrap: break-word;
`;

export const MissionContentWrapper = styled("div")`
  margin-top: 2rem;
`;

export const CloseButton = styled("button")`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--primary-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileItemWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileItem = styled("div")`
  background-color: var(--primary-color);
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const MobileTitle = styled("h3")`
  margin: 0;
  font-size: 1.2rem;
`;

export const ModalOverlay = styled("div")`
  text-align: left;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const ModalContent = styled("div")`
  background-color: #fff;
  padding: 3rem 1rem 1rem 1rem;
  height: 96vh;
  margin: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  overflow-y: auto;
`;

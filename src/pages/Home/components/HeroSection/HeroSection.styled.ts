import { styled } from "solid-styled-components";

export const HeroContainer = styled("section")`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const MissionContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MissionItem = styled("div")`
  flex: 1;
  margin: 0 1rem;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
  }
`;

export const MissionTitle = styled("div")`
  font-size: 1.5rem;
  color: #333;
`;

interface MissionContentProps {
  isOpen: boolean;
}

export const MissionContent = styled("div")<MissionContentProps>`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
`;

export const MissionSubtitle = styled("h4")`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
`;

export const MissionCatchphrase = styled("p")`
  font-size: 1.75rem;
  color: #555;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

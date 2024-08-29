import { styled } from 'solid-styled-components';

export const MissionContainer = styled('div')`
  margin: 4rem 0;
`;

export const MainTitle = styled('h2')`
  font-size: 1.6rem;
  text-align: center;
`;

export const MissionItemWrapper = styled('div')`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const MissionItem = styled('div')<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const MissionCircle = styled('div')`
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

export const MissionTitle = styled('h3')`
  font-size: 1rem;
  text-align: center;
  margin: 0;
  color: white;
  max-width: 100px;
  transition: transform 0.3s ease;
`;

export const ChevronWrapper = styled('div')<{ isOpen: boolean }>`
  transition: transform 0.3s ease, margin-top 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  margin-top: 0.5rem;

  .mission-circle:hover:hover & {
    margin-top: 1rem;
  }
`;

export const MissionContent = styled('div')<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  text-align: left;
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: ${(props) => (props.isOpen ? '1rem' : '0 1rem')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

export const MissionContentTitle = styled('h3')`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const MissionIcon = styled('span')`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

export const MissionContentText = styled('p')`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  white-space: pre-line;
  word-wrap: break-word;
`;

export const MissionContentWrapper = styled('div')`
  position: relative;
  margin-top: 2rem;
`;

export const CloseButton = styled('button')`
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

import { styled } from "solid-styled-components";

export const SliderContainer = styled("div")`
  overflow: hidden;
  width: 100%;
  padding: 2rem 0;
`;

export const SliderTrack = styled("div")`
  display: flex;
  gap: 2rem;
  width: fit-content;
  animation: scroll 100s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% / 10));
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const Slide = styled("div")`
  flex: 0 0 auto;
  width: 300px;
  height: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 250px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const SlideImage = styled("img")`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

export const SlideTitle = styled("h3")`
  font-size: 1.2rem;
  margin: 1rem;
  text-align: center;
  color: var(--primary-color);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

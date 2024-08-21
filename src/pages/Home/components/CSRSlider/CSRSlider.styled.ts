import { styled } from "solid-styled-components";

export const SliderContainer = styled("div")`
  overflow: hidden;
  width: 100%;
  padding: 2rem;
`;

export const SliderTrack = styled("div")`
  display: flex;
  gap: 1rem;
  animation: scroll 20s linear infinite;
  animation-play-state: running;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% - 1rem)); /* 100% + gap分を移動 */
    }
  }

  @media (max-width: 1024px) {
    animation: scroll 15s linear infinite;

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-200% - 2rem)); /* 200% + gap*2分を移動 */
      }
    }
  }

  @media (max-width: 768px) {
    animation: scroll 10s linear infinite;

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-300% - 3rem)); /* 300% + gap*3分を移動 */
      }
    }
  }

  &:hover {
    animation-play-state: paused; /* ホバー時にアニメーションを停止 */
  }
`;

export const Slide = styled("div")`
  flex: 0 0 auto;
  width: 20%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  @media (max-width: 1024px) {
    width: 33.33%; /* 3スライド表示 */
  }

  @media (max-width: 768px) {
    width: 50%; /* 2スライド表示 */
  }

  &:hover {
    transform: translateY(-10px); /* カードを少し浮き上がらせる */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* シャドウを強調 */
  }

  h3 {
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0;
  }
`;

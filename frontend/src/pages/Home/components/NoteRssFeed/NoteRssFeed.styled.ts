import { styled } from "solid-styled-components";

export const FeedContainer = styled.section`
  display: flex;
  margin: 0 auto 8rem auto;
  padding: 4rem 0 0 0;
`;

export const FeedInner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FeedMainVisual = styled.div`
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: rgb(18, 107, 210);
  background: linear-gradient(
    128deg,
    rgba(18, 107, 210, 1) 0%,
    rgba(34, 171, 100, 1) 51%,
    rgba(34, 171, 169, 1) 89%
  );
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease infinite;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #fff;

  @media (min-width: 768px) {
    border-radius: 8px 0 0 8px;
    margin-right: 20px;
    padding: 2rem;
    margin-bottom: 0;
  }

  h2 {
    font-size: 3rem;

    @media (min-width: 768px) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

export const NoteLogo = styled.img`
  height: 1em;
  vertical-align: bottom;
`;

export const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FeedItem = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  flex-direction: row; // 常に横並びにする
`;

export const FeedContent = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex
  flex-direction: column;
  justify-content: center; // 垂直方向の中央揃え
`;

export const FeedThumbnail = styled.img`
  width: 120px; // 固定幅に設定
  height: 120px; // 固定高さに設定
  object-fit: cover;
  margin-right: 20px;
`;

export const FeedTitle = styled.a`
  font-size: 18px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;

  &:hover {
    color: #0066cc;
  }
`;

export const FeedDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export const MoreButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #0066cc;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004999;
  }
`;

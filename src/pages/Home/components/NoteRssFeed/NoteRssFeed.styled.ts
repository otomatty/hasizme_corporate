import { styled } from 'solid-styled-components';

export const FeedContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const FeedItem = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeedThumbnail = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

export const FeedContent = styled.div`
  flex: 1;
  padding: 20px;
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

import { styled } from "solid-styled-components";

export const FeedContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const FeedItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

export const FeedTitle = styled.a`
  font-size: 18px;
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const FeedDate = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

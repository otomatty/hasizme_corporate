import { styled } from "solid-styled-components";

export const NewsContainer = styled.section`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NewsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const NewsContent = styled.div`
  display: flex;
  gap: 2rem;
  height: 800px;
`;

export const NewsVisual = styled.div`
  flex: 1;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const NewsList = styled.div`
  flex: 2;
  height: 100%;
`;

export const NewsItem = styled.a`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NewsImage = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  overflow: hidden;
  border-radius: 4px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 0.8rem;
  }
`;

export const NewsItemTitle = styled.h3`
  text-align: left;
  font-size: 1.6rem;
  margin: 0.5rem 0 0 0;
  line-height: 1.4;
`;

export const NewsDate = styled.p`
  text-align: left;
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

export const MoreNewsButton = styled.a`
  display: block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

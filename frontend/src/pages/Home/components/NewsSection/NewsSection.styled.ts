import { styled } from "solid-styled-components";

export const NewsContainer = styled.section`
  padding: 0 1rem 2rem 1rem;
  margin: 0 auto 4rem auto;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

export const NewsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (min-width: 1024px) {
  }
`;

export const NewsContent = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NewsList = styled.ul`
  flex: 2;
  height: 100%;
`;

export const NewsItem = styled.li`
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #e0e0e0;

  color: inherit;

  &:last-child {
    border-bottom: none;
  }
`;

export const NewsItemDetails = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NewsDate = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;

export const NewsItemTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
  font-weight: 500;
`;

export const MoreNewsButton = styled.a`
  display: block;
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

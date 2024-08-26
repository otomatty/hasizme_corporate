import { styled } from "solid-styled-components";

export const Section = styled("section")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const Title = styled("h2")`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

export const ContentWrapper = styled("div")`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled("div")`
  flex: 1;
`;

export const Image = styled("img")`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TextContent = styled("div")`
  text-align: left;
  flex: 2;
`;

export const Name = styled("h3")`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const Position = styled("p")`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #666;
`;

export const Message = styled("p")`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

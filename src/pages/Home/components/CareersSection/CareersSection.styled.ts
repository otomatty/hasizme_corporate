import { styled } from "solid-styled-components";
import { A } from "@solidjs/router";

export const CareersSectionContainer = styled("section")`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

export const CareersSectionTitle = styled("h2")`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

export const CareersSectionContent = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const CareerCard = styled("div")`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: calc(33.333% - 2rem);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CareerCardTitle = styled("h3")`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

export const CareerCardDescription = styled("p")`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const CareerCardLink = styled(A)`
  display: inline-block;
  margin-top: 1rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

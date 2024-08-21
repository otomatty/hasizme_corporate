import { styled } from "solid-styled-components";

export const AboutUsContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutUsImage = styled("img")`
  width: 100%;
  height: auto;
  border-radius: 8px;
  position: absolute;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    margin-bottom: 1rem;
  }
`;

export const AboutUsContent = styled("div")`
  width: 50%;
  text-align: left;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-left: 60%;
  margin-top: 10rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    padding: 1rem;
    margin-right: 0;
  }
`;

export const AboutUsSectionTitle = styled("h3")`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #444;
`;

export const AboutUsSectionContent = styled("p")`
  font-size: 1.125rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: justify;
`;

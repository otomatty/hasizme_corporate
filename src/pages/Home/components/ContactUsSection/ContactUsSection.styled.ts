import { styled } from "solid-styled-components";

export const ContactUsContainer = styled("section")`
  text-align: center;
  margin: 4rem 0;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ContactUsTitle = styled("h2")`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const ContactUsContent = styled("p")`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const ContactOptionsContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ContactOption = styled("div")`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 300px;
  text-align: left;
`;

export const ContactOptionTitle = styled("h3")`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ContactOptionDescription = styled("p")`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ContactButton = styled("a")`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

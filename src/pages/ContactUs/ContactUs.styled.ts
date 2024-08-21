import { styled } from "solid-styled-components";

export const ContactUsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const ContactForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
`;

export const FormField = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled("label")`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const FormInput = styled("input")`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormTextarea = styled("textarea")`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled("button")`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

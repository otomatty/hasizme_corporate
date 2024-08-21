import { styled } from "solid-styled-components";

export const CardContainer = styled("div")`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const CardTitle = styled("h2")`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

export const CardContent = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #555;
`;

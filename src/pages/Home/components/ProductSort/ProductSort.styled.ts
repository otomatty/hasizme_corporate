import { styled } from "solid-styled-components";

export const SortContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const SortSelect = styled("select")`
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

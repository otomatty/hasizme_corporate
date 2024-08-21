import { styled } from "solid-styled-components";

export const FilterContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FilterButton = styled("button")<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#0056b3" : "#f0f0f0")};
  }
`;

import { styled } from "solid-styled-components";

export const SearchContainer = styled("div")`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInputContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled("input")`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const SearchButton = styled("button")`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResetButton = styled("button")`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    background-color: #5a6268;
  }
`;

export const ButtonText = styled("span")`
  margin-left: 0.5rem;
`;

export const SuggestionList = styled("ul")`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const SuggestionItem = styled("li")`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

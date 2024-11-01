import { styled } from 'solid-styled-components';

export const SearchContainer = styled('div')`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchInput = styled('input')`
  display: block;
  width: 100%;
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  @media (min-width: 768px) {
    display: inline;
    width: auto;
  }
`;

export const ButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ButtonText = styled('span')`
  margin-left: 0.5rem;
`;

export const SuggestionList = styled('ul')`
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

export const SuggestionItem = styled('li')`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

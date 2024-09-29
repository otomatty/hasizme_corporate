import { styled } from 'solid-styled-components';

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    background-color: #f0f0f0;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }

    &.active {
      background-color: #3498db;
      color: #ffffff;
    }
  }
`;

export const FAQList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FAQItem = styled.li`
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ChevronIcon = styled('span')<{ open: boolean }>`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0)')};
  display: inline-block;
`;

export const FAQAnswer = styled('div')<{ open: boolean }>`
  text-align: left;
  max-height: ${(props) => (props.open ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: ${(props) => (props.open ? '1rem' : '0 1rem')};
`;

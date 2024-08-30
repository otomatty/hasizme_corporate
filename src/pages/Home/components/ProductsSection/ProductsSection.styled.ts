import { styled } from 'solid-styled-components';

export const ProductsContainer = styled('section')`
  text-align: center;
  margin: 2rem 0;
`;

export const ProductsTitle = styled('h2')`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductsContent = styled('p')`
  font-size: 1.25rem;
  color: #555;
`;

export const ProductsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const SearchSortContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

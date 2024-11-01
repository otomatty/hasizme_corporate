import { styled } from 'solid-styled-components';

export const ProductsContainer = styled('section')`
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const ProductsTitle = styled('h2')`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const ProductsContent = styled('p')`
  font-size: 1.25rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ProductsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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
    gap: 1rem;
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

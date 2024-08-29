import { styled } from 'solid-styled-components';

export const StyledContainer = styled('div')`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  max-width: 1600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 0 3rem;
  }

  @media (min-width: 1200px) {
    padding: 0 4rem;
  }
`;

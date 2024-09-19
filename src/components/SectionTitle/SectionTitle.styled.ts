import { styled } from 'solid-styled-components';

export const TitleContainer = styled('div')<{ align?: 'left' | 'center' }>`
  text-align: ${(props) => props.align || 'center'};
  margin-bottom: 2rem;
`;

export const Title = styled('h2')`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled('p')`
  font-size: 1rem;
  color: #666;
  margin: 0 auto;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

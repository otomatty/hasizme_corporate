import { styled } from "solid-styled-components";

export const GridContainer = styled("div")`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

import { styled } from "solid-styled-components";

export const GridContainer = styled("div")<{ itemsPerRow: number }>`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(${(props) => props.itemsPerRow}, 1fr);
`;

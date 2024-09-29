import { styled } from "solid-styled-components";

export const CSRDetailContainer = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const CSRDetailImage = styled("img")`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const CSRDetailTitle = styled("h1")`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

export const CSRDetailDescription = styled("p")`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const CSRDetailInfo = styled("div")`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;

  p {
    margin: 0.5rem 0;
  }
`;

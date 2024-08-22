import { styled } from "solid-styled-components";

export const CSRContainer = styled("section")`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export const CSRTitle = styled("h2")`
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
`;

export const CSRContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CSRLinkButton = styled("div")`
  margin-top: 2rem;

  a {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--primary-color-dark);
    }
  }
`;

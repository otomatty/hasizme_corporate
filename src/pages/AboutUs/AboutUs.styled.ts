import { styled } from "solid-styled-components";

export const AboutUsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Section = styled("section")`
  margin: 2rem 0;
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

export const Title = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled("p")`
  font-size: 1.25rem;
  color: #555;
  margin: 0 auto;
`;

export const LinkList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
`;

export const LinkItem = styled("li")`
  margin-bottom: 0.5rem;

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

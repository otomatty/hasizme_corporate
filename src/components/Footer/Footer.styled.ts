import { styled } from "solid-styled-components";

export const FooterContainer = styled("footer")`
  background-color: #333;
  color: #fff;
  padding: 3rem 0 1rem;
`;

export const FooterContent = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterSection = styled("div")`
  margin-bottom: 2rem;
`;

export const FooterTitle = styled("h3")`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled("a")`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const FooterBottom = styled("div")`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
`;

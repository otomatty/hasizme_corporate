import { styled } from "solid-styled-components";

export const Section = styled("section")`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled("h2")`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
`;

export const Table = styled("table")`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled("tr")`
  border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled("th")`
  text-align: center;
  padding: 1rem;
  background-color: #f8f8f8;
  font-weight: bold;
  width: 50px;
  vertical-align: top;
`;

export const TableData = styled("td")`
  padding: 1rem;
  text-align: left;
`;

export const List = styled("ul")`
  list-style-type: none;
  padding-left: 0;
  margin: 0.5rem 0 0;
`;

export const ListItem = styled("li")`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
`;

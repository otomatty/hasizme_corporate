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

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled("th")`
  text-align: left;
  padding: 1rem;
  background-color: #f8f8f8;
  font-weight: bold;
  width: 60%;
  vertical-align: top;
`;

export const TableData = styled("td")`
  padding: 1rem;
  vertical-align: top;
`;

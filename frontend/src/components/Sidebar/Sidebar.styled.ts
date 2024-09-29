import { styled } from "solid-styled-components";

export const SidebarContainer = styled("div")`
  width: 250px;
  background-color: #f8f9fa;
  padding: 1rem;
  border-right: 1px solid #ddd;
`;

export const SidebarItem = styled("div")`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

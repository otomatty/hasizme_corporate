import { styled } from "solid-styled-components";

export const OfficesContainer = styled("section")`
  padding: 2rem 0;
  width: 100%;
`;

export const OfficesTitle = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const OfficesContent = styled("div")`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const OfficesMapAndDetails = styled("div")`
  flex: 1;
`;

export const OfficesMap = styled("div")`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 8px;
  }
`;

export const OfficeDetails = styled("div")`
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.25rem 0;
  }
`;

export const OfficesList = styled("div")`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TabContainer = styled("div")`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TabButton = styled("button")<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "#e0e0e0")};
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }
`;

export const OfficeItem = styled("div")<{ selected: boolean }>`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "white")};

  &:hover {
    background-color: #f5f5f5;
  }

  h3 {
    margin: 0;
  }
`;

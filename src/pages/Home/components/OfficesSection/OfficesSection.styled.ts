import { styled } from "solid-styled-components";

export const OfficesContainer = styled("section")`
  margin-bottom: 8rem;
  padding: 2rem 0;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 1024px) {
    height: 85vh;
  }
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
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const OfficeDetailsGrid = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const OfficeImageWrapper = styled("div")`
  height: 300px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const OfficeImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const OfficeInfoAndMapWrapper = styled("div")`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OfficeInfo = styled("div")`
  flex: 1;
  text-align: left;
`;

export const OfficeMapWrapper = styled("div")`
  flex: 1;
  min-height: 300px;
`;

export const OfficeInfoItem = styled("div")`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const OfficeInfoIcon = styled("span")`
  margin-right: 0.75rem;
  font-size: 1.25rem;
  color: #666;
`;

export const OfficeInfoContent = styled("div")`
  flex: 1;
`;

export const OfficePostalCode = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

export const OfficeAddress = styled("p")`
  margin: 0.25rem 0 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

export const OfficePhone = styled("p")`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: #444;
`;

export const OfficeFax = styled("p")`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #666;
`;

export const OfficeInfoLabel = styled("span")`
  font-weight: 600;
  color: #333;
  margin-right: 0.5rem;
`;

export const OfficeInfoLink = styled("a")`
  color: #0066cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const OfficesMap = styled("div")`
  height: 100%;

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
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OfficeName = styled("h3")`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #333;
  letter-spacing: -0.5px;
`;

export const OfficesList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: calc(100% - 100px); // タブとページネーションの高さを考慮
  overflow-y: auto;
`;

export const OfficeItem = styled("li")<{ selected: boolean }>`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "white")};

  &:hover {
    background-color: #f5f5f5;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }
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

export const Pagination = styled("div")`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const PageButton = styled("button")<{ active?: boolean }>`
  margin: 0 0.25rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e0e0e0;
  background-color: ${(props) => (props.active ? "#f0f0f0" : "white")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const OfficesListContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const OfficesListContent = styled("div")``;

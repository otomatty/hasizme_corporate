import { styled } from "solid-styled-components";

export const StyledOrgChart = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledNode = styled.div`
  margin-bottom: 15px;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 12px;
  transition: all 0.3s ease;

  > div {
    display: flex;
    align-items: center;
  }

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #2980b9;
    }
  }
`;

export const StyledChildren = styled.div`
  margin-left: 25px;
  padding-left: 25px;
  border-left: 2px solid #e0e0e0;
`;

export const ToggleButton = styled.button`
  background: #f1f3f5;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  color: #495057;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
  }
`;

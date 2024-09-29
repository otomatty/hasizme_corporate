import { styled } from "solid-styled-components";

export const HistoryContainer = styled("div")`
  padding: 4rem 0;
`;

export const HistoryTitle = styled("h1")`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-color);
`;

export const Timeline = styled("ul")`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const TimelineItem = styled("li")`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
`;

export const Year = styled("span")`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
  width: 100px;
  flex-shrink: 0;
  text-align: right;
  margin-right: 2rem;
  padding-top: 0.2rem;
`;

export const Event = styled("p")`
  font-size: 1rem;
  color: #333;
  margin: 0;
  padding-left: 2rem;
  flex-grow: 1;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 0.5rem;
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    border-radius: 50%;
  }
`;

import { styled } from "solid-styled-components";

export const CareersContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled("section")`
  width: 100%;
  margin: 2rem 0;
`;

export const SectionTitle = styled("h2")`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

export const Content = styled("p")`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
`;

export const MessageCard = styled("div")`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-style: italic;
  }
`;

export const HistoryTimeline = styled("ul")`
  list-style-type: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 1rem;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--primary-color);
    }
  }
`;

export const DataPoint = styled("div")`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const JobDescription = styled("div")`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

export const DailySchedule = styled("ul")`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    &:before {
      content: "•";
      color: var(--primary-color);
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;

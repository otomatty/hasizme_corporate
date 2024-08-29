import { createSignal, For } from "solid-js";
import {
  HistoryContainer,
  HistoryTitle,
  Timeline,
  TimelineItem,
  Year,
  Event,
} from "./History.styled";
import Container from "../../components/Container/Container";
import { historyData } from "../../data/historyData";

function History() {
  const [events] = createSignal(historyData);

  return (
    <Container>
      <HistoryContainer>
        <HistoryTitle>沿革</HistoryTitle>
        <Timeline>
          <For each={events()}>
            {(item) => (
              <TimelineItem>
                <Year>{item.year}</Year>
                <Event>{item.event}</Event>
              </TimelineItem>
            )}
          </For>
        </Timeline>
      </HistoryContainer>
    </Container>
  );
}

export default History;

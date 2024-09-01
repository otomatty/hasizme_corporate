import { For } from 'solid-js';
import { timelineEvents } from '../../data/postDisasterJourneyData';
import {
  TimelineContainer,
  TimelineItem,
  TimelineDate,
  TimelineContent,
  TimelineWrapper,
} from './PostDisasterJourney.styled';

function PostDisasterJourney() {
  return (
    <TimelineWrapper>
      <h1>震災から今日までの歩み</h1>
      <TimelineContainer>
        <For each={timelineEvents}>
          {(event) => (
            <TimelineItem>
              <TimelineDate>{event.date}</TimelineDate>
              <TimelineContent>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </TimelineContent>
            </TimelineItem>
          )}
        </For>
      </TimelineContainer>
    </TimelineWrapper>
  );
}

export default PostDisasterJourney;

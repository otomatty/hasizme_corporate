import { Component, For } from "solid-js";
import { A } from "@solidjs/router";
import {
  SliderContainer,
  SliderTrack,
  Slide,
  SlideImage,
  SlideTitle,
} from "./CSRSlider.styled";
import { CSRActivity } from "../../../../types/csr";

interface CSRSliderProps {
  activities: CSRActivity[];
}

const CSRSlider: Component<CSRSliderProps> = (props) => {
  const repeatedActivities = [...props.activities, ...props.activities];

  return (
    <SliderContainer>
      <SliderTrack>
        <For each={repeatedActivities}>
          {(activity) => (
            <A href={`/csr/${activity.id}`}>
              <Slide>
                <SlideImage src={activity.thumbnail} alt={activity.title} />
                <SlideTitle>{activity.title}</SlideTitle>
              </Slide>
            </A>
          )}
        </For>
      </SliderTrack>
    </SliderContainer>
  );
};

export default CSRSlider;

import { Component, For } from "solid-js";
import { SliderContainer, SliderTrack, Slide } from "./CSRSlider.styled";

interface CSRSliderProps {
  activities: { title: string; description: string }[];
}

const CSRSlider: Component<CSRSliderProps> = (props) => {
  // activitiesを2回繰り返して表示するようにする
  const repeatedActivities = [...props.activities, ...props.activities];

  return (
    <SliderContainer>
      <SliderTrack>
        <For each={repeatedActivities}>
          {(activity) => (
            <Slide>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </Slide>
          )}
        </For>
      </SliderTrack>
    </SliderContainer>
  );
};

export default CSRSlider;

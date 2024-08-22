import { Component, For, createSignal, onMount } from "solid-js";
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
  const [visibleSlides, setVisibleSlides] = createSignal(3);

  onMount(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1200) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  });

  const repeatedActivities = [
    ...props.activities,
    ...props.activities,
    ...props.activities,
  ];

  return (
    <SliderContainer>
      <SliderTrack
        style={{
          width: `${100 * (repeatedActivities.length / visibleSlides())}%`,
        }}
      >
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

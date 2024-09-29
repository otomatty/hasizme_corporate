import { onMount } from "solid-js";
import { SectionTitleWrapper, Title, Description } from "./SectionTitle.styled";

const SectionTitle = (props: {
  id: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) => {
  let titleRef: HTMLDivElement | undefined;

  onMount(() => {
    if (titleRef) {
      const height = titleRef.offsetHeight;
      document.documentElement.style.setProperty(
        "--section-title-height",
        `${height}px`
      );
    }
  });

  return (
    <SectionTitleWrapper ref={titleRef} align={props.align}>
      <Title id={props.id}>{props.title}</Title>
      <Description>{props.description}</Description>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;

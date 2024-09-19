import { Component } from 'solid-js';
import { TitleContainer, Title, Description } from './SectionTitle.styled';

const SectionTitle: Component<{
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}> = (props) => {
  return (
    <TitleContainer id={props.id} align={props.align}>
      <Title>{props.title}</Title>
      {props.description && <Description>{props.description}</Description>}
    </TitleContainer>
  );
};

export default SectionTitle;

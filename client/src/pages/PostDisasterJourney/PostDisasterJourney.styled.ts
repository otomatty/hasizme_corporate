import { styled } from 'solid-styled-components';

export const JourneyContainer = styled('div')`
  padding: 2rem;
  overflow: hidden;
`;

export const TimelineWrapper = styled('div')`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const TimelineContainer = styled('div')`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1rem;
    height: 100%;
    width: 4px;
    background: #f0f0f0;
  }
`;

export const TimelineItem = styled('div')`
  position: relative;
  padding: 2rem 0 2rem 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 1rem;
    height: 1rem;
    background: #f45b69;
    border-radius: 50%;
    z-index: 1;
  }
`;

export const TimelineDate = styled('div')`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const TimelineContent = styled('div')`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const TimelineImage = styled('img')`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

import { createSignal, For } from 'solid-js';
import {
  ServiceCarouselContainer,
  ServicesList,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescriptionContainer,
  ServiceDescriptionTitle,
  ServiceDescriptionText,
  DescriptionWrapper,
  SliderContainer,
  Slide,
  IndicatorContainer,
  IndicatorDot,
} from './ServiceCarousel.styled';

export type ServiceType = {
  title: string;
  icon: string;
  description: string;
};

type ServiceCarouselProps = {
  services: ServiceType[];
  onServiceSelect: (index: number) => void;
};

function ServiceCarousel(props: ServiceCarouselProps) {
  const [selectedService, setSelectedService] =
    createSignal<ServiceType | null>(null);
  const [currentIndex, setCurrentIndex] = createSignal(-1);

  const handleCardClick = (service: ServiceType, index: number) => {
    setSelectedService(service);
    setCurrentIndex(index);
    props.onServiceSelect(index);
  };

  return (
    <ServiceCarouselContainer>
      <ServicesList>
        <For each={props.services}>
          {(service, index) => (
            <ServiceCard
              selected={selectedService()?.title === service.title}
              onClick={() => handleCardClick(service, index())}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceCard>
          )}
        </For>
      </ServicesList>
      <ServiceDescriptionContainer>
        <SliderContainer>
          <For each={props.services}>
            {(service, index) => (
              <Slide
                class={
                  selectedService()?.title === service.title
                    ? 'active'
                    : currentIndex() > index()
                    ? 'inactive'
                    : ''
                }
                data-service={service.title}
              >
                <DescriptionWrapper>
                  <ServiceDescriptionTitle>
                    {service.title}
                  </ServiceDescriptionTitle>
                  <ServiceDescriptionText>
                    {service.description}
                  </ServiceDescriptionText>
                </DescriptionWrapper>
              </Slide>
            )}
          </For>
        </SliderContainer>
      </ServiceDescriptionContainer>
      <IndicatorContainer>
        <For each={props.services}>
          {(_, index) => <IndicatorDot active={currentIndex() === index()} />}
        </For>
      </IndicatorContainer>
    </ServiceCarouselContainer>
  );
}

export default ServiceCarousel;

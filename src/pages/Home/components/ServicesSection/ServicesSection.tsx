import { createSignal, onMount } from "solid-js";
import { services } from "../../../../data/servicesData";
import Container from "../../../../components/Container/Container";
import {
  ServicesContainer,
  ServicesWrapper,
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
} from "./ServicesSection.styled";

type ServiceType = (typeof services)[0];

function ServicesSection() {
  const [selectedService, setSelectedService] =
    createSignal<ServiceType | null>(null);
  const [currentIndex, setCurrentIndex] = createSignal(-1);

  const handleCardClick = (service: ServiceType, index: number) => {
    setSelectedService(service);
    setCurrentIndex(index);
    const sectionTop =
      document.getElementById("services-section")?.offsetTop || 0;
    const sectionHeight = window.innerHeight;
    const targetScrollPosition = sectionTop + sectionHeight * index;
    window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionTop =
      document.getElementById("services-section")?.offsetTop || 0;
    const sectionHeight = window.innerHeight;

    if (scrollPosition >= sectionTop) {
      document.documentElement.style.scrollBehavior = "smooth";
      const index = Math.round((scrollPosition - sectionTop) / sectionHeight);
      setCurrentIndex(index);
      setSelectedService(services[index]);
    } else {
      setCurrentIndex(-1);
      setSelectedService(null);
      document.documentElement.style.scrollBehavior = "auto";
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <ServicesContainer id="services-section">
      <Container>
        <ServicesWrapper id="services-wrapper">
          <ServicesList>
            {services.map((service, index) => (
              <ServiceCard
                selected={selectedService()?.title === service.title}
                onClick={() => handleCardClick(service, index)}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceCard>
            ))}
          </ServicesList>
          <ServiceDescriptionContainer>
            <SliderContainer>
              {services.map((service, index) => (
                <Slide
                  class={
                    selectedService()?.title === service.title
                      ? "active"
                      : currentIndex() > index
                      ? "inactive"
                      : ""
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
              ))}
            </SliderContainer>
          </ServiceDescriptionContainer>
          <IndicatorContainer>
            {services.map((_, index) => (
              <IndicatorDot active={currentIndex() === index} />
            ))}
          </IndicatorContainer>
        </ServicesWrapper>
      </Container>
    </ServicesContainer>
  );
}

export default ServicesSection;

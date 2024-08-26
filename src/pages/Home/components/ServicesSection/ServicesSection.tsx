import { createSignal, onMount, onCleanup } from "solid-js";
import { services } from "../../../../data/servicesData";
import Container from "../../../../components/Container/Container";
import { useScrollLogic } from "../../../../utils/scrollLogic";
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
  const [isAtTop, setIsAtTop] = createSignal(false);
  const { isScrollingDown, controlScroll } = useScrollLogic();

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
    controlScroll();
    const scrollPosition = window.scrollY;
    const sectionTop =
      document.getElementById("services-section")?.offsetTop || 0;

    setIsAtTop(scrollPosition >= sectionTop);

    if (scrollPosition >= sectionTop) {
      document.documentElement.style.scrollBehavior = "smooth";
      const index = Math.round(
        (scrollPosition - sectionTop) / window.innerHeight
      );
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
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <ServicesContainer id="services-section">
      <Container>
        <ServicesWrapper
          id="services-wrapper"
          style={{
            "padding-top": isAtTop()
              ? isScrollingDown()
                ? "2rem"
                : "10rem"
              : "2rem",
          }}
        >
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

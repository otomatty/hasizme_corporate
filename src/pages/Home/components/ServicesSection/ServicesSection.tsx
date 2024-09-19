import { createSignal, onMount, createEffect } from 'solid-js';
import { services } from '../../../../data/servicesData';
import Container from '../../../../components/Container/Container';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useScrollLogic } from '../../../../utils/scrollLogic';
import Button from '../../../../components/Button/Button';
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesList,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServicesContentWrapper,
  ServiceDescriptionContainer,
  ServiceDescriptionTitle,
  ServiceDescriptionText,
  DescriptionWrapper,
  SliderContainer,
  Slide,
  IndicatorContainer,
  IndicatorDot,
  ModalOverlay,
  ModalContent,
} from './ServicesSection.styled';

type ServiceType = (typeof services)[0];

function ServicesSection() {
  const [selectedService, setSelectedService] =
    createSignal<ServiceType | null>(null);
  const [currentIndex, setCurrentIndex] = createSignal(-1);
  const [isAtTop, setIsAtTop] = createSignal(false);
  const [isDesktop, setIsDesktop] = createSignal(window.innerWidth >= 1024);
  const [isTablet, setIsTablet] = createSignal(window.innerWidth >= 768);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const { isScrollingDown, controlScroll } = useScrollLogic();
  const [sectionTitleHeight, setSectionTitleHeight] = createSignal(0);

  const handleCardClick = (service: ServiceType, index: number) => {
    if (isDesktop()) {
      setSelectedService(service);
      setCurrentIndex(index);
      const sectionTop =
        document.getElementById('services-section')?.offsetTop || 0;
      const sectionHeight = window.innerHeight;
      const targetScrollPosition = sectionTop + sectionHeight * index;
      window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    } else if (isTablet()) {
      setSelectedService(service);
      setCurrentIndex(index);
    } else {
      setSelectedService(service);
      setCurrentIndex(index);
      setIsModalOpen(true);
    }
  };

  const handleScroll = () => {
    if (isDesktop()) {
      controlScroll();
      const scrollPosition = window.scrollY;
      const sectionTop =
        document.getElementById('services-section')?.offsetTop || 0;

      setIsAtTop(scrollPosition >= sectionTop);

      if (scrollPosition >= sectionTop) {
        document.documentElement.style.scrollBehavior = 'smooth';
        const index = Math.round(
          (scrollPosition - sectionTop) / window.innerHeight
        );
        setCurrentIndex(index);
        setSelectedService(services[index]);
      } else {
        setCurrentIndex(-1);
        setSelectedService(null);
        document.documentElement.style.scrollBehavior = 'auto';
      }
    }
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    setIsTablet(window.innerWidth >= 768);
  };

  onMount(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    const sectionTitleElement = document.getElementById('section-title');
    if (sectionTitleElement) {
      setSectionTitleHeight(sectionTitleElement.offsetHeight);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  createEffect(() => {
    if (!isDesktop()) {
      setSelectedService(null);
      setCurrentIndex(-1);
    }
  });

  return (
    <ServicesContainer id="services-section">
      <Container>
        <ServicesWrapper
          id="services-wrapper"
          style={{
            'padding-top':
              isAtTop() && isDesktop()
                ? isScrollingDown()
                  ? '2rem'
                  : '10rem'
                : '2rem',
          }}
        >
          <SectionTitle
            id="services-title"
            title="取扱商品"
            description="当社が提供する多様なサービスをご覧ください。"
          />
          <ServicesContentWrapper
            style={{
              height: `calc(100% - 10rem - ${sectionTitleHeight()}px)`,
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
            {isTablet() && (
              <ServiceDescriptionContainer>
                <SliderContainer>
                  {services.map((service, index) => (
                    <Slide
                      class={
                        selectedService()?.title === service.title
                          ? 'active'
                          : currentIndex() > index
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
                  ))}
                </SliderContainer>
              </ServiceDescriptionContainer>
            )}
            {isDesktop() && (
              <IndicatorContainer>
                {services.map((_, index) => (
                  <IndicatorDot active={currentIndex() === index} />
                ))}
              </IndicatorContainer>
            )}
          </ServicesContentWrapper>
        </ServicesWrapper>
      </Container>
      <ModalOverlay isOpen={isModalOpen()}>
        <ModalContent>
          {selectedService() && (
            <>
              <ServiceDescriptionTitle>
                {selectedService()?.title}
              </ServiceDescriptionTitle>
              <ServiceDescriptionText>
                {selectedService()?.description}
              </ServiceDescriptionText>
              <Button onClick={() => setIsModalOpen(false)}>閉じる</Button>
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </ServicesContainer>
  );
}

export default ServicesSection;

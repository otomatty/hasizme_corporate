import { ServicesContainer } from './Services.styled';
import Hero from '../../components/Hero/Hero';
import ServicesSection from './components/ServicesSection/ServicesSection';

function Services() {
  return (
    <ServicesContainer>
      <Hero title="事業紹介" />
      <ServicesSection />
    </ServicesContainer>
  );
}

export default Services;

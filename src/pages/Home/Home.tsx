import { HomeContainer } from "./Home.styled";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import NewsSection from "./components/NewsSection/NewsSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import OfficesSection from "./components/OfficesSection/OfficesSection";
import CSRSection from "./components/CSRSection/CSRSection";
import CareersSection from "./components/CareersSection/CareersSection";

function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProductsSection />
      <NewsSection />
      <OfficesSection />
      <CareersSection />
      <CSRSection />
      <ContactUsSection />
    </HomeContainer>
  );
}

export default Home;

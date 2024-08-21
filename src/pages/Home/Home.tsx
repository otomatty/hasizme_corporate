import { HomeContainer } from "./Home.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import NewsSection from "./components/NewsSection/NewsSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import OfficesSection from "./components/OfficesSection/OfficesSection";
import CSRSection from "./components/CSRSection/CSRSection";

function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ProductsSection />
        <NewsSection />
        <ContactUsSection />
        <TestimonialsSection />
        <OfficesSection />
        <CSRSection />
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;

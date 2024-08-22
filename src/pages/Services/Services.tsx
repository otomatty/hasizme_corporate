import {
  ServicesContainer,
  ServiceSection,
  ServiceTitle,
  ServiceContent,
} from "./Services.styled";

function Services() {
  return (
    <ServicesContainer>
      <ServiceSection>
        <ServiceTitle>Construction Materials</ServiceTitle>
        <ServiceContent>
          We provide a wide range of construction materials including cement,
          steel, and aggregates. Our products are sourced from trusted suppliers
          to ensure quality and reliability.
        </ServiceContent>
      </ServiceSection>
      <ServiceSection>
        <ServiceTitle>Custom Solutions</ServiceTitle>
        <ServiceContent>
          Our team offers custom solutions tailored to meet the specific needs
          of your construction projects. From material selection to delivery, we
          ensure a seamless experience.
        </ServiceContent>
      </ServiceSection>
      <ServiceSection>
        <ServiceTitle>Consulting Services</ServiceTitle>
        <ServiceContent>
          We offer consulting services to help you make informed decisions about
          your construction projects. Our experts provide guidance on material
          selection, project planning, and more.
        </ServiceContent>
      </ServiceSection>
    </ServicesContainer>
  );
}

export default Services;

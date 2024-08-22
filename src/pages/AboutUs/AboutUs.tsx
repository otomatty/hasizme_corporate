import { AboutUsContainer, Section, Title, Content } from "./AboutUs.styled";

function AboutUs() {
  return (
    <AboutUsContainer>
      <Section>
        <Title>About Our Company</Title>
        <Content>
          We are a leading provider of construction materials, committed to
          delivering high-quality products and exceptional service to our
          customers. Our mission is to support the construction industry with
          reliable and sustainable materials.
        </Content>
      </Section>
      <Section>
        <Title>Our History</Title>
        <Content>
          Founded in 1990, our company has grown to become a trusted name in the
          construction materials industry. With over 30 years of experience, we
          have built a reputation for excellence and reliability.
        </Content>
      </Section>
      <Section>
        <Title>Our Team</Title>
        <Content>
          Our team consists of experienced professionals who are dedicated to
          providing the best service and support to our customers. We believe in
          fostering a collaborative and innovative work environment.
        </Content>
      </Section>
    </AboutUsContainer>
  );
}

export default AboutUs;

import Container from '../../../../components/Container/Container';
import Mission from '../../../../components/Mission/Mission';
import { HeroContainer } from './HeroSection.styled';

function HeroSection() {
  return (
    <Container>
      <HeroContainer>
        <Mission />
      </HeroContainer>
    </Container>
  );
}

export default HeroSection;

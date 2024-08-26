import Container from "../../../../components/Container/Container";
import Mission from "../../../../components/Mission/Mission";
import { HeroContainer, MissionCatchphrase } from "./HeroSection.styled";

function HeroSection() {
  return (
    <Container>
      <HeroContainer>
        <MissionCatchphrase>
          「みんな」で持続可能な未来を創る
        </MissionCatchphrase>
        <Mission />
      </HeroContainer>
    </Container>
  );
}

export default HeroSection;

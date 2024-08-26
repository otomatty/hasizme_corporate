import Container from "../../../../components/Container/Container";
import Mission from "../../../../components/Mission/Mission";
import {
  MissionSectionContainer,
  MissionCatchphrase,
} from "./MissionSection.styled";

function MissionSection() {
  return (
    <MissionSectionContainer>
      <Container>
        <p>私たちのミッション</p>
        <MissionCatchphrase>
          「みんな」で持続可能な未来を創る
        </MissionCatchphrase>
        <Mission />
      </Container>
    </MissionSectionContainer>
  );
}

export default MissionSection;

import Container from '../../../../components/Container/Container';
import Mission from '../../../../components/Mission/Mission';
import { MissionSectionContainer } from './MissionSection.styled';

function MissionSection() {
  return (
    <MissionSectionContainer>
      <Container>
        <Mission />
      </Container>
    </MissionSectionContainer>
  );
}

export default MissionSection;

import { createSignal } from "solid-js";
import Container from "../../../../components/Container/Container";
import {
  HeroContainer,
  MissionContainer,
  MissionItem,
  MissionTitle,
  MissionContent,
  MissionSubtitle,
  MissionCatchphrase,
} from "./HeroSection.styled";

function HeroSection() {
  const [openMission, setOpenMission] = createSignal<string | null>(null);

  const toggleMission = (mission: string) => {
    setOpenMission(openMission() === mission ? null : mission);
  };

  return (
    <Container>
      <HeroContainer>
        <MissionCatchphrase>
          「みんな」で持続可能な未来を創る
        </MissionCatchphrase>
        <MissionSubtitle>ミッションを実現する力</MissionSubtitle>
        <MissionContainer>
          <MissionItem onClick={() => toggleMission("地域愛")}>
            <MissionTitle>地域愛</MissionTitle>
          </MissionItem>
          <MissionItem onClick={() => toggleMission("近未来テクノロジー")}>
            <MissionTitle>近未来テクノロジー</MissionTitle>
          </MissionItem>
          <MissionItem
            onClick={() => toggleMission("コア事業領域のリノベーション")}
          >
            <MissionTitle>コア事業領域のリノベーション</MissionTitle>
          </MissionItem>
        </MissionContainer>
        <MissionContent isOpen={openMission() === "地域愛"}>
          地域社会との強い絆を築き、共に成長していくことを目指します。私たちは地域のニーズを理解し、地域の発展に貢献するために様々なプロジェクトを推進しています。地域の皆様と協力し、持続可能な社会を実現するための取り組みを続けています。
        </MissionContent>
        <MissionContent isOpen={openMission() === "近未来テクノロジー"}>
          最新の技術を活用し、効率的で持続可能なソリューションを提供します。私たちは常に技術革新を追求し、最先端のテクノロジーを導入することで、お客様に最適なソリューションを提供しています。これにより、業務の効率化と環境負荷の軽減を実現しています。
        </MissionContent>
        <MissionContent
          isOpen={openMission() === "コア事業領域のリノベーション"}
        >
          既存の事業領域を革新し、新たな価値を創造します。私たちは常に現状に満足せず、事業のリノベーションを通じて新しい価値を提供することを目指しています。これにより、お客様の期待を超えるサービスを提供し、持続可能な成長を実現しています。
        </MissionContent>
      </HeroContainer>
    </Container>
  );
}

export default HeroSection;

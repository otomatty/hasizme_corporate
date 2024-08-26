import { createSignal } from "solid-js";
import {
  MissionContainer,
  MissionItem,
  MissionTitle,
  MissionContent,
  MissionCircle,
  MainTitle,
  MissionContentTitle,
  MissionContentText,
  MissionContentWrapper,
  CloseButton,
  ChevronWrapper,
} from "./Mission.styled";
import { FaSolidChevronDown } from "solid-icons/fa";

export interface MissionData {
  title: string;
  content: string;
}

function Mission() {
  const missions: MissionData[] = [
    {
      title: "地域愛",
      content:
        "地域社会との強い絆を築き、共に成長していくことを目指します。私たちは地域のニーズを理解し、地域の発展に貢献するために様々なプロジェクトを推進しています。地域の皆様と協力し、持続可能な社会を実現するための取り組みを続けています。",
    },
    {
      title: "近未来テクノロジー",
      content:
        "最新の技術を活用し、効率的で持続可能なソリューションを提供します。私たちは常に技術革新を追求し、最先端のテクノロジーを導入することで、お客様に最適なソリューションを提供しています。これにより、業務の効率化と環境負荷の軽減を実現しています。",
    },
    {
      title: "コア事業領域のリノベーション",
      content:
        "既存の事業領域を革新し、新たな価値を創造します。私たちは常に現状に満足せず、事業リノベーションを通じて新しい価値を提供することを目指しています。これによ、お客様の期待を超えるサービスを提供し、持続可能な成長を実現しています。",
    },
  ];

  const [openMission, setOpenMission] = createSignal<string | null>(null);

  const toggleMission = (mission: string) => {
    setOpenMission(openMission() === mission ? null : mission);
  };

  return (
    <>
      <MissionContainer>
        <MainTitle>ミッションを実現する力</MainTitle>
        {missions.map((mission, index) => (
          <MissionItem
            onClick={() => toggleMission(mission.title)}
            index={index}
          >
            <MissionCircle class="mission-circle">
              <MissionTitle>{mission.title}</MissionTitle>
              <ChevronWrapper isOpen={openMission() === mission.title}>
                <FaSolidChevronDown size={16} color="white" />
              </ChevronWrapper>
            </MissionCircle>
          </MissionItem>
        ))}
      </MissionContainer>
      <MissionContentWrapper>
        {missions.map((mission) => (
          <MissionContent isOpen={openMission() === mission.title}>
            <MissionContentTitle>{mission.title}</MissionContentTitle>
            <MissionContentText>{mission.content}</MissionContentText>
            <CloseButton onClick={() => setOpenMission(null)}>
              &times;
            </CloseButton>
          </MissionContent>
        ))}
      </MissionContentWrapper>
    </>
  );
}

export default Mission;

import { createSignal, For } from 'solid-js';
import {
  MissionContainer,
  MissionItemWrapper,
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
  MissionIcon,
} from './Mission.styled';
import {
  FaSolidChevronDown,
  FaSolidHeart,
  FaSolidMicrochip,
  FaSolidRecycle,
} from 'solid-icons/fa';

export interface MissionData {
  title: string;
  content: string[];
  icon: any;
}

function Mission() {
  const missions: MissionData[] = [
    {
      title: '地域愛',
      content: [
        '<strong>地域社会を取り巻く現在と未来の課題へ立ち向かう覚悟</strong>',
        '地域社会は、これから明治維新を超えるインパクトのある社会の大変革期に入ります。私たちには、強い「地域愛」があります。その「チカラ」をもって現在と未来の課題に立ち向かう覚悟があります。',
        '主な課題：',
        '<ul><li>急激な人口減少</li><li>地球環境の急激な変化による第一次産業への影響</li><li>国や自治体の財政悪化</li></ul>',
        '当社は創業以来、地域の方々からのご愛顧をいただきながら成長させていただきました。これからも地域と共に歩んでいきます。',
      ],
      icon: FaSolidHeart,
    },
    {
      title: '近未来テクノロジー',
      content: [
        '<strong>様々なテクノロジーを積極的に活用し、従来の常識を覆す</strong>',
        '2030年を目標に様々なテクノロジーが開発されています。これらは多くの課題解決に役立ちます。',
        'テクノロジーの利点：',
        '<ul><li>高速な情報収集</li><li>世界中とのリアルタイムな接続</li><li>人工知能やロボット技術による業務自動化</li><li>医療の進歩</li></ul>',
        '私たちは、テクノロジーを2つ目の「チカラ」として人との共存を考え、より良い社会を作り上げるために取り組んでいきます。特に、地方がこれらの取り入れに乗り遅れないよう、積極的な活用を実現していきます。',
      ],
      icon: FaSolidMicrochip,
    },
    {
      title: 'コア事業領域のリノベーション',
      content: [
        '<strong>豊富なノウハウを持つ、建設・産業資材、化学薬品の高付加価値化</strong>',
        '当社は、これまで取り組んできた建設・産業資材、化学製品の知識を活かし、地域の問題を解決するため、従来のコアビジネスの高度な付加価値化に注力します。',
        '具体的な取り組み：',
        '<ul><li>コアビジネスと最新のテクノロジーの融合</li><li>データ解析に基づく新たなサービスや商品の提供</li><li>顧客満足度の向上</li><li>地元の問題解決への貢献</li></ul>',
        'これを3つ目の「チカラ」として、地域社会の発展に寄与していきます。',
      ],
      icon: FaSolidRecycle,
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
        <MissionItemWrapper>
          <For each={missions}>
            {(mission, index) => (
              <MissionItem
                onClick={() => toggleMission(mission.title)}
                index={index()}
              >
                <MissionCircle class="mission-circle">
                  <MissionTitle>{mission.title}</MissionTitle>
                  <ChevronWrapper isOpen={openMission() === mission.title}>
                    <FaSolidChevronDown size={16} color="white" />
                  </ChevronWrapper>
                </MissionCircle>
              </MissionItem>
            )}
          </For>
        </MissionItemWrapper>
      </MissionContainer>
      <MissionContentWrapper>
        <For each={missions}>
          {(mission) => (
            <MissionContent isOpen={openMission() === mission.title}>
              <MissionContentTitle>
                <MissionIcon>{mission.icon && <mission.icon />}</MissionIcon>
                {mission.title}
              </MissionContentTitle>
              <For each={mission.content}>
                {(paragraph) => <MissionContentText innerHTML={paragraph} />}
              </For>
              <CloseButton onClick={() => setOpenMission(null)}>
                &times;
              </CloseButton>
            </MissionContent>
          )}
        </For>
      </MissionContentWrapper>
    </>
  );
}

export default Mission;

import {
  AboutUsContainer,
  AboutUsImage,
  AboutUsContent,
  AboutUsSectionTitle,
  AboutUsSectionContent,
} from "./AboutUsSection.styled";

function AboutUsSection() {
  return (
    <AboutUsContainer>
      <AboutUsImage
        src="https://via.placeholder.com/1200x600"
        alt="About Us Image"
      />
      <AboutUsContent>
        <AboutUsSectionTitle>私たちについて</AboutUsSectionTitle>
        <AboutUsSectionContent>
          <p>
            橋爪商事は1928年の創業以来、建設資材や工業資材を提供することで、物流の担い手として、地域に育てられ地域に寄り添って成長してきました。
          </p>
          <p>
            今後、地域社会は人口減少・少子高齢化・地球環境の変化など、これまでの常識が通用しない急激な変化を経験していくことになります。
          </p>
          <p>
            このような不確実な状況の中で、地域社会の「みんな」で持続可能な社会を創るため、中期ミッション&ビジョンである「HASIZME2030」を策定しました。
          </p>
        </AboutUsSectionContent>
      </AboutUsContent>
    </AboutUsContainer>
  );
}

export default AboutUsSection;

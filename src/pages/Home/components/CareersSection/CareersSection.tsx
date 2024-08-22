import {
  CareersSectionContainer,
  CareersSectionTitle,
  CareersSectionContent,
  CareerCard,
  CareerCardTitle,
  CareerCardDescription,
  CareerCardLink,
} from "./CareersSection.styled";
import Container from "../../../../components/Container/Container";

const careerData = [
  {
    title: "営業職",
    description:
      "お客様のニーズを理解し、最適な製品やサービスを提案する営業職を募集しています。",
    link: "/careers#sales",
  },
  {
    title: "技術職",
    description:
      "最新の技術を駆使して、革新的な製品開発に携わる技術職を募集しています。",
    link: "/careers#engineering",
  },
  {
    title: "事務職",
    description: "会社の円滑な運営をサポートする事務職を募集しています。",
    link: "/careers#administrative",
  },
];

function CareersSection() {
  return (
    <CareersSectionContainer>
      <Container>
        <CareersSectionTitle>採用情報</CareersSectionTitle>
        <CareersSectionContent>
          {careerData.map((career) => (
            <CareerCard>
              <CareerCardTitle>{career.title}</CareerCardTitle>
              <CareerCardDescription>
                {career.description}
              </CareerCardDescription>
              <CareerCardLink href={career.link}>詳細を見る</CareerCardLink>
            </CareerCard>
          ))}
        </CareersSectionContent>
      </Container>
    </CareersSectionContainer>
  );
}

export default CareersSection;

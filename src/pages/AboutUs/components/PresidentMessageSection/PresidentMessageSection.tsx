import {
  Section,
  Title,
  ContentWrapper,
  ImageWrapper,
  Image,
  TextContent,
  Name,
  Position,
  Message,
} from "./PresidentMessageSection.styled";

function PresidentMessageSection() {
  return (
    <Section>
      <Title>代表挨拶</Title>
      <ContentWrapper>
        <ImageWrapper>
          <Image src="/president.jpg" alt="代表取締役社長 橋爪博志" />
        </ImageWrapper>
        <TextContent>
          <Position>橋爪商事 代表取締役社長</Position>
          <Name>橋爪博志</Name>
          <Message>
            <p>平素は格別の御引き立てを賜り厚く御礼申し上げます。</p>
            <p>
              橋爪商事（株）は昭和３年創業以来「信用は無形の資本」の精神を承継し、現在、社員の心構えとして「私はプロの社員です。プロの社員はお客様に笑顔で接し、お客様の身になって仕事をします。そして信頼される社員になります。」という顧客第一主義の精神を企業理念に仕事をして居ります。
            </p>
            <p>
              そして、それは商品・技術・サービス（工事を含む）を通じて、お客様の利益の創造に貢献することであります。
            </p>
            <p>
              第二の理念として、遵法精神で企業倫理感を持ち、自然との調和を考え、常に地域社会に生かされていることを念頭に、地域社会へ貢献することであります。
            </p>
            <p>第三の理念として、「共に働く社員の幸せ」の追求であります。</p>
            <p>
              社員の幸せとは、一つには、心の豊かさを分け合うことであり、二つには、物の豊かさを分け合うことであり、そして、三つには働く事の喜びを分け合う全員参加の職場環境作りということであります。
            </p>
            <p>
              この三つの理念を基に、これからも21世紀のより豊かな生活と産業の快適社会を求め、社会資本の整備に必要な建設資材並びに工業資材等の物流の担い手として、地域社会に役立つ企業を目ざし、役職員一同努力致して参ります。
            </p>
            <p>今後共一層の御愛顧、御支援を賜りますようお願い申し上げます。</p>
          </Message>
        </TextContent>
      </ContentWrapper>
    </Section>
  );
}

export default PresidentMessageSection;

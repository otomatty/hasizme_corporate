import {
  CareersContainer,
  Section,
  SectionTitle,
  Content,
  MessageCard,
  HistoryTimeline,
  DataPoint,
  JobDescription,
  DailySchedule,
} from "./Careers.styled";

function Careers() {
  return (
    <CareersContainer>
      <h1>採用情報</h1>

      <Section>
        <SectionTitle>経営方針</SectionTitle>
        <Content>
          橋爪商事株式会社は、「信頼と革新」を経営理念に掲げ、お客様と社会に価値を提供し続けることを目指しています。私たちは、持続可能な未来を築くため、環境に配慮した建設技術の開発と、社員一人ひとりの成長を大切にしています。
        </Content>
      </Section>

      <Section>
        <SectionTitle>事業戦略</SectionTitle>
        <Content>
          1. 環境配慮型建設プロジェクトの推進 2.
          デジタル技術を活用した業務効率化 3. グローバル市場への展開 4.
          地域社会との共生と貢献 5. 継続的な人材育成と技術革新
        </Content>
      </Section>

      <Section>
        <SectionTitle>代表者からのメッセージ</SectionTitle>
        <MessageCard>
          <h3>橋爪 太郎 - 代表取締役社長</h3>
          <p>
            「私たちは、単なる建設会社ではありません。未来を創造する企業です。あなたの情熱と創造性を、私たちと共に社会に還元しませんか？」
          </p>
        </MessageCard>
        <MessageCard>
          <h3>橋爪 花子 - 取締役副社長</h3>
          <p>
            「多様性を尊重し、一人ひとりの個性を活かせる職場環境を目指しています。共に成長し、新しい価値を生み出していきましょう。」
          </p>
        </MessageCard>
      </Section>

      <Section>
        <SectionTitle>会社の歴史</SectionTitle>
        <HistoryTimeline>
          <li>1950年 - 橋爪建設として創業</li>
          <li>1980年 - 橋爪商事株式会社に社名変更</li>
          <li>2000年 - 環境配慮型建設技術の開発開始</li>
          <li>2010年 - アジア市場への進出</li>
          <li>2020年 - デジタルトランスフォーメーション推進部門設立</li>
        </HistoryTimeline>
      </Section>

      <Section>
        <SectionTitle>自社のデータ</SectionTitle>
        <DataPoint>従業員数: 1,200名</DataPoint>
        <DataPoint>年間売上高: 500億円</DataPoint>
        <DataPoint>取引先企業数: 1,000社以上</DataPoint>
        <DataPoint>特許取得数: 50件</DataPoint>
        <DataPoint>新卒採用3年後定着率: 95%</DataPoint>
      </Section>

      <Section>
        <SectionTitle>仕事内容</SectionTitle>
        <JobDescription>
          <h3>建設プロジェクトマネージャー</h3>
          <p>
            大規模建設プロジェクトの企画から完成まで、全体を統括します。チームリーダーとして、様々な専門家と協力しながら、プロジェクトを成功に導きます。
          </p>
        </JobDescription>
        <JobDescription>
          <h3>環境エンジニア</h3>
          <p>
            持続可能な建設技術の研究開発に携わります。最新の環境技術を活用し、エコフレンドリーな建築物の設計・施工方法を提案します。
          </p>
        </JobDescription>
      </Section>

      <Section>
        <SectionTitle>1日の流れ</SectionTitle>
        <DailySchedule>
          <li>9:00 - 朝礼・スケジュール確認</li>
          <li>9:30 - プロジェクトミーティング</li>
          <li>11:00 - 現場視察・進捗確認</li>
          <li>13:00 - 昼食・休憩</li>
          <li>14:00 - デザインレビュー・技術検討</li>
          <li>16:00 - 報告書作成・データ分析</li>
          <li>17:30 - 翌日の準備・退社</li>
        </DailySchedule>
      </Section>
    </CareersContainer>
  );
}

export default Careers;

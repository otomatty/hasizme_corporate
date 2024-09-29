import {
  Section,
  Title,
  Content,
  LinkList,
  LinkItem,
} from "../../AboutUs.styled";
import { A } from "@solidjs/router";

function CompanyInfo() {
  return (
    <Section>
      <Title>会社情報</Title>
      <Content>詳細な会社情報については、以下のリンクをご覧ください：</Content>
      <LinkList>
        <LinkItem>
          <A href="/about-us/company-profile">会社概要</A>
        </LinkItem>
        <LinkItem>
          <A href="/about-us/organization">組織図</A>
        </LinkItem>
        <LinkItem>
          <A href="/about-us/history">沿革</A>
        </LinkItem>
        <LinkItem>
          <A href="/about-us/post-disaster-journey">震災から今日までの歩み</A>
        </LinkItem>
      </LinkList>
    </Section>
  );
}

export default CompanyInfo;

import { A } from "@solidjs/router";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterBottom,
} from "./Footer.styled";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>会社情報</FooterTitle>
          <FooterLink as={A} href="/about-us">
            会社概要
          </FooterLink>
          <FooterLink as={A} href="/mission">
            企業理念
          </FooterLink>
          <FooterLink as={A} href="/history">
            沿革
          </FooterLink>
          <FooterLink as={A} href="/csr">
            CSR活動
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>事業内容</FooterTitle>
          <FooterLink as={A} href="/services">
            サービス一覧
          </FooterLink>
          <FooterLink as={A} href="/products">
            製品情報
          </FooterLink>
          <FooterLink as={A} href="/case-studies">
            導入事例
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>採用情報</FooterTitle>
          <FooterLink as={A} href="/careers">
            採用情報
          </FooterLink>
          <FooterLink as={A} href="/internship">
            インターンシップ
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>お問い合わせ</FooterTitle>
          <FooterLink as={A} href="/contact">
            お問い合わせフォーム
          </FooterLink>
          <FooterLink href="tel:+81-3-1234-5678">TEL: 03-1234-5678</FooterLink>
          <FooterLink href="mailto:info@example.com">
            Email: info@example.com
          </FooterLink>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {currentYear} 橋爪商事株式会社. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

import { A } from "@solidjs/router";
import {
  ContactUsContainer,
  ContactUsTitle,
  ContactUsContent,
  ContactOptionsContainer,
  ContactOption,
  ContactOptionTitle,
  ContactOptionDescription,
  ContactButton,
} from "./ContactUsSection.styled";

function ContactUsSection() {
  return (
    <ContactUsContainer>
      <ContactUsTitle>お問い合わせ</ContactUsTitle>
      <ContactUsContent>
        お客様のニーズに合わせて、最適なお問い合わせ方法をお選びください。
      </ContactUsContent>
      <ContactOptionsContainer>
        <ContactOption>
          <ContactOptionTitle>一般的なお問い合わせ</ContactOptionTitle>
          <ContactOptionDescription>
            製品やサービスに関する一般的なご質問はこちらからお願いします。
          </ContactOptionDescription>
          <ContactButton as={A} href="/contact">
            お問い合わせフォームへ
          </ContactButton>
        </ContactOption>
        <ContactOption>
          <ContactOptionTitle>営業に関するお問い合わせ</ContactOptionTitle>
          <ContactOptionDescription>
            製品の購入や見積もりに関するお問い合わせはこちらからお願いします。
          </ContactOptionDescription>
          <ContactButton href="mailto:sales@example.com">
            営業部門へメール
          </ContactButton>
        </ContactOption>
        <ContactOption>
          <ContactOptionTitle>技術サポート</ContactOptionTitle>
          <ContactOptionDescription>
            製品の技術的なサポートが必要な場合はこちらからお問い合わせください。
          </ContactOptionDescription>
          <ContactButton href="tel:+81-3-1234-5678">
            サポートへ電話
          </ContactButton>
        </ContactOption>
      </ContactOptionsContainer>
    </ContactUsContainer>
  );
}

export default ContactUsSection;

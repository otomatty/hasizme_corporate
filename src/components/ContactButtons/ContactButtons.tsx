import { ContactButtonsContainer } from "./ContactButtons.styled";
import Button from "../Button/Button";
import { FiMail, FiFileText } from "solid-icons/fi";

function ContactButtons() {
  return (
    <ContactButtonsContainer>
      <Button
        color="primary"
        icon={<FiMail />}
        iconPosition="left"
        onClick={() => (window.location.href = "/contact")}
      >
        お問い合わせ
      </Button>
      <Button
        color="accent"
        icon={<FiFileText />}
        iconPosition="left"
        onClick={() => (window.location.href = "/request-materials")}
      >
        資料請求
      </Button>
    </ContactButtonsContainer>
  );
}

export default ContactButtons;

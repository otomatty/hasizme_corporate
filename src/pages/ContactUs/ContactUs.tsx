import {
  ContactUsContainer,
  ContactForm,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from "./ContactUs.styled";

function ContactUs() {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    // フォーム送信処理をここに追加
    alert("お問い合わせありがとうございます。");
  };

  return (
    <ContactUsContainer>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <FormLabel for="name">Name:</FormLabel>
          <FormInput type="text" id="name" name="name" required />
        </FormField>
        <FormField>
          <FormLabel for="email">Email:</FormLabel>
          <FormInput type="email" id="email" name="email" required />
        </FormField>
        <FormField>
          <FormLabel for="message">Message:</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            rows="5"
            required
          ></FormTextarea>
        </FormField>
        <FormButton type="submit">Submit</FormButton>
      </ContactForm>
    </ContactUsContainer>
  );
}

export default ContactUs;

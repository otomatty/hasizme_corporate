import { createSignal } from 'solid-js';
import Hero from '../../components/Hero/Hero';
import {
  ContactContainer,
  ContactForm,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  ErrorMessage,
} from './Contact.styled';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [form, setForm] = createSignal<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = createSignal<Partial<ContactFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form().name) newErrors.name = '名前を入力してください';
    if (!form().email) newErrors.email = 'メールアドレスを入力してください';
    if (!form().message) newErrors.message = 'メッセージを入力してください';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', form());
      alert('お問い合わせありがとうございます。');
    }
  };

  return (
    <>
      <Hero title="お問い合わせ" />
      <ContactContainer>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <FormLabel for="name">お名前</FormLabel>
            <FormInput
              type="text"
              id="name"
              value={form().name}
              onInput={(e) =>
                setForm({ ...form(), name: e.currentTarget.value })
              }
              required
            />
            {errors().name && <ErrorMessage>{errors().name}</ErrorMessage>}
          </FormField>
          <FormField>
            <FormLabel for="email">メールアドレス</FormLabel>
            <FormInput
              type="email"
              id="email"
              value={form().email}
              onInput={(e) =>
                setForm({ ...form(), email: e.currentTarget.value })
              }
              required
            />
            {errors().email && <ErrorMessage>{errors().email}</ErrorMessage>}
          </FormField>
          <FormField>
            <FormLabel for="message">メッセージ</FormLabel>
            <FormTextarea
              id="message"
              value={form().message}
              onInput={(e) =>
                setForm({ ...form(), message: e.currentTarget.value })
              }
              rows="5"
              required
            />
            {errors().message && (
              <ErrorMessage>{errors().message}</ErrorMessage>
            )}
          </FormField>
          <FormButton type="submit">送信</FormButton>
        </ContactForm>
      </ContactContainer>
    </>
  );
}

export default Contact;

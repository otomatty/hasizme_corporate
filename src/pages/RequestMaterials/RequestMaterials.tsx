import { createSignal, For } from 'solid-js';
import Hero from '../../components/Hero/Hero';
import {
  RequestMaterialsContainer,
  GalleryContainer,
  GalleryItem,
  GalleryImage,
  GalleryTitle,
  ContactForm,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  ErrorMessage,
} from './RequestMaterials.styled';
import {
  RequestMaterialsForm,
  RequestMaterialsErrors,
} from '../../types/requestMaterials';

interface Material {
  id: string;
  title: string;
  image: string;
}

const materials: Material[] = [
  {
    id: 'brochure',
    title: '会社案内パンフレット',
    image: '/images/brochure.jpg',
  },
  {
    id: 'product_catalog',
    title: '製品カタログ',
    image: '/images/catalog.jpg',
  },
  { id: 'price_list', title: '価格表', image: '/images/price_list.jpg' },
  {
    id: 'technical_specs',
    title: '技術仕様書',
    image: '/images/tech_specs.jpg',
  },
];

function RequestMaterials() {
  const [form, setForm] = createSignal<RequestMaterialsForm>({
    selectedMaterial: '',
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = createSignal<RequestMaterialsErrors>({});

  const validateForm = () => {
    const newErrors: RequestMaterialsErrors = {};
    if (!form().selectedMaterial) newErrors.material = '資料を選択してください';
    if (!form().name) newErrors.name = '名前を入力してください';
    if (!form().email) newErrors.email = 'メールアドレスを入力してください';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', form());
      alert('資料請求を受け付けました。ありがとうございます。');
    }
  };

  return (
    <>
      <Hero title="資料請求" />
      <RequestMaterialsContainer>
        <h2>請求する資料を選択してください</h2>
        <GalleryContainer>
          <For each={materials}>
            {(material) => (
              <GalleryItem
                onClick={() =>
                  setForm({ ...form(), selectedMaterial: material.id })
                }
                selected={form().selectedMaterial === material.id}
              >
                <GalleryImage src={material.image} alt={material.title} />
                <GalleryTitle>{material.title}</GalleryTitle>
              </GalleryItem>
            )}
          </For>
        </GalleryContainer>
        {errors().material && <ErrorMessage>{errors().material}</ErrorMessage>}

        {form().selectedMaterial && (
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
              <FormLabel for="message">その他のご要望（任意）</FormLabel>
              <FormTextarea
                id="message"
                value={form().message}
                onInput={(e) =>
                  setForm({ ...form(), message: e.currentTarget.value })
                }
                rows="5"
              />
            </FormField>
            <FormButton type="submit">資料を請求する</FormButton>
          </ContactForm>
        )}
      </RequestMaterialsContainer>
    </>
  );
}

export default RequestMaterials;

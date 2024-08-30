import { createSignal, createEffect, For } from 'solid-js';
import { createResource } from 'solid-js';
import { fetchFAQItems } from '../../newt/newtClient';
import type { FAQItem } from '../../types/faq';
import Hero from '../../components/Hero/Hero';
import { FaSolidChevronDown } from 'solid-icons/fa'; // Solid Iconsからインポート
import {
  FAQContainer,
  FAQList,
  FAQItem as FAQItemStyled,
  FAQQuestion,
  FAQAnswer,
  SearchInput,
  CategoryFilter,
  ChevronIcon,
} from './FAQ.styled';

export default function FAQ() {
  const [faqData] = createResource<FAQItem[]>(() => fetchFAQItems());

  const [searchTerm, setSearchTerm] = createSignal('');
  const [selectedCategory, setSelectedCategory] = createSignal('全て');
  const [filteredFaqs, setFilteredFaqs] = createSignal<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = createSignal<number | null>(null);

  createEffect(() => {
    if (faqData()) {
      const filtered = faqData()?.filter(
        (faq) =>
          (faq.question.toLowerCase().includes(searchTerm().toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm().toLowerCase())) &&
          (selectedCategory() === '全て' || faq.category === selectedCategory())
      );
      setFilteredFaqs(filtered || []);
    }
  });

  const categories = () => {
    if (faqData()) {
      return ['全て', ...new Set(faqData()?.map((faq) => faq.category) || [])];
    }
    return ['全て'];
  };

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex() === index ? null : index);
  };

  return (
    <>
      <Hero title="よくある質問" />
      <FAQContainer>
        <SearchInput
          type="text"
          placeholder="質問を検索..."
          onInput={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <CategoryFilter>
          <For each={categories()}>
            {(category) => (
              <button
                onClick={() => setSelectedCategory(category)}
                classList={{ active: selectedCategory() === category }}
              >
                {category}
              </button>
            )}
          </For>
        </CategoryFilter>
        <FAQList>
          <For each={filteredFaqs()}>
            {(faq, index) => (
              <FAQItemStyled>
                <FAQQuestion onClick={() => toggleAnswer(index())}>
                  {faq.question}
                  <ChevronIcon open={openIndex() === index()}>
                    <FaSolidChevronDown />
                  </ChevronIcon>
                </FAQQuestion>
                <FAQAnswer open={openIndex() === index()}>
                  <div innerHTML={faq.answer} />
                </FAQAnswer>
              </FAQItemStyled>
            )}
          </For>
        </FAQList>
      </FAQContainer>
    </>
  );
}

import { Component, createSignal, For } from "solid-js";
import {
  SearchContainer,
  SearchInput,
  SuggestionList,
  SuggestionItem,
  SearchButton,
  ResetButton,
  SearchInputContainer,
  ButtonText,
} from "./ProductSearch.styled";
import products from "../../../../data/productsData";
import { AiOutlineSearch, AiOutlineUndo } from "solid-icons/ai";

const hiraganaToKatakana = (str: string): string => {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

interface ProductSearchProps {
  onSearch: (filteredProducts: typeof products) => void;
}

const ProductSearch: Component<ProductSearchProps> = (props) => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [suggestions, setSuggestions] = createSignal<string[]>([]);

  const handleSearch = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    setSearchTerm(value);

    if (value.length > 0) {
      const katakanaValue = hiraganaToKatakana(value.toLowerCase());
      const filteredSuggestions = products
        .filter(
          (product) =>
            product.title.toLowerCase().includes(value.toLowerCase()) ||
            hiraganaToKatakana(product.title.toLowerCase()).includes(
              katakanaValue
            )
        )
        .map((product) => product.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleSearchButtonClick = () => {
    const katakanaValue = hiraganaToKatakana(searchTerm().toLowerCase());
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm().toLowerCase()) ||
        hiraganaToKatakana(product.title.toLowerCase()).includes(katakanaValue)
    );
    props.onSearch(filteredProducts);
    setSuggestions([]);
  };

  const handleResetButtonClick = () => {
    setSearchTerm("");
    setSuggestions([]);
    props.onSearch(products);
  };

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="商品を検索..."
          value={searchTerm()}
          onInput={handleSearch}
        />
        <SearchButton onClick={handleSearchButtonClick}>
          <AiOutlineSearch />
          <ButtonText>検索</ButtonText>
        </SearchButton>
        <ResetButton onClick={handleResetButtonClick}>
          <AiOutlineUndo />
          <ButtonText>リセット</ButtonText>
        </ResetButton>
      </SearchInputContainer>
      {suggestions().length > 0 && (
        <SuggestionList>
          <For each={suggestions()}>
            {(suggestion) => (
              <SuggestionItem onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </SuggestionItem>
            )}
          </For>
        </SuggestionList>
      )}
    </SearchContainer>
  );
};

export default ProductSearch;

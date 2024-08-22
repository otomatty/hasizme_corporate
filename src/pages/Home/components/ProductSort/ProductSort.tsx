import { Component } from "solid-js";
import { SortContainer, SortSelect } from "./ProductSort.styled";

export type SortOption = "recommended" | "date" | "title";

interface ProductSortProps {
  value: SortOption;
  onChange: (option: SortOption) => void;
}

const ProductSort: Component<ProductSortProps> = (props) => {
  const handleSort = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    props.onChange(select.value as SortOption);
  };

  return (
    <SortContainer>
      <SortSelect value={props.value} onChange={handleSort}>
        <option value="recommended">おすすめ順</option>
        <option value="date">新しい順</option>
        <option value="title">タイトル順</option>
      </SortSelect>
    </SortContainer>
  );
};

export default ProductSort;

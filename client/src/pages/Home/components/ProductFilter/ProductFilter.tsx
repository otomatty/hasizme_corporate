import { Component, createSignal, For } from "solid-js";
import { FilterContainer, FilterButton } from "./ProductFilter.styled";
import products from "../../../../data/productsData";

const ProductFilter: Component<{
  onFilterChange: (filter: string) => void;
}> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = createSignal("All");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <FilterContainer>
      <For each={categories}>
        {(category) => (
          <FilterButton
            onClick={() => handleFilterClick(category)}
            selected={selectedFilter() === category}
          >
            {category}
          </FilterButton>
        )}
      </For>
    </FilterContainer>
  );
};

export default ProductFilter;

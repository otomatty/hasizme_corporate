import { createSignal, createEffect, onMount } from "solid-js";
import products from "../../data/productsData";
import { ProductsContainer, ProductsTitle } from "./Products.styled";
import ProductGrid from "../Home/components/ProductGrid/ProductGrid";
import ProductFilter from "../Home/components/ProductFilter/ProductFilter";
import ProductSearch from "../Home/components/ProductSearch/ProductSearch";
import ProductModal from "../Home/components/ProductModal/ProductModal";
import ProductSort, {
  SortOption,
} from "../Home/components/ProductSort/ProductSort";
import Container from "../../components/Container/Container";
import { Product } from "../../types/product";

const hiraganaToKatakana = (str: string): string => {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

function Products() {
  const [selectedCategory, setSelectedCategory] = createSignal("All");
  const [filteredProducts, setFilteredProducts] = createSignal(products);
  const [selectedProduct, setSelectedProduct] = createSignal<Product | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [sortOption, setSortOption] = createSignal<SortOption>("recommended");
  const [searchTerm, setSearchTerm] = createSignal("");

  const handleFilterChange = (filter: string) => {
    setSelectedCategory(filter);
  };

  const handleSearch = (searchResults: typeof products) => {
    setFilteredProducts(searchResults);
    setSelectedCategory("All");
    setSearchTerm(searchResults.length > 0 ? searchTerm() : "");
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSort = (option: SortOption) => {
    setSortOption(option);
  };

  createEffect(() => {
    let sorted = [...products];
    const category = selectedCategory();
    const term = searchTerm().toLowerCase();
    const katakanaValue = hiraganaToKatakana(term);

    if (category !== "All") {
      sorted = sorted.filter((product) => product.category === category);
    }

    if (term) {
      sorted = sorted.filter(
        (product) =>
          product.title.toLowerCase().includes(term) ||
          hiraganaToKatakana(product.title.toLowerCase()).includes(
            katakanaValue
          )
      );
    }

    switch (sortOption()) {
      case "recommended":
        sorted.sort(
          (a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0)
        );
        break;
      case "date":
        sorted.sort(
          (a, b) =>
            new Date(b.registrationDate).getTime() -
            new Date(a.registrationDate).getTime()
        );
        break;
      case "title":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredProducts(sorted);
  });

  onMount(() => {
    products.forEach((product) => {
      const img = new Image();
      img.src = product.image;
    });
  });

  return (
    <Container>
      <ProductsContainer>
        <ProductsTitle>All Products</ProductsTitle>
        <ProductSearch onSearch={handleSearch} />
        <ProductFilter onFilterChange={handleFilterChange} />
        <ProductSort value={sortOption()} onChange={handleSort} />
        <ProductGrid
          products={filteredProducts()}
          onProductClick={handleProductClick}
        />
        <ProductModal
          isOpen={isModalOpen()}
          onClose={handleCloseModal}
          product={selectedProduct()}
        />
      </ProductsContainer>
    </Container>
  );
}

export default Products;

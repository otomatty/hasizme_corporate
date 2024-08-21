import { createSignal, createEffect, onMount } from "solid-js";
import products from "../../../../data/productsData";
import {
  ProductsContainer,
  ProductsTitle,
  MoreButton,
} from "./ProductsSection.styled";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductFilter from "../ProductFilter/ProductFilter";
import ProductSearch from "../ProductSearch/ProductSearch";
import ProductModal from "../ProductModal/ProductModal";
import ProductSort, { SortOption } from "../ProductSort/ProductSort";
import Container from "../../../../components/Container/Container";
import { Product } from "../../../../types/product";
import { useNavigate } from "@solidjs/router";

function ProductsSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = createSignal("All");
  const [filteredProducts, setFilteredProducts] = createSignal(products);
  const [selectedProduct, setSelectedProduct] = createSignal<Product | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [sortOption, setSortOption] = createSignal<SortOption>("recommended");

  const maxRows = 2;
  const maxItems = 5 * maxRows; // 最大の列数 * 行数

  const handleFilterChange = (filter: string) => {
    setSelectedCategory(filter);
  };

  const handleSearch = (searchResults: typeof products) => {
    setFilteredProducts(searchResults);
    setSelectedCategory("All");
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(() => product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSort = (option: SortOption) => {
    setSortOption(option);
  };

  const handleViewAllClick = () => {
    navigate("/products");
  };

  createEffect(() => {
    let sorted = [...products];
    const category = selectedCategory();

    if (category !== "All") {
      sorted = sorted.filter((product) => product.category === category);
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
        <ProductsTitle>Our Products</ProductsTitle>
        <ProductSearch onSearch={handleSearch} />
        <ProductFilter onFilterChange={handleFilterChange} />
        <ProductSort value={sortOption()} onChange={handleSort} />
        <ProductGrid
          products={filteredProducts()}
          onProductClick={handleProductClick}
          maxItems={maxItems}
        />
        <MoreButton onClick={handleViewAllClick}>もっと見る</MoreButton>
        <ProductModal
          isOpen={isModalOpen()}
          onClose={handleCloseModal}
          product={selectedProduct()}
        />
      </ProductsContainer>
    </Container>
  );
}

export default ProductsSection;

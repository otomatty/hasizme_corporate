import { Component, For, createSignal, onMount, onCleanup } from "solid-js";
import ProductCard from "../ProductCard/ProductCard";
import { GridContainer } from "./ProductGrid.styled";
import { Product } from "../../../../types/product";

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
  maxItems?: number;
};

const ProductGrid: Component<ProductGridProps> = (props) => {
  const [itemsPerRow, setItemsPerRow] = createSignal(5);

  const updateItemsPerRow = () => {
    if (window.innerWidth <= 768) {
      setItemsPerRow(1);
    } else if (window.innerWidth <= 1200) {
      setItemsPerRow(3);
    } else {
      setItemsPerRow(5);
    }
  };

  onMount(() => {
    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateItemsPerRow);
  });

  const displayedProducts = () => {
    const maxItems = props.maxItems || props.products.length;
    return props.products.slice(0, maxItems);
  };

  return (
    <GridContainer>
      <For each={displayedProducts()}>
        {(product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            onClick={() => props.onProductClick(product)}
          />
        )}
      </For>
    </GridContainer>
  );
};

export default ProductGrid;

import { Component, For, onMount, onCleanup } from "solid-js";
import ProductCard from "../ProductCard/ProductCard";
import { GridContainer } from "./ProductGrid.styled";
import { Product } from "../../../../types/product";

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
  maxItems?: number;
};

const ProductGrid: Component<ProductGridProps> = (props) => {
  // itemsPerRowシグナルを削除し、代わりに通常の変数を使用
  let itemsPerRow = 5;

  const updateItemsPerRow = () => {
    if (window.innerWidth <= 768) {
      itemsPerRow = 1;
    } else if (window.innerWidth <= 1200) {
      itemsPerRow = 3;
    } else {
      itemsPerRow = 5;
    }
    // ここでitemsPerRowを使用して何か処理を行う場合は追加してください
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

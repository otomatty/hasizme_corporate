import {
  Component,
  For,
  onMount,
  onCleanup,
  createSignal,
  createEffect,
} from 'solid-js';
import ProductCard from '../ProductCard/ProductCard';
import { GridContainer } from './ProductGrid.styled';
import { Product } from '../../../../types/product';

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
  maxItems?: number;
};

const ProductGrid: Component<ProductGridProps> = (props) => {
  const [itemsPerRow, setItemsPerRow] = createSignal(5);

  const updateItemsPerRow = () => {
    if (window.innerWidth < 425) {
      setItemsPerRow(2);
    } else if (window.innerWidth < 768) {
      setItemsPerRow(3);
    } else if (window.innerWidth < 1024) {
      setItemsPerRow(4);
    } else {
      setItemsPerRow(5);
    }
  };

  createEffect(() => {
    updateItemsPerRow();
  });

  onMount(() => {
    window.addEventListener('resize', updateItemsPerRow);
  });

  onCleanup(() => {
    window.removeEventListener('resize', updateItemsPerRow);
  });

  const displayedProducts = () => {
    const maxItems = props.maxItems || props.products.length;
    return props.products.slice(0, maxItems);
  };

  return (
    <GridContainer itemsPerRow={itemsPerRow()}>
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

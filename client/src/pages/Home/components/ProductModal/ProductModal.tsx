import { Component, Show, createSignal, onMount } from "solid-js";
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductCategory,
} from "./ProductModal.styled";
import { Product } from "../../../../types/product";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: Component<ProductModalProps> = (props) => {
  const [imageLoaded, setImageLoaded] = createSignal(false);

  onMount(() => {
    if (props.product) {
      const img = new Image();
      img.src = props.product.image;
      img.onload = () => setImageLoaded(true);
    }
  });

  return (
    <Show when={props.isOpen && props.product}>
      <ModalOverlay onClick={props.onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalContent>
            <CloseButton onClick={props.onClose}>×</CloseButton>
            <ProductImage
              src={props.product!.image}
              alt={props.product!.title}
              style={{
                opacity: imageLoaded() ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
              onLoad={() => setImageLoaded(true)}
            />
            <ProductTitle>{props.product!.title}</ProductTitle>
            <ProductDescription>
              {props.product!.description}
            </ProductDescription>
            <ProductCategory color={props.product!.categoryColor}>
              {props.product!.category}
            </ProductCategory>
            <p>登録日: {props.product!.registrationDate}</p>
            {props.product!.recommended && <p>おすすめ商品</p>}
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </Show>
  );
};

export default ProductModal;

import { Component } from "solid-js";
import { CardContainer, CardImage, CardTitle } from "./ProductCard.styled";

type ProductCardProps = {
  image: string;
  title: string;
  onClick: () => void;
};

const ProductCard: Component<ProductCardProps> = ({
  image,
  title,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default ProductCard;

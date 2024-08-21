import { CardContainer, CardTitle, CardContent } from "./Card.styled";

interface CardProps {
  title: string;
  content: string;
}

function Card({ title, content }: CardProps) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
}

export default Card;

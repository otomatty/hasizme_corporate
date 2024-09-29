import { HeroContainer, HeroTitle, HeroImage, HeroFilter } from "./Hero.styled";

interface HeroProps {
  title: string;
  backgroundImage?: string;
}

function Hero({ title, backgroundImage }: HeroProps) {
  return (
    <HeroContainer hasImage={!!backgroundImage}>
      {backgroundImage && (
        <>
          <HeroImage src={backgroundImage} alt={title} />
          <HeroFilter />
        </>
      )}
      <HeroTitle>{title}</HeroTitle>
    </HeroContainer>
  );
}

export default Hero;

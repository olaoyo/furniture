import { HeroStyles, HeroText, HeroHeader, HeroImage } from "./Hero.styles";
import { ShopNowButton } from "../../../buttons/Buttons";
import rocketSingleSeater from "./img/rocketSingleSeater.png";

function Hero() {
  return (
    <HeroStyles>
      <HeroText>
        <HeroHeader>Rocket single seater</HeroHeader>
        <ShopNowButton>Shop Now</ShopNowButton>
      </HeroText>
      <HeroImage src={rocketSingleSeater} />
    </HeroStyles>
  );
}

export default Hero;

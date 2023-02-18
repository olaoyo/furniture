import { HeroStyles, HeroText, HeroHeader, HeroImage } from "./Hero.styles";

import { useNavigation } from "@react-navigation/native";

import rocketSingleSeater from "./img/rocketSingleSeater.png";
import { BorderBottomButton, BorderBottomText } from "../../../buttons/Buttons";

function Hero() {
  const { navigate } = useNavigation();

  const shopNowHandler = () => {
    navigate("Furniture");
  };
  return (
    <HeroStyles>
      <HeroText>
        <HeroHeader>Rocket single seater</HeroHeader>
        <BorderBottomButton activeOpacity={0.5} onPress={shopNowHandler}>
          <BorderBottomText>Shop Now</BorderBottomText>
        </BorderBottomButton>
      </HeroText>
      <HeroImage source={rocketSingleSeater} />
    </HeroStyles>
  );
}

export default Hero;

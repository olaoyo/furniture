import { HeroStyles, HeroText, HeroHeader, HeroImage } from "./Hero.styles";

import { useNavigation } from "@react-navigation/native";

import rocketSingleSeater from "./img/rocketSingleSeater.png";
import { CustomButton as ShopNow, ButtonText } from "../../../buttons/Buttons";

function Hero() {
  const { navigate } = useNavigation();

  const shopNowHandler = () => {
    navigate("Furniture");
  };
  return (
    <HeroStyles>
      <HeroText>
        <HeroHeader>Rocket single seater</HeroHeader>
        <ShopNow activeOpacity={0.5} onPress={shopNowHandler}>
          <ButtonText>Shop Now</ButtonText>
        </ShopNow>
      </HeroText>
      <HeroImage source={rocketSingleSeater} />
    </HeroStyles>
  );
}

export default Hero;

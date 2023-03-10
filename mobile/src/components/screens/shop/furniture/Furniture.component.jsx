import { useNavigation } from "@react-navigation/native";

import {
  FurnitureStyles,
  FurnitureGrid,
  FurnitureImage,
  FurnitureTitle,
  FurniturePrice,
} from "./Furniture.styles";

import Rating from "../../../rating/Rating.component";

import { baseURL } from "../../../../api/api";

import formatCurrency from "../../../../utils/formatCurrency";

function Furniture({ id, image, name, price, rating }) {
  const navigation = useNavigation();
 
  const furnitureDetailsHandler = () => {
    navigation.navigate("Details", { furnitureId: id });
  };

  const priceFormatted = formatCurrency(price);

  return (
    <FurnitureStyles onPress={furnitureDetailsHandler} activeOpacity={0.5}>
      <FurnitureGrid>
        <FurnitureImage source={{uri: baseURL + image}} />
        <FurnitureTitle>{name}</FurnitureTitle>
        <FurniturePrice>{priceFormatted}</FurniturePrice>
        <Rating rating={rating} />
      </FurnitureGrid>
    </FurnitureStyles>
  );
}

export default Furniture;

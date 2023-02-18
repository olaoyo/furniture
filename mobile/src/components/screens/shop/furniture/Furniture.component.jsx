import {
  FurnitureStyles,
  FurnitureGrid,
  FurnitureImage,
  FurnitureTitle,
  FurniturePrice,
} from "./Furniture.styles";

import Rating from "../../../rating/Rating.component";

function Furniture({ image, name, price, rating }) {
  return (
    <FurnitureStyles>
      <FurnitureGrid>
        <FurnitureImage source={image} />
        <FurnitureTitle>{name}</FurnitureTitle>
        <FurniturePrice>${price}</FurniturePrice>
        <Rating value={rating} />
      </FurnitureGrid>
    </FurnitureStyles>
  );
}

export default Furniture;

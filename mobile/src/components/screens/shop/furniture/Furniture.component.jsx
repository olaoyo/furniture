import {
  FurnitureStyles,
  FurnitureGrid,
  FurnitureImage,
  FurnitureTitle,
  FurniturePrice,
} from "./Furniture.styles";

function Furniture({ image, name, price }) {
  return (
    <FurnitureStyles>
      <FurnitureGrid>
        <FurnitureImage source={image} />
        <FurnitureTitle>{name}</FurnitureTitle>
        <FurniturePrice>${price}</FurniturePrice>
      </FurnitureGrid>
    </FurnitureStyles>
  );
}

export default Furniture;

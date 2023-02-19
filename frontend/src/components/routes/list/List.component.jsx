import { Link } from "react-router-dom"

import {
  FurnitureListStyles,
  FurnitureCard,
  FurnitureImg,
  FurnitureText,
  FurnitureNamePrice,
} from "./List.styles";
import furnitures from "../../../furniture";
import Rating from "../../rating/Rating.component";

function FurnitureList() {
  return (
    <FurnitureListStyles>
      {furnitures.map((furniture) => (
        <FurnitureCard key={furniture.id}>
          <Link to={`/shop/furniture/${furniture.id}`}>
              <FurnitureImg src={furniture.image} />
              <FurnitureText>
                <FurnitureNamePrice>{furniture.name}</FurnitureNamePrice>
                <FurnitureNamePrice price>${furniture.price}</FurnitureNamePrice>
              </FurnitureText>
              <Rating rating={furniture.rating} margin />
          </Link>
        </FurnitureCard>
      ))}
    </FurnitureListStyles>
  );
}

export default FurnitureList;

import { Link } from "react-router-dom"

import {
  FurnitureListStyles,
  FurnitureCard,
  FurnitureImg,
  FurnitureText,
  FurnitureNamePrice,
} from "./List.styles";
import furniture from "../../../furniture";

function FurnitureList() {
  return (
    <FurnitureListStyles>
      {furniture.map((furniture) => (
        <FurnitureCard key={furniture.id}>
          <Link to={`furniture/${furniture.id}`}>
              <FurnitureImg src={furniture.image} />
              <FurnitureText>
                <FurnitureNamePrice>{furniture.name}</FurnitureNamePrice>
                <FurnitureNamePrice price>${furniture.price}</FurnitureNamePrice>
              </FurnitureText>
          </Link>
        </FurnitureCard>
      ))}
    </FurnitureListStyles>
  );
}

export default FurnitureList;

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  FurnitureListStyles,
  FurnitureCard,
  FurnitureImg,
  FurnitureText,
  FurnitureNamePrice,
} from "./List.styles";
import Rating from "../../rating/Rating.component";

import axios from "axios";

import API, { routeURL } from "../../../api/api";

function FurnitureList() {
  const [furnitures, setFuritures] = useState([]);

  useEffect(() => {
    async function fetchFurnitures() {
      const { data } = await axios.get(API.furniture.shop);
      setFuritures(data);
    }

    fetchFurnitures();

  }, []);

  return (
    <FurnitureListStyles>
      {furnitures.map((furniture) => (
        <FurnitureCard key={furniture._id}>
          <Link to={routeURL.furniture.details(furniture._id)}>
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

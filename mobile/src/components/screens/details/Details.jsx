import { useLayoutEffect, useState } from "react";

import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";

import axios from "axios";
import API from "../../../api/api";


function Details({ route }) {
  const [furniture, setFurniture] = useState({});
  const [furnitures, setFurnitures] = useState([]);

  const { furnitureId } = route.params;

  // Fetch single furniture with id
  useLayoutEffect(() => {
    async function fetchFurniture() {
      const { data } = await axios.get(API.furniture.details(furnitureId));
      setFurniture(data);
    }

    fetchFurniture();

  }, [furnitureId]);

  // Fetch all furniture needed in <FurnitureFlatList />
  useLayoutEffect(() => {
    async function fetchFurnitures() {
      const { data } = await axios.get(API.furniture.shop);
      setFurnitures(data);
    }

    fetchFurnitures();

  }, []);

  return (
    <FurnitureFlatList
      ListHeaderComponent={
        <>
          <Purchase furniture={furniture} />
          <Description furniture={furniture} />
        </>
      }
      data={furnitures}
      keyExtractor={(furniture) => furniture.id}
      numColumns={2}
      renderItem={({ item }) => (
        <Furniture
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          rating={item.rating}
        />
      )}
    />
  );
}

export default Details;


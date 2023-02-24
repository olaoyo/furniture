import { useLayoutEffect, useState } from "react";

import { FurnitureFlatList } from "./furniture/Furniture.styles";
import Furniture from "./furniture/Furniture.component";

import axios from "axios";
import API from "../../../api/api";

function Furnitures() {
  const [furnitures, setFurnitures] = useState([]);

  useLayoutEffect(() => {
    async function fetchFurnitures() {
      const { data } = await axios.get(API.furniture.shop)
      setFurnitures(data)
    }
    fetchFurnitures()
  }, []);

  return (
    <FurnitureFlatList
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

export default Furnitures;

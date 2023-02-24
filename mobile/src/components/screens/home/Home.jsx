import { useLayoutEffect, useState } from "react";

import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import Hero from "./hero/Hero.component";
import Popular from "./popular/Popular.component";

import axios from "axios";
import API from "../../../api/api";


function Home() {
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
      ListHeaderComponent={
        <>
          <Hero />
          <Popular />
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

export default Home;

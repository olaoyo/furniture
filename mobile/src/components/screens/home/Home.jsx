import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import furnitures from "../../../furniture";

import Hero from "./hero/Hero.component";
import Popular from "./popular/Popular.component";

function Home() {
 

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

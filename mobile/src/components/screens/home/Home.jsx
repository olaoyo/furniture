import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import furniture from "../../../furniture";

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
      data={furniture}
      keyExtractor={(furniture) => furniture.id}
      numColumns={2}
      renderItem={({ item }) => (
        <Furniture image={item.image} name={item.name} price={item.price} />
      )}
    />
  );
}

export default Home;

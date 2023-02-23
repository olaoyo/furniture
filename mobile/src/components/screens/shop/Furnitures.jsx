import furnitures from "../../../furniture";
import Furniture from "./furniture/Furniture.component";
import { FurnitureFlatList } from "./furniture/Furniture.styles";

function Furnitures() {
  

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


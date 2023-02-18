import furniture from "../../../furniture";
import Furniture from "./furniture/Furniture.component";
import { FurnitureFlatList } from "./furniture/Furniture.styles";

function Furnitures() {
  return (
    <FurnitureFlatList
      data={furniture}
      keyExtractor={(furniture) => furniture.id}
      numColumns={2}
      renderItem={({ item }) => (
        <Furniture image={item.image} name={item.name} price={item.price} />
      )}
    />
  );
}

export default Furnitures;

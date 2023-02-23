import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";

import furnitures from "../../../furniture";

function FurnitureDetails({ route }) {
  const { furnitureId } = route.params;
  const furniture = furnitures.find(
    (furniture) => furniture.id === furnitureId
  );

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

export default FurnitureDetails;

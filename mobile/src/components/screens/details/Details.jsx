import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 

import { ActivityIndicator } from "react-native";

import { listFurnitures, detailFurniture } from "../../../redux/actions/furnitureActions";

import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import Message from "../../message/Message.component";
import { theme } from "../../../themes/themes";

import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";



function Details({ route }) {

  const dispatch = useDispatch();

  const { loading, furnitures, error } = useSelector((state) => state.furnitureList);
  const { loading: loadingFurniture, furniture, error: errorLoading } = useSelector((state) => state.furnitureDetails);

  const { furnitureId } = route.params;

  
  // Fetch single furniture with id
  useLayoutEffect(() => {
    dispatch(detailFurniture(furnitureId))
  }, [dispatch, furnitureId]);

  
  // Fetch all furniture needed in <FurnitureFlatList />
  useLayoutEffect(() => {
    dispatch(listFurnitures());
  }, [dispatch]);

  return (
    <FurnitureFlatList
      ListHeaderComponent={
        <>
          <Purchase loading={loadingFurniture} furniture={furniture} error={errorLoading} />
          <Description loading={loadingFurniture} furniture={furniture} error={errorLoading} />
        </>
      }
      data={furnitures}
      keyExtractor={(furniture) => furniture._id}
      numColumns={2}
      renderItem={({ item }) => (
        <>
          {loading ? (
            <ActivityIndicator size="large" color={theme.colors.yellow} />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <Furniture
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          )}
        </>
      )}
    />
  );
}

export default Details;


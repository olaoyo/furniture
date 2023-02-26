import { useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { listFurnitures } from "../../../redux/actions/furnitureActions";

import Message from "../../message/Message.component";
import { theme } from "../../../themes/themes";

import { FurnitureFlatList } from "./furniture/Furniture.styles";
import Furniture from "./furniture/Furniture.component";

function Furnitures() {
  const dispatch = useDispatch();

  const { loading, furnitures, error } = useSelector((state) => state.furnitureList);

  useLayoutEffect(() => {
    dispatch(listFurnitures());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.yellow} />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <FurnitureFlatList
          data={furnitures}
          keyExtractor={(furniture) => furniture._id}
          numColumns={2}
          renderItem={({ item }) => (
            <Furniture
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          )}
        />
      )}
    </>
  );
}

export default Furnitures;

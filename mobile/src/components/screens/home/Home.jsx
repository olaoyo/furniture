import { useLayoutEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { listFurnitures } from "../../../redux/actions/furnitureActions";

import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import Message from "../../message/Message.component";
import { theme } from "../../../themes/themes";

import Hero from "./hero/Hero.component";
import Popular from "./popular/Popular.component";

function Home() {

  const dispatch = useDispatch();

  const { loading, furnitures, error } = useSelector((state) => state.furnitureList);

  useLayoutEffect(() => {
    dispatch(listFurnitures());
  }, [dispatch]);

  return (
    <FurnitureFlatList
      ListHeaderComponent={
        <>
          <Hero />
          <Popular />
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

export default Home;

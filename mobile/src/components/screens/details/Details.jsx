import { useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux"; 

import { listFurnitures } from "../../../redux/actions/furnitureActions";

import { FurnitureFlatList } from "../shop/furniture/Furniture.styles";
import Furniture from "../shop/furniture/Furniture.component";

import Message from "../../message/Message.component";
import { theme } from "../../../themes/themes";

import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";

import axios from "axios";
import API from "../../../api/api";


function Details({ route }) {
  const [furniture, setFurniture] = useState({});

  const dispatch = useDispatch();

  const { loading, furnitures, error } = useSelector((state) => state.furnitureList);

  const { furnitureId } = route.params;

  // Fetch single furniture with id
  useLayoutEffect(() => {
    async function fetchFurniture() {
      const { data } = await axios.get(API.furniture.details(furnitureId));
      setFurniture(data);
    }

    fetchFurniture();

  }, [furnitureId]);

  // Fetch all furniture needed in <FurnitureFlatList />
  useLayoutEffect(() => {
    dispatch(listFurnitures());
  }, [dispatch]);

  return (
    <FurnitureFlatList
      ListHeaderComponent={
        <>
          <Purchase furniture={furniture} />
          <Description furniture={furniture} />
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


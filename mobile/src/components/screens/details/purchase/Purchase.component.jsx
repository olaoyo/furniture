import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import Message from "../../../message/Message.component";
import { theme } from "../../../../themes/themes";

import {
  DetailsStyles,
  ImgAndPurchase,
  ImgBg,
  Img,
  InfoAndCartButton,
  Info,
  RatingContainer,
  QtyAndAddToCart,
  QtyButton,
  IconPress,
  ImgSmallContainer,
} from "./Purchase.styles";

import Rating from "../../../rating/Rating.component";

import { baseURL } from "../../../../api/api";

function Purchase({ loading, furniture: { _id, name, image, price, rating, countInStock }, error }) {

  const [qty, setQty] = useState(1);

  const { navigate } = useNavigation();

  const addFurniture = () => {
    setQty(qty + 1);
  };

  const removeFurniture = () => {
    setQty(qty > 1 ? qty - 1 : qty);
  };

  const onChangeHandler = (event) => {
    setQty(event.target.value);
  };

  const addToCartHandler = () => {
    navigate("Cart", { furnitureId: _id, furnitureQty: qty });
  };

  return (
    <DetailsStyles>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.yellow} />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <ImgAndPurchase>
            <ImgBg large>
              <Img large source={{ uri: baseURL + image }} />
            </ImgBg>
            <InfoAndCartButton>
              <Info name>{name}</Info>
              <Info price>${price}</Info>
              <RatingContainer>
                <Rating rating={rating} />
              </RatingContainer>

              {countInStock > 0 ? (
                <QtyAndAddToCart>
                  <IconPress onPress={addToCartHandler} activeOpacity={0.5} ml>
                    <MaterialCommunityIcons
                      name="cart-plus"
                      size={24}
                      color="black"
                    />
                  </IconPress>

                  <QtyButton>
                    <IconPress onPress={removeFurniture} activeOpacity={0.5}>
                      <AntDesign name="minus" size={15} color="black" />
                    </IconPress>
                    <Info qty value={qty} onChange={onChangeHandler}>
                      {qty}
                    </Info>
                    <IconPress onPress={addFurniture} activeOpacity={0.5}>
                      <AntDesign name="plus" size={15} color="black" />
                    </IconPress>
                  </QtyButton>
                </QtyAndAddToCart>
              ) : (
                <QtyAndAddToCart>
                  <IconPress onPress={addToCartHandler} activeOpacity={0.5} ml>
                    <MaterialCommunityIcons
                      name="emoticon-sad-outline"
                      size={24}
                      color={theme.colors.grey.one}
                    />
                  </IconPress>

                  <QtyButton outOfStock>
                    <Info>Out of Stock</Info>
                  </QtyButton>
                </QtyAndAddToCart>
              )}
            </InfoAndCartButton>
          </ImgAndPurchase>
          <ImgSmallContainer>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
          </ImgSmallContainer>
        </>
      )}
    </DetailsStyles>
  );
}

export default Purchase;

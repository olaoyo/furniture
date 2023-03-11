import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { addFurnitureToCart, increaseFurnitureQty, decreaseFurnitureQty } from "../../../../redux/actions/cartActions";

import { baseURL } from "../../../../api/api";

import formatCurrency from "../../../../utils/formatCurrency";

function Purchase({ loading, furniture: { _id, name, image, price, rating, countInStock }, error }) {

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  // Check if furniture is in cart and use qty in cart instead of default of 1
  const currentFurniture = cartItems.find(
    (furniture) => furniture.id === _id
  );

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

  const increaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(increaseFurnitureQty(furnitureId));
  };

  const decreaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(decreaseFurnitureQty(furnitureId));
  };

  const addToCartHandler = () => {
    dispatch(addFurnitureToCart(_id, qty));
    navigate("Cart");
  };
  
  const addToCartItemsHandler = () => {
    dispatch(addFurnitureToCart(_id, currentFurniture.qty));
    navigate("Cart");
  };

  const priceFormatted = formatCurrency(price);

  return (
    <DetailsStyles>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.yellow} />
      ) : error ? (
        <Message>{error}</Message>
      ) : currentFurniture ? (
        // Qty from AsyncStorage cartItems
        <>
          <ImgAndPurchase>
            <ImgBg large>
              <Img large source={{ uri: baseURL + image }} />
            </ImgBg>
            <InfoAndCartButton>
              <Info name>{name}</Info>
              <Info price>{priceFormatted}</Info>
              <RatingContainer>
                <Rating rating={rating} />
              </RatingContainer>

              {countInStock > 0 ? (
                <QtyAndAddToCart>
                  <IconPress onPress={addToCartItemsHandler} activeOpacity={0.5} ml>
                    <MaterialCommunityIcons
                      name="cart-plus"
                      size={24}
                      color="black"
                    />
                  </IconPress>

                  <QtyButton>
                    <IconPress onPress={() => decreaseFurnitureQtyHandler(currentFurniture.id)} activeOpacity={0.5}>
                      <AntDesign name="minus" size={15} color="black" />
                    </IconPress>
                    <Info qty>
                      {currentFurniture.qty}
                    </Info>
                    <IconPress onPress={() => increaseFurnitureQtyHandler(currentFurniture.id)} activeOpacity={0.5}>
                      <AntDesign name="plus" size={15} color="black" />
                    </IconPress>
                  </QtyButton>
                </QtyAndAddToCart>
              ) : (
                <QtyAndAddToCart>
                  <IconPress activeOpacity={1} ml>
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
      ) : (
        // Qty from useState(1)
        <>
          <ImgAndPurchase>
            <ImgBg large>
              <Img large source={{ uri: baseURL + image }} />
            </ImgBg>
            <InfoAndCartButton>
              <Info name>{name}</Info>
              <Info price>{priceFormatted}</Info>
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
                  <IconPress activeOpacity={1} ml>
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
      ) }
    </DetailsStyles>
  );
}

export default Purchase;

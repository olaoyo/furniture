import { useNavigation } from "@react-navigation/native";

import {
  OrderStyles,
  OrderGrid,
  OrderInfo,
  ImgAndQty,
  Img,
  Pressable,
  NameAndPrice,
} from "./Order.styles";

import Spacer from "../../../utils/spacer/Spacer.styles";

import { baseURL } from "../../../../api/api";

import formatCurrency from "../../../../utils/formatCurrency";

function Order({ id, image, name, price, qty }) {

  const { navigate } = useNavigation();

  const furnitureDetailsHandler = () => {
    navigate("Details", { furnitureId: id });
  };

  return (
    <>
      <OrderStyles>
          <OrderGrid>
            <ImgAndQty>
              <Pressable onPress={furnitureDetailsHandler} activeOpacity={0.7}>
                <Img source={{ uri: baseURL + image }} />
              </Pressable>
            </ImgAndQty>
            <NameAndPrice>
              <OrderInfo furnitureName>{name}</OrderInfo>
              <OrderInfo qty>{qty}</OrderInfo>
              <OrderInfo subtotal>{formatCurrency(price * qty)}</OrderInfo>
            </NameAndPrice>
          </OrderGrid>
          <Spacer verticalOne />
        
      </OrderStyles>
      <Spacer verticalTwo />
    </>
  );
}

export default Order;

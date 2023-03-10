import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { increaseFurnitureQty, decreaseFurnitureQty } from "../../../../redux/actions/cartActions";
import {
  CartDetailsStyles,
  CartInfo,
  CartGrid,
  ImgAndQty,
  Img,
  QtyButton,
  IconPress,
  Pressable,
  NameAndPrice,
} from "./CartDetails.styles";

import { AntDesign } from "@expo/vector-icons";

import { baseURL } from "../../../../api/api";

import formatCurrency from "../../../../utils/formatCurrency";


function CartDetails({ id, image, name, price, qty }) {
  
  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const increaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(increaseFurnitureQty(furnitureId))
  }

  const decreaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(decreaseFurnitureQty(furnitureId))
  }

  const priceFormatted = formatCurrency(price);

  const subtotalFormatted = formatCurrency(price * qty);

  const furnitureDetailsHandler = () => {
    navigate("Details", { furnitureId: id })
  }


  return (
    <>
      <CartDetailsStyles>
        <CartGrid>
          <ImgAndQty>
            <Pressable onPress={furnitureDetailsHandler} activeOpacity={0.7}>
              <Img source={{ uri: baseURL + image }} />
            </Pressable>
            <QtyButton>
              <IconPress onPress={() => decreaseFurnitureQtyHandler(id)} activeOpacity={0.5}>
                <AntDesign name="minus" size={15} color="black" />
              </IconPress>
              <CartInfo qty>{qty}</CartInfo>
              <IconPress onPress={() => increaseFurnitureQtyHandler(id)} activeOpacity={0.5}>
                <AntDesign name="plus" size={15} color="black" />
              </IconPress>
            </QtyButton>
          </ImgAndQty>
          <NameAndPrice>
            <CartInfo furnitureName>{name}</CartInfo>
            <CartInfo price>{priceFormatted}</CartInfo>
            <CartInfo subtotal>{subtotalFormatted}</CartInfo>
            <Pressable activeOpacity={0.5}>
              <CartInfo deleteItem>Delete</CartInfo>
            </Pressable>
          </NameAndPrice>
        </CartGrid>
      </CartDetailsStyles>
    </>
  );
}

export default CartDetails;

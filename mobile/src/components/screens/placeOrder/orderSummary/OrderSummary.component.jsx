import { useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import {
  createOrder,
  resetOrder,
} from "../../../../redux/actions/orderActions";

import {
  OrderSummaryStyles,
  OrderDetails,
  OrderInfo,
} from "./OrderSummary.styles";

import { TextInfo } from "../../../inputs/formInputs/FormInputs.styles";

import Center from "../../../utils/center/CenterItems.styles";

import Spacer from "../../../utils/spacer/Spacer.styles";

import { AuthButton as PlaceOrderButton } from "../../../buttons/Buttons";

import formatCurrency from "../../../../utils/formatCurrency";

function OrderSummary({ furniturePrice, shippingPrice, taxPrice, totalPrice }) {
  const dispatch = useDispatch();

  const { cartItems, shippingDetails, paymentMethod } = useSelector(
    (state) => state.cart
  );

  const { error, loading, order, success } = useSelector(
    (state) => state.orderCreate
  );
  
  const { navigate } = useNavigation();

  useLayoutEffect(() => {
    if (success) {
      navigate("Order Details", { orderId: order._id });

      dispatch(resetOrder());
    }
  }, [dispatch, navigate, order, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: shippingDetails,
        paymentMethod: paymentMethod,
        furniturePrice: furniturePrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      })
    );
  };

  return (
    <OrderSummaryStyles>
      <Spacer verticalTwo />

      <Center>
        <TextInfo header>Order Summary</TextInfo>
      </Center>

      <Spacer verticalTwo />

      <OrderDetails>
        <OrderInfo>Furniture:</OrderInfo>
        <OrderInfo>{formatCurrency(furniturePrice)}</OrderInfo>
      </OrderDetails>

      <Spacer verticalTwo />

      <OrderDetails>
        <OrderInfo>Shipping:</OrderInfo>
        <OrderInfo>{formatCurrency(shippingPrice)}</OrderInfo>
      </OrderDetails>

      <Spacer verticalTwo />

      <OrderDetails>
        <OrderInfo>Tax (5%):</OrderInfo>
        <OrderInfo>{formatCurrency(taxPrice)}</OrderInfo>
      </OrderDetails>

      <Spacer verticalTwo />

      <OrderDetails>
        <OrderInfo bold>Total:</OrderInfo>
        <OrderInfo bold>{formatCurrency(totalPrice)}</OrderInfo>
      </OrderDetails>

      <Spacer verticalTwo />

      <Center>
        {loading ? (
          <PlaceOrderButton
            transparent
            border
            icon="arrow-right-bold-outline"
            mode="contained"
            onPress={placeOrderHandler}
            type="submit"
          >
            Processing ...
          </PlaceOrderButton>
        ) : (
          <PlaceOrderButton
            transparent
            border
            icon="arrow-right-bold-outline"
            mode="contained"
            onPress={placeOrderHandler}
            type="submit"
          >
            Place Order
          </PlaceOrderButton>
        )}
      </Center>
      <Spacer verticalTwo />
    </OrderSummaryStyles>
  );
}

export default OrderSummary;

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
  
  const placeOrderHandler = () => {
    console.log("Place Order");
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
      </Center>
      <Spacer verticalTwo />
    </OrderSummaryStyles>
  );
}

export default OrderSummary;

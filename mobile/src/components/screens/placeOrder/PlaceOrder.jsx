import { useSelector } from "react-redux";

import { PlaceOrderFlatList } from "./placeOrder/PlaceOrder.styles";

import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";

import OrderSummary from "./orderSummary/OrderSummary.component";
import ShippingDetails from "./shippingDetails/ShippingDetails.component";
import Order from "./order/Order.component";

import Spacer from "../../utils/spacer/Spacer.styles";

function PlaceOrder() {
  const { cartItems, shippingDetails, paymentMethod } = useSelector(
    (state) => state.cart
  );

  const furniturePrice = cartItems.reduce(
    (total, furniture) => total + furniture.price * furniture.qty,
    0
  );

  const shippingPrice = furniturePrice > 10000 ? 0 : 2000;

  const taxPrice = 0.05 * furniturePrice;

  const totalPrice = furniturePrice + shippingPrice + taxPrice;

  return (
    <>
      <CheckoutSteps step1 step2 step3 />

      <Spacer verticalTwo />
      
      <PlaceOrderFlatList
        ListHeaderComponent={
          <>
            <OrderSummary
              furniturePrice={furniturePrice}
              shippingPrice={shippingPrice}
              taxPrice={taxPrice}
              totalPrice={totalPrice}
            />

            <Spacer verticalTwo />

            <ShippingDetails
              shippingDetails={shippingDetails}
              paymentMethod={paymentMethod}
            />

            <Spacer verticalThree />
          </>
        }
        data={cartItems}
        keyExtractor={(furniture) => furniture.id}
        renderItem={({ item }) => (
          <Order
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        )}
      />
    </>
  );
}

export default PlaceOrder;

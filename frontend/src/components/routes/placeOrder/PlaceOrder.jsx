import Banner from "../../banner/Banner.component";
import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";
import PlaceOrderDetails from "./placeOrder/PlaceOrder.component";
import Info from "../../info/Info.component";

function PlaceOrder() {
  return (
    <>
      <Banner header="Place Order" route="Place Order" />
      <CheckoutSteps step1 step2 step3 step4 />
      <PlaceOrderDetails />
      <Info />
    </>
  );
}

export default PlaceOrder;

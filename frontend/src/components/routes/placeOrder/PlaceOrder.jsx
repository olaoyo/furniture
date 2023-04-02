import Banner from "../../banner/Banner.component";
import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";
import PlaceOrder from "./placeOrder/PlaceOrder.component";
import Info from "../../info/Info.component";

function Order() {
  return (
    <>
      <Banner header="Place Order" route="Place Order" />
      <CheckoutSteps step1 step2 step3 step4 />
      <PlaceOrder />
      <Info />
    </>
  );
}

export default Order;

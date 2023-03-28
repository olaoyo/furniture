import Banner from "../../banner/Banner.component";
import ShippingForm from "./shippingForm/ShippingForm.component";
import Info from "../../info/Info.component"
import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";

function Shipping() {
  return (
    <>
      <Banner header="Shipping" route="Shipping" />
      <CheckoutSteps step1 step2 />
      <ShippingForm />
      <Info />
    </>
  );
}

export default Shipping;

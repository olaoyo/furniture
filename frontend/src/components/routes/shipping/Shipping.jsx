import Banner from "../../banner/Banner.component";
import ShippingForm from "./shippingForm/ShippingForm.component";
import Info from "../../info/Info.component"

function Shipping() {
  return (
    <>
      <Banner header="Shipping" route="Shipping" />
      <ShippingForm />
      <Info />
    </>
  );
}

export default Shipping;

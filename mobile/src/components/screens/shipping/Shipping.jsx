import ShippingForm from "./shippingForm/ShippingForm.component"
import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";

function Shipping() {

  return (
    <>
      <CheckoutSteps step1 />
      <ShippingForm  />
    </>
  )
}

export default Shipping;
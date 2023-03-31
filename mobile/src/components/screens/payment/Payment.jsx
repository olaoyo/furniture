import PaymentMethod from "./paymentMethod/PaymentMethod.component";

import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";


function Payment() {

  return (
    <>
      <CheckoutSteps step1 step2 />
      <PaymentMethod />
    </>
  );
}

export default Payment;

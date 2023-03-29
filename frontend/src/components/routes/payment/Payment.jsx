import PaymentMethod from "./paymentMethod/PaymentMethod.component";
import Banner from "../../banner/Banner.component";
import Info from "../../info/Info.component";
import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component";

function PaymentScreen() {
  return (
    <>
      <Banner header="Payment" route="Payment"  />
      <CheckoutSteps step1 step2 step3 />
      <PaymentMethod />
      <Info />
    </>
  );
}

export default PaymentScreen;

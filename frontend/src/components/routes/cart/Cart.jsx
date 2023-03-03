import Banner from "../../banner/Banner.component";
import CartDetails from "./cart/CartDetails.component";

function Cart() {
  return (
    <>
      <Banner header="Cart" route="Cart" />
      <CartDetails />
    </>
  )
}

export default Cart
import Banner from "../../banner/Banner.component";
import CartDetails from "./cart/CartDetails.component";
import Info from "../../info/Info.component";

function Cart() {
  return (
    <>
      <Banner header="Cart" route="Cart" />
      <CartDetails />
      <Info />
    </>
  )
}

export default Cart
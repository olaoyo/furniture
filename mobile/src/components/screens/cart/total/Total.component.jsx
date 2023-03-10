import { CartInfo, Pressable, TotalAndCheckout } from "./Total.styles";
import { useNavigation } from "@react-navigation/native";
import formatCurrency from "../../../../utils/formatCurrency";


function Total({ cartItems }) {

  const { navigate } = useNavigation();

  const subtotal = cartItems.reduce(( total, furniture) =>  total + furniture.qty * furniture.price, 0);

  const total = formatCurrency(subtotal);

  const checkoutHandler = () => {
    navigate("Checkout", { total: total })
  }

  return (
    <TotalAndCheckout>
      <CartInfo cartTotal>{total}</CartInfo>
      <Pressable onPress={checkoutHandler} activeOpacity={0.7}>
        <CartInfo checkout>Checkout</CartInfo>
      </Pressable>
    </TotalAndCheckout>
  );
}

export default Total;

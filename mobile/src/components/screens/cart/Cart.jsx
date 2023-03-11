import { useSelector } from "react-redux";

import Total from "./total/Total.component";
import { CartFlatList } from "./cart/CartDetails.styles";
import CartDetails from "./cart/CartDetails.component";

import Message from "../../message/Message.component";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../../themes/themes";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <Message>Your Cart Is Empty</Message>
          <Message>
            <MaterialCommunityIcons name="cart-remove" size={200} color={theme.colors.grey.two} />
          </Message>
        </>
      ) : (
        <>
          <Total cartItems={cartItems} />
          <CartFlatList
            data={cartItems}
            keyExtractor={cartItems.id}
            renderItem={({ item }) => (
              <CartDetails
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                qty={item.qty}
              />
            )}
          />
        </>
      )}
    </>
  );
}

export default Cart;

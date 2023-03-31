import { Text, View } from "react-native";
import CheckoutSteps from "../../checkoutSteps/CheckoutSteps.component"  

function PlaceOrder({ route }) {

  const { paymentMethod } = route.params;

  return (
    <View>
      <CheckoutSteps step1 step2 step3 />
      <Text>PlaceOrder</Text>
      <Text>{paymentMethod}</Text>
    </View>
  );
}

export default PlaceOrder;

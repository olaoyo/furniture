import { Text, View } from "react-native";

function Order({ route }) {

  const { orderId } = route.params;
  return (
    <View>
      <Text>{orderId}</Text>
    </View>
  );
}

export default Order;

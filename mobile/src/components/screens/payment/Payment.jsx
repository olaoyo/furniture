import { Text, View } from "react-native";

import { useSelector } from "react-redux";

function Payment() {

  const { shippingDetails: { name, surname, address, city, postalCode, country } } = useSelector((state) => state.cart);

  return (
    <View>
      <Text>Payment</Text>
      <Text>{name}</Text>
      <Text>{surname}</Text>
      <Text>{address}</Text>
      <Text>{city}</Text>
      <Text>{postalCode}</Text>
      <Text>{country}</Text>
    </View>
  );
}

export default Payment;

import { Text } from "react-native";

function Cart({ route }) {
  
  const { furnitureId, furnitureQty } = route.params;

  return (
    <>
      <Text>{furnitureId}</Text>
      <Text>{furnitureQty}</Text>
    </>
  );
}

export default Cart;

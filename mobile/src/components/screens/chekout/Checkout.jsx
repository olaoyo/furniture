import { Text } from "react-native"

function Checkout({ route }) {

  const { total } = route.params

  return (
    <>
      <Text>Checkout</Text>
      <Text>{total}</Text>
    </>
  )
}

export default Checkout;
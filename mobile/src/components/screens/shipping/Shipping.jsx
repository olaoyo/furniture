import ShippingForm from "./shippingForm/ShippingForm.component"

function Shipping({ route }) {

  const { total } = route.params

  return (
    <ShippingForm  />
  )
}

export default Shipping;
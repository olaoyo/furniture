import CartDetails from "./cart/CartDetails.component";


function Cart({ route }) {
  const { furnitureId, furnitureQty } = route.params;

  return (
    <>
      <CartDetails furnitureId={furnitureId} furnitureQty={furnitureQty} />
    </>
  );
}

export default Cart;

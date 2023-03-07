import { CartDetailsStyles, CartInfo } from "./CartDetails.styles";


function CartDetails({ furnitureId, furnitureQty }) {
  return (
      <CartDetailsStyles>
        <CartInfo>{furnitureId}</CartInfo>
        <CartInfo>{furnitureQty}</CartInfo>
      </CartDetailsStyles>
  );
}

export default CartDetails;

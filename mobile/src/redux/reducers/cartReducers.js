import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
} from "../constants/cartConstants";


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_FURNITURE:

      const addedFurniture = action.payload;

      const furnitureInCart = state.cartItems.find(
        (existingFurniture) => existingFurniture.id === addedFurniture.id
      );

      if (furnitureInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((existingFurniture) =>
            existingFurniture.id === furnitureInCart.id ? addedFurniture : existingFurniture
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, addedFurniture],
        };
      }

    case CART_REMOVE_FURNITURE:
      return { loading: false, cartItems: action.payload };

    default:
      return state;
  }
};

import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
  FURNITURE_INCREASE_QTY,
  FURNITURE_DECREASE_QTY,
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
            existingFurniture.id === furnitureInCart.id
              ? addedFurniture
              : existingFurniture
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, addedFurniture],
        };
      }

    case CART_REMOVE_FURNITURE:
      return {
        ...state,
        cartItems: state.cartItems.filter((furniture) => furniture.id !== action.payload)
      };

    case FURNITURE_INCREASE_QTY:
      const furnitureIdToIncrease = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((furniture) =>
          furniture.id === furnitureIdToIncrease
            ? { qty: furniture.qty++, ...furniture }
            : furniture
        ),
      };

    case FURNITURE_DECREASE_QTY:
      const furnitureIdToDecrease = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((furniture) =>
          furniture.id === furnitureIdToDecrease && furniture.qty > 1
            ? { qty: furniture.qty--, ...furniture }
            : furniture
        ),
      };

    default:
      return state;
  }
};

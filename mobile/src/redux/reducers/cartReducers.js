import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
  CART_SAVE_SHIPPING_DETAILS,
  FURNITURE_INCREASE_QTY,
  FURNITURE_DECREASE_QTY,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
  CART_CLEAR_SHIPPING_DETAILS,
  CART_CLEAR_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [], shippingDetails: {}, paymentMethod: {} }, action) => {
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

    case CART_SAVE_SHIPPING_DETAILS:
      return { ...state, shippingDetails: action.payload };

    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    
    case CART_CLEAR_ITEMS:
      return { ...state, cartItems: [] };

    case CART_CLEAR_SHIPPING_DETAILS:
      return { ...state, shippingDetails: {} };

    case CART_CLEAR_PAYMENT_METHOD:
      return { ...state, paymentMethod: "" };
      
    default:
      return state;
  }
};

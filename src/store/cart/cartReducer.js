const initialState = {
  cartItems: [],
  cartOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newState = { ...state, cartItems: [...state.cartItems, action.payload] };
      localStorage.setItem("cartItems", JSON.stringify(newState.cartItems));
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      localStorage.setItem("cartItems", JSON.stringify(newState.cartItems));
      return newState;
    }
    case "CLEAR_CART": {
      const newState = { ...state, cartItems: [] };
      localStorage.setItem("cartItems", JSON.stringify(newState.cartItems));
      return newState;
    }
    case "INCREASE_QUANTITY": {
      const newState = {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
      localStorage.setItem("cartItems", JSON.stringify(newState.cartItems));
      return newState;
    }
    case "DECREASE_QUANTITY": {
      const newState = {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
      localStorage.setItem("cartItems", JSON.stringify(newState.cartItems));
      return newState;
    }
    case "OPEN_CART":
      return {
        ...state,
        cartOpen: true,
      };
    case "CLOSE_CART":
      return {
        ...state,
        cartOpen: false,
      };
    default:
      return state;
  }
};

export default cartReducer;

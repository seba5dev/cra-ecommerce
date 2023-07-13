const initialState = {
  selectedItem: null,
};

const selectedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    case "CLEAR_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: null,
      };
    default:
      return state;
  }
};

export default selectedItemReducer;

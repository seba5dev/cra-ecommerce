// Acción para seleccionar un producto
export const selectItem = (product) => ({
  type: 'SELECT_ITEM',
  payload: product,
});

// Acción para deseleccionar un producto
export const clearSelectedItem = () => ({
  type: 'CLEAR_SELECTED_ITEM',
});

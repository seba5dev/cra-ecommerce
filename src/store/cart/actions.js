// Acción para agregar un producto al carrito
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

// Acción para eliminar un producto del carrito
export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});

// Acción para vaciar el carrito
export const clearCart = () => ({
  type: 'CLEAR_CART',
});

// Acción para aumentar la cantidad de un producto en el carrito
export const increaseQuantity = (productId) => ({
  type: 'INCREASE_QUANTITY',
  payload: productId,
});

// Acción para disminuir la cantidad de un producto en el carrito
export const decreaseQuantity = (productId) => ({
  type: 'DECREASE_QUANTITY',
  payload: productId,
});

// Acción para abrir el carrito
export const openCart = () => ({
  type: 'OPEN_CART',
});

// Acción para cerrar el carrito
export const closeCart = () => ({
  type: 'CLOSE_CART',
});
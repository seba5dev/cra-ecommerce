import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/cart/actions";
import { clearSelectedItem } from "../../store/ui/selectedItemsActions";
import { BsDot } from "react-icons/bs";
import { FaMinus, FaPlus, FaTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { messages } from "../../utils/constants";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem.selectedItem);
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    if (cart.cartItems.find((item) => item.id === product.id)) {
      dispatch(increaseQuantity(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      toast.success(messages.productAdded);
    }
  };
  
  const handleRemoveFromCart = (productId) => {
    if (cart.cartItems.find((item) => item.id === productId).quantity > 1) {
      dispatch(decreaseQuantity(productId));
    } else {
      dispatch(removeFromCart(productId));
      toast.warn(messages.productRemoved);
    }
  };

  const handleClearSelectedItem = () => {
    dispatch(clearSelectedItem());
  };

  return (
    <>
      <div className="relative">
        <button
          className="absolute right-2 top-2"
          onClick={() => handleClearSelectedItem()}
        >
          <FaTimesCircle className="text-xl" />
        </button>
        <button className="absolute left-2 top-2 bg-fuchsia-700 rounded-full h-8 w-8 text-white">
          {cart.cartItems.find((item) => item.id === selectedItem.id)
            ? cart.cartItems.find((item) => item.id === selectedItem.id)
                .quantity
            : 0}
        </button>
        <img
          src={require(`../../assets/products/${selectedItem.image}.jpg`)}
          alt="product"
          className=" mx-auto w-auto max-h-60"
        />
        <div className="flex justify-between my-3">
          <div className="flex items-center gap-x-1 text-lg font-semibold">
            <h2>{selectedItem.name}</h2>
            <BsDot className="text-xs" />
            <p className="text-fuchsia-800">${selectedItem.price}</p>
          </div>
          <div className="flex items-center">
            <button
              data-testid="remove-from-cart-button"
              className="bg-gray-200 py-2 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                cart.cartItems.find((item) => item.id === selectedItem.id)
                  ? cart.cartItems.find((item) => item.id === selectedItem.id)
                      .quantity === 0
                  : true
              }
              onClick={() => handleRemoveFromCart(selectedItem.id)}
            >
              <FaMinus className="text-black" />
            </button>
            <button
              data-testid="add-to-cart-button"
              className="bg-fuchsia-700 py-2 px-3"
              onClick={() => handleAddToCart(selectedItem)}
            >
              <FaPlus className="text-white" />
            </button>
          </div>
        </div>
        <hr className="my-2 h-1 bg-fuchsia-100 opacity-100" />
        <p data-testid="product-description" className="text-sm text-gray-500">{selectedItem.description}</p>
        <hr className="my-2 h-1 bg-fuchsia-100 opacity-100" />
        {/* {JSON.stringify(selectedItem)} */}
        {/* <button onClick={() => handleClearCart()}>Clear</button> */}
        {/* {JSON.stringify(cartItems)} */}
      </div>
    </>
  );
};

export default ProductInfo;

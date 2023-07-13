import React from "react";
import storeLogo from "../../assets/store-icon.png";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart } from "../../store/cart/actions";
import { clearSelectedItem } from "../../store/ui/selectedItemsActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleOpenCart = () => {
    dispatch(clearSelectedItem());
    dispatch(openCart());
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <>
      <nav className="p-4 flex justify-between">
        <img src={storeLogo} alt="logo" className="w-12" />
        <div className="flex flex-row">
          <button
            id="cart-button"
            data-testid="cart-button"
            className={`px-4 py-0 flex justify-center items-center gap-1 ${
              cart.cartOpen
                ? `text-fuchsia-800 bg-fuchsia-200 border border-fuchsia-800`
                : `text-white bg-fuchsia-800`
            }`}
            onClick={() => {
              handleOpenCart();
            }}
          >
            <FaCartPlus />
            <>
              $
              {cart.cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </>
          </button>
          {cart.cartOpen && (
            <button
              className="px-4 py-0 flex justify-center items-center gap-1 bg-fuchsia-800 text-white"
              onClick={() => {
                handleCloseCart();
              }}
            >
              <FaTimes />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

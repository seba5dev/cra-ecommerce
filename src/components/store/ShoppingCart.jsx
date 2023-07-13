import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/cart/actions";
import { FaMinus, FaPlus, FaShieldAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { messages } from "../../utils/constants";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = (product) => {
    dispatch(increaseQuantity(product.id));
  };

  const handleRemoveFromCart = (productId) => {
    if (cartItems.find((item) => item.id === productId).quantity > 1) {
      dispatch(decreaseQuantity(productId));
    } else {
      dispatch(removeFromCart(productId));
      toast.warn(messages.productRemoved);
    }
  };

  const loadFormScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";
    script.setAttribute(
      "data-public-key",
      "pub_prod_Kw4aC0rZVgLZQn209NbEKPuXLzBD28Zx"
    );
    script.setAttribute("data-currency", "COP");
    script.setAttribute(
      "data-amount-in-cents",
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
    );
    script.setAttribute("data-reference", "3b4393bafed398ba2");
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadFormScript();
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const checkout = new WidgetCheckout({
      currency: "COP",
      amountInCents: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      reference: "AD002901221",
      publicKey: "pub_fENJ3hdTJxdzs3hd35PxDBSMB4f85VrgiY3b6s1",
    });
    checkout.open((result) => {
      var transaction = result.transaction;
      console.log("Transaction ID: ", transaction.id);
      console.log("Transaction object: ", transaction);
    });
  };
  return (
    <>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="flex justify-start items-center gap-x-5">
                <div className="text-white flex justify-center items-center h-10 w-10 bg-fuchsia-800 rounded-full">
                  {item.quantity}
                </div>
                <img src={require(`../../assets/products/${item.image}.jpg`)} alt={item.name} className="w-auto h-16" />
                {/* <div className="flex justify-center items-center">
                  {item.name}
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 py-2 px-3"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <FaMinus className="text-black" />
                  </button>
                  <button
                    className="bg-fuchsia-700 py-2 px-3"
                    onClick={() => handleAddToCart(item)}
                  >
                    <FaPlus className="text-white" />
                  </button>
                </div> */}
              </div>
              <hr className="my-2 h-1 bg-purple-100 opacity-100" />
            </div>
          ))}
          <div className="flex justify-between font-semibold gap-x-1 text-xl">
            <form onSubmit={handleCheckout}>
              <button
                type="submit"
                className="flex items-center gap-x-2 bg-blue-600 py-3 px-5 text-white rounded"
              >
                <FaShieldAlt />
                {messages.paymentButton}
              </button>
            </form>
            <div>
              <span className="text-gray-500">Total:{" "}</span>
              <span className="text-fuchsia-800">
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl text-gray-500">{messages.emptyCart}</h2>
        </>
      )}
    </>
  );
};

export default ShoppingCart;

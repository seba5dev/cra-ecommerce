import React from "react";
import Navbar from "./components/ui/Navbar";
import ProductsList from "./components/store/ProductsList";
import ProductInfo from "./components/store/ProductInfo";
import { useSelector } from "react-redux";
import ShoppingCart from "./components/store/ShoppingCart";
import { messages, titles } from "./utils/constants";

function App() {
  const cart = useSelector((state) => state.cart);
  const selectedItem = useSelector((state) => state.selectedItem.selectedItem);

  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 container px-2 sm:mx-auto mt-2">
        <div>
          <h2 className="text-fuchsia-800 font-semibold">{titles.store}</h2>
          <div>
            <hr className="my-2 h-1 bg-purple-100 opacity-100" />
          </div>
          <ProductsList />
        </div>
        {selectedItem ? (
          <div>
            <h2 className="text-fuchsia-800 font-semibold">{titles.product}</h2>
            <div>
              <hr className="my-2 h-1 bg-purple-100 opacity-100" />
            </div>
            <ProductInfo />
          </div>
        ) : cart.cartOpen ? (
          <div>
            <h2 className="text-fuchsia-800 font-semibold">{titles.cart}</h2>
            <div>
              <hr className="my-2 h-1 bg-purple-100 opacity-100" />
            </div>
            <ShoppingCart />
          </div>
        ) : (
          <div>
            <div className="mt-8">
              <hr className="my-2 h-1 bg-purple-100 opacity-100" />
            </div>
            <h2 className="text-gray-500 md:hidden">
              {messages.chooseProductBelow}
            </h2>
            <h2 className="text-gray-500 hidden md:block">
              {messages.chooseProductLeft}
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

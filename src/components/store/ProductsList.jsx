import React from "react";
import { products } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../../store/ui/selectedItemsActions";
import { closeCart } from "../../store/cart/actions";

const ProductsList = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem.selectedItem);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleSelectItem = (product) => {
    dispatch(closeCart());
    dispatch(selectItem(product));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {/* {JSON.stringify(selectedItem)} */}
      {products.map((product) => (
        <div
          key={product.id}
          className={`relative flex justify-center items-center max-w-xs w-full rounded-md p-2 shadow-md cursor-pointer ${
            selectedItem?.id === product.id
              ? `border-2 border-fuchsia-700 animate-pulse`
              : `border border-gray-400`
          }`}
        >
          {cartItems.find((item) => item.id === product.id) && (
            <span className="absolute flex justify-center items-center text-white top-1 left-1 bg-fuchsia-800 h-8 w-8 rounded-full">
              {cartItems.find((item) => item.id === product.id).quantity}
            </span>
          )}
          <img
            src={require(`../../assets/products/${product.image}.jpg`)}
            alt={product.name}
            onClick={() => {
              handleSelectItem(product);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

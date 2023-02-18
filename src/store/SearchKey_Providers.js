import { useReducer } from "react";

import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Adding") {
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "Removing") {
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR THE WHOLE CART") {
    return defaultCartState;
  }
  return defaultCartState;
};

function counter(props) {
  const [count, setCount] = useReducer(countReducer, defaultCountState);

  function addItemToCart(item) {
    dispatchCartAction({ type: "Adding", item: item });
  }

  function removeItemFromCart(id) {
    dispatchCartAction({ type: "Removing", id: id });
  }

  function clearingWholeCart() {
    dispatchCartAction({ type: "CLEAR THE WHOLE CART" });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearingWholeCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

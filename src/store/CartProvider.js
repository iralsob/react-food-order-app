import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const reducerCart = (prevState, action) => {
  if (action.type === "ADD") {
    const updatedItems = prevState.items.concat(action.item);
    const updatedTotalAmount =
      prevState.totalAmount + action.item.amount * action.item.price;
    return { items: updatedItems, amount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducerCart, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {};

  const CartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={CartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const reducerCart = (prevState, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      prevState.totalAmount + action.item.amount * action.item.price;

    let updatedItems;
    const itemExists = prevState.items.some(
      (item) => item.id === action.item.id
    );
    if (itemExists) {
        updatedItems = prevState.items.map(item => {
            if (item.id === action.item.id) {
                item.amount += action.item.amount;
            }
            return item;
        });
    } else {
      updatedItems = prevState.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    console.log(action.id);
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducerCart, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

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

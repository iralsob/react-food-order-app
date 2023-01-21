import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const reducerCart = (prevState, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      (prevState.totalAmount + action.item.amount * action.item.price);

    let updatedItems, itemExists = false;

    updatedItems = prevState.items.map((item) => {
      if (item.id === action.item.id) {
        item.amount += action.item.amount;
        itemExists = true;
      }
      return item;
    });

    if(!itemExists){
      updatedItems = prevState.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {

    let updatedTotalAmount = prevState.totalAmount;
    
    const updatedItems = prevState.items.map(item=>{

      if(item.id === action.id) {
        item.amount -= 1;
        updatedTotalAmount -= item.price;
      }
      return item;
    }).filter(x=>x.amount!==0);

    return { items: updatedItems, totalAmount: updatedTotalAmount };

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

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmountValue = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddItemHandler = (item) => {
    cartCtx.addItem(item);
  };
  const onRemoveItemHandler = (id) => {};

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={onAddItemHandler}
      onRemove={onRemoveItemHandler}
    />
  ));
  return (
    <Modal onHideCart={props.hideCart}>
      <div className={classes["cart-items"]}>
        <ul>{cartItems}</ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountValue}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

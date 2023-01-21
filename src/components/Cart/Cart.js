import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.name} Price: {item.price} Total: {item.amount * item.price}
    </li>
  ));
  return (
    <Modal onHideCart={props.hideCart}>
      <div className={classes["cart-items"]}>
        <ul>{cartItems}</ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.12</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

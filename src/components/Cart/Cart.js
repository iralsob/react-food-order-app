import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [];
  return (
    <Modal>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.12</span>
      </div>
      <div className={classes.action}>
        <button onClick={props.onClickCloseButton} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmountValue = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddItemHandler = (item) => {
    cartCtx.addItem({
      name:item.name,
      amount:1,
      price:item.price,
      id:item.id
    });
  };
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={onAddItemHandler.bind(null, item)}
      onRemove={onRemoveItemHandler.bind(null, item.id)}
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

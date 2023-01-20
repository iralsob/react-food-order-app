import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfAddedItems = cartCtx.items.reduce((currNum, item) => {
    return(currNum+item.amount);
  }, 0);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfAddedItems}</span>
    </button>
  );
};

export default HeaderCartButton;

import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfAddedItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const [isBtnAnimated, setIsBtnAnimated] = useState(false);

  const classesBtn = `${classes.button} ${isBtnAnimated ? classes.bump : ""}`;
 
  useEffect(() => {
    setIsBtnAnimated(true);
    
    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button onClick={props.onClick} className={classesBtn}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfAddedItems}</span>
    </button>
  );
};

export default HeaderCartButton;

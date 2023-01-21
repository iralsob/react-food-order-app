import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const addOnCartHandler = (amount) => {
    cartCtx.addItem({
      name:props.name,
      amount:amount,
      price:props.price,
      id:props.id
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addOnCart={addOnCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [isAmountValid, setIsAmountValid] = useState(true);

  const addToCartHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountValueNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountValueNum < 1 ||
      enteredAmountValueNum > 5
    ) {
        setIsAmountValid(false);
      return;
    }
    props.addOnCart(enteredAmountValueNum);
  };
  return (
    <form onSubmit={addToCartHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label='Amount'
        id={"Amount_" + props.id}
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type='submit'>+ Add</button>
      {!isAmountValid && <p>Amount is unvalid</p>}
    </form>
  );
};

export default MealItemForm;

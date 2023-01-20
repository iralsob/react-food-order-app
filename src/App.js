import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const onClickCloseButtonHandler = () => {
    setIsCartOpen(false);
  };
  const showCartHandler = () => {
    setIsCartOpen(true);
  }
  return (
    <Fragment>
     <Header showCart={showCartHandler}></Header>
      <main>
        {isCartOpen?<Cart onClickCloseButton={onClickCloseButtonHandler}/>:''}
        <MealsSummary />
        <AvailableMeals />
      </main>
      </Fragment>
  );
}

export default App;

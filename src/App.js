import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const hideCartHandler = () => {
    setIsCartOpen(false);
  };
  const showCartHandler = () => {
    setIsCartOpen(true);
  }
  return (
    <Fragment>
     <Header onShowCart={showCartHandler}></Header>
      <main>
        {isCartOpen?<Cart hideCart={hideCartHandler}/>:''}
        <MealsSummary />
        <AvailableMeals />
      </main>
      </Fragment>
  );
}

export default App;

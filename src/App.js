import {  useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";

import CartProvider from "./store/CartProvider"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const hideCartHandler = () => {
    setIsCartOpen(false);
  };
  const showCartHandler = () => {
    setIsCartOpen(true);
  }
  return (
    <CartProvider>
     <Header onShowCart={showCartHandler}></Header>
      <main>
        {isCartOpen?<Cart hideCart={hideCartHandler}/>:''}
        <MealsSummary />
        <AvailableMeals />
      </main>
      </CartProvider>
  );
}

export default App;

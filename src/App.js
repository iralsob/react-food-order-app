import { Fragment } from "react";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}

export default App;

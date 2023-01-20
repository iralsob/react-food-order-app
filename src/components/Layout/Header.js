import { Fragment } from "react";

import classes from './Header.module.css';
import mainImage from '../../assets/meals.jpg'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mainImage} alt="food" />
        </div>
    </Fragment>
}

export default Header;
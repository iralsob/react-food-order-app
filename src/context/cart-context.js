import React from "react";

const CartContext = React.createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{}
});

export default CartContext;
import React from "react";


import CartPage from "../pages/cart-page";
import HomePage from '../pages/home-page';
import { Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <Routes>
            <Route
                path='/'
                exact
                element={<HomePage/>}
            />
            <Route
                path='/cart'
                exact
                element={<CartPage/>}
            />
        </Routes>
    )

}


export default App;

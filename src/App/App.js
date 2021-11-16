import React from "react";

import withBookstoreService from "../components/hoc/with-bookstore-service";

import CartPage from "../pages/cart-page";
import HomePage from '../pages/home-page';
import { Routes, Route } from "react-router-dom";

const App = ({bookstoreService}) => {

    console.log(bookstoreService.getBooks());

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


export default withBookstoreService()(App);

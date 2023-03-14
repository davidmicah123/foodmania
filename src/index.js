import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Container/Home/Home";
import Login from "./Container/Auth/Login/Login";
import Signup from "./Container/Auth/SignUp/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReataurantPage from "./Container/Reataurant/RestaurantPage/ReataurantPage";
import SelectFood from "./Container/Reataurant/SelectFood/SelectFood";
import CheckoutPage from "./Container/Reataurant/CheckoutPage/CheckoutPage";
import { Provider } from "react-redux";
import store, { reduxWrapper } from './Store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/ReataurantPage" element={<ReataurantPage />} />
          <Route exact path="/SelectFood" element={<SelectFood />} />
          <Route exact path="/CheckoutPage" element={<CheckoutPage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

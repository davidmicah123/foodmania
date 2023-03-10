import React from "react";
import Navbar from "../../../Component/Navbar/Navbar";
import Footer from "../../../Component/Footer/Footer";
import RestaurantSubNav from "../../../Component/RestaurantSubNav/RestaurantSubNav";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <RestaurantSubNav is_active="3" />
        <CheckoutForm />
        <Footer />
    </React.Fragment>
  )
}

export default CheckoutPage;
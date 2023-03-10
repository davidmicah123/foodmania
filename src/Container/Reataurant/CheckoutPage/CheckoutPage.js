import React from "react";
import Navbar from "../../../Component/Navbar/Navbar";
import Footer from "../../../Component/Footer/Footer";
import RestaurantSubNav from "../../../Component/RestaurantSubNav/RestaurantSubNav";

const CheckoutPage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <RestaurantSubNav />
        <Footer />
    </React.Fragment>
  )
}

export default CheckoutPage;
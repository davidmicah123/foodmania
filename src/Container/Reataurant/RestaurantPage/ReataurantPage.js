import React from "react";
import Navbar from "../../../Component/Navbar/Navbar";
import Footer from "../../../Component/Footer/Footer";
import RestaurantList from "../RestaurantList";
import RestaurantHero from "../RestaurantPageHero/RestaurantPageHero";
import RestaurantSubNav from "../../../Component/RestaurantSubNav/RestaurantSubNav";

const ReataurantPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <RestaurantSubNav is_active="1" />
      <RestaurantHero />
      <RestaurantList />
      <Footer />
    </React.Fragment>
  );
};

export default ReataurantPage;

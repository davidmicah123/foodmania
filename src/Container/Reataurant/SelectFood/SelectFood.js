import React from 'react';
import Navbar from '../../../Component/Navbar/Navbar';
import Footer from '../../../Component/Footer/Footer';
import RestaurantSubNav from '../../../Component/RestaurantSubNav/RestaurantSubNav';
import RestaurantHero from '../RestaurantHero/RestaurantHero';
import RestaurantShop from '../RestaurantShop/RestaurantShop';


const SelectFood = () => {
  return (
    <React.Fragment>
        <Navbar />
        <RestaurantSubNav is_active="2" />
        <RestaurantHero />
        <RestaurantShop />
        <Footer />
    </React.Fragment>
  )
}

export default SelectFood;
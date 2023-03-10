import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import OrderProcess from '../../Component/OrderProcess/OrderProcess';
import Reataurant from '../../Component/Reataurant/Reataurant';
import Hero from '../../Component/Hero/Hero';
import Dish from '../../Component/Dish/Dish';


function Home() {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Dish />
        <OrderProcess />
        <Reataurant />
        <Footer />
    </React.Fragment>
  )
}

export default Home;
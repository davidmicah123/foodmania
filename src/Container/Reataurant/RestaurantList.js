import React from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantData } from './RestaurantData';
import classes from "./RestaurantList.module.css";

const RestaurantList = () => {
  return (
    <section className={classes.restaurant_list}>
        {
            restaurantData.map( (reataurant, index) => {
                return <RestaurantCard 
                    key={index}
                    restaurant_card_img={reataurant.Restaurant_img}
                    restaurant_card_header={reataurant.Restaurant_name}
                    restaurant_card_text={reataurant.Restaurant_description}
                />
            })
        }
    </section>
  )
}

export default RestaurantList;
import React, { PureComponent } from 'react';
import classes from "./Reataurant.module.css";
import { restaurantData } from '../../Container/Reataurant/RestaurantData';
import { reduxWrapper } from '../../Store';
import RestaurantCard from './RestaurantCard';



const Reataurant = () => {
  return (
    <section className={classes.restaurant_section}>
        <div className={classes.restaurant_header_wrapper}>
            <h2 className={classes.restaurant_header}>Featured Restaurants</h2>
        </div>
        <div className={classes.restaurant_card_wrapper}>
            {
                restaurantData.map( (restaurant, index) => {
                    return <RestaurantCard 
                        key={index}
                        restaurantId={restaurant.restaurantId}
                        restaurant_card_img={restaurant.Restaurant_img}
                        restaurant_card_header={restaurant.Restaurant_name}
                        restaurant_card_text={restaurant.Restaurant_description.length > 150 ? restaurant.Restaurant_description.slice(0, 150) + '...' : restaurant.Restaurant_description}
                    />
                })
            }
        </div>
    </section>
  )
}

export default reduxWrapper(Reataurant);
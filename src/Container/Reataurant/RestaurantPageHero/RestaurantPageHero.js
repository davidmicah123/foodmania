import React from 'react';
import classes from "./RestaurantPageHero.module.css";

const RestaurantPageHero = () => {
  return (
    <section className={classes.restaurant_hero__section}>
        <div className={classes.restaurant_hero_container}>
            <h2>Restaurant</h2>
        </div>
    </section>
  )
}

export default RestaurantPageHero;
import React from 'react';
import classes from "./RestaurantHero.module.css";
import img from '../../../Assets/images/Res_img/6290877b473ce.jpg';
import { allRestaurantData } from '../Data/singleReataurantData';
import { reduxWrapper } from '../../../Store';

const RestaurantHero = (props) => {
  let currentRestaturant = props.redux.restaurant.currentRestaurantId;
  return (
    <section className={classes.hero__section}>
        <div className={classes.hero_container}>
            <div className={classes.restaurant_overview_box}>
              <img src={img} className={classes.restaurant_img} alt='restaurant' />
              <div className={classes.restaurant_box_txt}>
                <h3>{allRestaurantData[currentRestaturant].restaurant_name}</h3>
                <p>{allRestaurantData[currentRestaturant].restaurant_overview}</p>
                <p>{allRestaurantData[currentRestaturant].restaurant_address}</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default reduxWrapper(RestaurantHero);
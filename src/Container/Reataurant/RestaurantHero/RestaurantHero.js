import React from 'react';
import classes from "./RestaurantHero.module.css";
import img from '../../../Assets/images/Res_img/6290877b473ce.jpg';

const RestaurantHero = () => {
  return (
    <section className={classes.hero__section}>
        <div className={classes.hero_container}>
            <div className={classes.restaurant_overview_box}>
              <img src={img} className={classes.restaurant_img} alt='restaurant' />
              <div className={classes.restaurant_box_txt}>
                <h3>North Street Tavern</h3>
                <p>We sell spicy and yummy food over here</p>
                <p>1128 North St, White Plains</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default RestaurantHero;
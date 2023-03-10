import React from 'react';
import classes from "./RestaurantCard.module.css";

const RestaurantCard = (props) => {
  return (
    <div className={classes.restaurant_card}>
        <img src={props.restaurant_card_img} alt="" className={classes.restaurant_card_img} />
        <div>
            <h3>{props.restaurant_card_header}</h3>
            <p>{props.restaurant_card_text}</p>
        </div>
        <div className={classes.restaurant_action_btn_wrapper}>
          <button className={classes.restaurant_action_btn}>View Menu</button>
        </div>
    </div>
  )
}

export default RestaurantCard;
import React from 'react';
import classes from "./Dish.module.css";
import zig_zag_img from '../../Assets/images/zig-zag.png';

const DishCard = (props) => {
  return (
    <div className={classes.dishes_card}>
        <div className={classes.dishes_card_img_wrapper}>
            <img src={props.dish_img} alt="" className={classes.dishes_card_img} />
            <img src={zig_zag_img} alt="" className={classes.dish_card_zig_zag} />
        </div>
        <div className={classes.dishes_card_content}>
            <h2 className={classes.dishes_card_header}>{props.dish_name}</h2>
            <p className={classes.dish_card_txt}>{props.dish_description}</p>
            <div className={classes.dish_card_action_area}>
                <p className={classes.dish_price}>${props.dish_price}</p>
                <button className={classes.order_btn}>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default DishCard;
import React from "react";
import classes from "./RestaurantSubNav.module.css";

const RestaurantSubNav = (props) => {
    const chooseRestaurant = props.is_active === "1" ? classes.active : '';
    const pickFood = props.is_active === "2" ? classes.active : '';
    const order = props.is_active === "3" ? classes.active : '';
  return (
    <div className={classes.sub_nav}>
        <div className={classes.sub_nav_container}>
            <div className={`${classes.sub_nav_div} ${chooseRestaurant}`}>
                <button className={classes.sub_nav_btn}>1</button>
                <p>Choose Restaurant</p>
            </div>
            <div className={`${classes.sub_nav_div} ${pickFood}`}>
                <button className={classes.sub_nav_btn}>2</button>
                <p>Pick Your favorite food</p>
            </div>
            <div className={`${classes.sub_nav_div} ${order}`}>
                <button className={classes.sub_nav_btn}>3</button>
                <p>Order and Pay</p>
            </div>
        </div>
    </div>
  )
}

export default RestaurantSubNav;
import React, { PureComponent } from 'react';
import classes from "./RestaurantCart.module.css";

class RestaurantCart extends PureComponent {
  render() {
    return (
      <div className={classes.cart}>
        <div className={classes.cart_top_area}>
            <h2>Your Cart</h2>
        </div>
        <div className={classes.cart_itam_area}>
            <div className={classes.cart_item}>
                <div className={classes.cart_item_details}>
                    <p>Chicken Madeira</p>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <div className={classes.cart_price_area}>
                    <p className={classes.item_price}>$23.00</p>
                    <p className={classes.item_unit}>1</p>
                </div>
            </div>
            <div className={classes.cart_item}>
                <div className={classes.cart_item_details}>
                    <p>Chicken Madeira</p>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <div className={classes.cart_price_area}>
                    <p className={classes.item_price}>$23.00</p>
                    <p className={classes.item_unit}>1</p>
                </div>
            </div>
            <div className={classes.cart_item}>
                <div className={classes.cart_item_details}>
                    <p>Chicken Madeira</p>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <div className={classes.cart_price_area}>
                    <p className={classes.item_price}>$23.00</p>
                    <p className={classes.item_unit}>1</p>
                </div>
            </div>
        </div>
        <div className={classes.cart_bottom_area}>
            <p>TOTAL</p>
            <p className={classes.total_price}>$35</p>
            <p>Free Delivery!</p>
            <button className={classes.checkout_btn}>Checkout</button>
        </div>
      </div>
    )
  }
}

export default RestaurantCart;
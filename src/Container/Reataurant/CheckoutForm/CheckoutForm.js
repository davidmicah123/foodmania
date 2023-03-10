import React from 'react';
import classes from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  return (
    <section className={classes.checkout_form_area}>
        <div className={classes.checkout_form}>
            <h3 className={classes.checkout_form_header}>Cart Summary</h3>
            <div className={classes.checkout_details}>
                <div className={classes.checkout_item}>
                    <p>Cart Subtotal</p>
                    <p>$35</p>
                </div>
                <div className={classes.checkout_item}>
                    <p>Delivery Charges</p>
                    <p>Free</p>
                </div>
                <div className={classes.checkout_item}>
                    <p className={classes.price}>Total</p>
                    <p className={classes.price}>$35</p>
                </div>
            </div>
            <div className={classes.payment_method_area}>
                {/* <div> */}
                    <div className={classes.payment_method}>
                        <input type='radio' name='payment_option' checked />
                        <p>Cash on Delivery</p>
                    </div>
                    <div className={classes.payment_method}>
                        <input type='radio' name='payment_option' />
                        <p>Paypal</p>
                    </div>
                {/* </div> */}
            </div>
            <button className={classes.order_btn}>Order Now</button>
        </div>
    </section>
  )
}

export default CheckoutForm;
import React from 'react';
import classes from "./Footer.module.css";
import paypal_logo from "../../Assets/images/paypal.png";
import mastercard_logo from "../../Assets/images/mastercard.png";
import stripe_logo from "../../Assets/images/stripe.png";
import bitcoin_logo from "../../Assets/images/bitcoin.png";

function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.footer_content_wrapper}>
            <div className={classes.footer_address}>
                <h2>Address</h2>
                <p className={classes.footer_txt}>1086 Stockert Hollow Road, Seattle</p>
                <p className={classes.footer_txt}>Phone: 75696969855</p>
            </div>
            <div className={classes.footer_info}>
                <h2>Addition informations</h2>
                <p className={classes.footer_txt}>Join thousands of other restaurants who benefit from having partnered with us.</p>
            </div>
            <div className={classes.footer_payment_method}>
                <h2>Payment Options</h2>
                <div className={classes.payment_option_wrapper}>
                    <img src={paypal_logo} alt="" className={classes.payment_option_img} />
                    <img src={mastercard_logo} alt="" className={classes.payment_option_img} />
                    <img src={mastercard_logo} alt="" className={classes.payment_option_img} />
                    <img src={stripe_logo} alt="" className={classes.payment_option_img} />
                    <img src={bitcoin_logo} alt="" className={classes.payment_option_img} />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
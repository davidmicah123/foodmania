import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Navbar.module.css";
import foodmania from '../../Assets/images/food-mania-logo.png';


const MobileNav = (props) => {
  return (
    <div className={classes.mobile_nav}>
        <div className={classes.mobile_nav_content_wrapper}>
            <div className={classes.mobile_nav_closer} onClick={props.mobile_nav_closer}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <div className={classes.mobile_nav_logo_wrapper}> 
                <img src={foodmania} alt="" className={classes.logo}/> 
            </div>
            <ul className={classes.mobile_nav_link_wrapper}>
              <Link to='/Home' className={classes.link}>
                <li>Home</li>
              </Link>
              <Link to='/ReataurantPage' className={classes.link}>
                <li>Restaurant</li>
              </Link>
              <Link to='/Login' className={classes.link}>
                <li>Login</li>
              </Link>
              <Link to='/Signup' className={classes.link}>
                <li>Register</li>
              </Link>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav;
import React from 'react';
import classes from "./Navbar.module.css";
import logo from "../../Assets/images/icn.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={classes.nav}>
        <div className={classes.nav_wrapper}>
            <div className={classes.logo_wrapper}> 
                {/* <img src="./Assets/images/food-mania-logo.png" alt="" className={classes.logo}/>  */}
                <img src={logo} alt="" className={classes.logo} />
            </div>
    
            <ul className={classes.nav_link_wrapper}>
              <Link to='/Home' className={classes.link}>
                <li>Home</li>
              </Link>
              <Link to='/Home' className={classes.link}>
                <li>Meals</li>
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
    </nav>
  )
}

export default Navbar
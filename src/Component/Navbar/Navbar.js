import React, { PureComponent } from 'react';
import classes from "./Navbar.module.css";
// import logo from "../../Assets/images/icn.png";
import foodmania from '../../Assets/images/food-mania-logo.png';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

class Navbar extends PureComponent {
  state = {
    isMobileNavOpen: false
  }

  openMobileNav = () => {
    this.setState({isMobileNavOpen: true});
  }

  closeMobileNav = () => {
    this.setState({isMobileNavOpen: false});
  }

  render(){
    return (
      <nav className={classes.nav}>
          <div className={classes.nav_wrapper}>
              <div className={classes.logo_wrapper}> 
                  <img src={foodmania} alt="" className={classes.logo}/> 
              </div>
      
              <ul className={classes.nav_link_wrapper}>
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
              <div className={classes.mobile_nav_opener} onClick={this.openMobileNav} >open navbar</div>
          </div>
          { 
            this.state.isMobileNavOpen === true ? 
              <MobileNav 
                mobile_nav_closer={this.closeMobileNav}
              /> 
            : null
          }
      </nav>
    )
  }
}

export default Navbar;
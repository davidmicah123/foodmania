import React from 'react';
import classes from "./Reataurant.module.css";
import eatly from '../../Assets/images/Res_img/606d720b5fc71.jpg';
import bitemore from '../../Assets/images/Res_img/6290af6f81887.jpg';
import mrbigs from '../../Assets/images/Res_img/6290877b473ce.jpg';
import hexagon from '../../Assets/images/Res_img/6290860e72d1e.jpg';

const RestaurantCard = (props) => {
    return(
        <div className={classes.restaurant_card}>
            <img src={props.restaurant_card_img} alt="" className={classes.restaurant_card_img} />
            <div>
                <h3>{props.restaurant_card_header}</h3>
                <p>{props.restaurant_card_text}</p>
            </div>
        </div>
    )
}

const Reataurant = () => {
  return (
    <section className={classes.restaurant_section}>
        <div className={classes.restaurant_header_wrapper}>
            <h2 className={classes.restaurant_header}>Featured Restaurants</h2>
        </div>
        <div className={classes.restaurant_card_wrapper}>
            <RestaurantCard 
                restaurant_card_img={eatly}
                restaurant_card_header='North Street Tavern'
                restaurant_card_text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus amet iure veniam quo, qui error corporis quaerat iusto maxime?'
            />
            <RestaurantCard 
                restaurant_card_img={bitemore}
                restaurant_card_header='Nan Xiang Xiao Long Bao'
                restaurant_card_text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus amet iure veniam quo, qui error corporis quaerat iusto maxime?'
            />
            <RestaurantCard 
                restaurant_card_img={mrbigs}
                restaurant_card_header='Eataly'
                restaurant_card_text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus amet iure veniam quo, qui error corporis quaerat iusto maxime?'
            />
            <RestaurantCard 
                restaurant_card_img={hexagon}
                restaurant_card_header='Highlands Bar & Grill'
                restaurant_card_text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus amet iure veniam quo, qui error corporis quaerat iusto maxime?'
            />
        </div>
    </section>
  )
}

export default Reataurant;
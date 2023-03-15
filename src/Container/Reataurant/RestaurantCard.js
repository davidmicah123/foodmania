import React, { PureComponent } from 'react';
import classes from "./RestaurantCard.module.css";
import { reduxWrapper } from '../../Store';
import { restaurantActions } from '../../Store';
import WithRouter from "../../Container/HOC/WithRouter";

class RestaurantCard extends PureComponent {

    viewRestaurant = () => {
        console.log(this.props.restaurantId);
        this.props.dispatch(restaurantActions.setcurrentRestaurantId({currentRestaurantId: this.props.restaurantId}));
        this.props.router.navigate('/selectFood');
        setTimeout(() => {
            console.log(this.props.redux.restaurant);            
        }, 2000);
    }

    render(){
      return (
        <div className={classes.restaurant_card} onClick={this.viewRestaurant} >
            <img src={this.props.restaurant_card_img} alt="" className={classes.restaurant_card_img} />
            <div>
                <h3>{this.props.restaurant_card_header}</h3>
                <p>{this.props.restaurant_card_text}</p>
            </div>
            <div className={classes.restaurant_action_btn_wrapper}>
              <button className={classes.restaurant_action_btn} onClick={this.viewRestaurant} >View Menu</button>
            </div>
        </div>
      )
    }
}

export default reduxWrapper(WithRouter(RestaurantCard));
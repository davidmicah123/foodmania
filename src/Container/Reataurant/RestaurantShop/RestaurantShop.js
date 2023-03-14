import React, { PureComponent } from 'react';
import classes from './RestaurantShop.module.css';
import img from '../../../Assets/images/Res_img/6290877b473ce.jpg';
import { allRestaurantData } from '../Data/singleReataurantData';
import { reduxWrapper } from '../../../Store';
import RestaurantCart from '../RestaurantCart/RestaurantCart';

const DishCard = (props) => {
    return (
        <div className={classes.dish_card}>
            <img src={img} alt='' className={classes.dish_card_img} />
            <div className={classes.dish_card_content}>
                <h3>{props.dish_name}</h3>
                <p>{props.dish_description}</p>
            </div>
            <div className={classes.dish_card_pricing_area}>
                <div className={classes.dish_card_price_wrapper}>
                    <p>{props.dish_price}</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <button className={classes.add_to_cart_btn}>Add to Cart</button>
            </div>
        </div>
    );
}

const CartCard = () => {
    
}

class RestaurantShop extends PureComponent {

    render(){
        let currentRestaturant = this.props.redux.restaurant.currentRestaurantId;
        return (
            <section className={classes.shop_section}>
                <RestaurantCart />
                <div className={classes.dish_card_wrapper}>
                    {
                        allRestaurantData[currentRestaturant].restaurant_menu.map( (dish, index) => {
                            return <DishCard 
                                key={index}
                                dish_name={dish.dish_name}
                                dish_description={dish.dish_description}
                                dish_price={dish.dish_price}
                            />
                        })
                    }
                </div>
            </section>
        )
    }
}

export default reduxWrapper(RestaurantShop);
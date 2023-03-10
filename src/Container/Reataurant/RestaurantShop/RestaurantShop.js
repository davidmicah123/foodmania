import React from 'react';
import classes from './RestaurantShop.module.css';
import img from '../../../Assets/images/Res_img/6290877b473ce.jpg';

const DishCard = () => {
    return (
        <div className={classes.dish_card}>
            <img src={img} alt='' className={classes.dish_card_img} />
            <div className={classes.dish_card_content}>
                <h3>Yorkshire Lamb Patties</h3>
                <p>Lamb patties which melt in your mouth, and are quick and easy make. Served hot with a crisp salad which melt in your mouth, and are quick and .</p>
            </div>
            <div className={classes.dish_card_pricing_area}>
                <div className={classes.dish_card_price_wrapper}>
                    <p>$10</p>
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

const RestaurantShop = () => {
  return (
    <section className={classes.shop_section}>
        <div className={classes.dish_card_wrapper}>
            {
                new Array(10).fill('').map( arr => {
                    return <DishCard />
                })
            }
        </div>
    </section>
  )
}

export default RestaurantShop;
import React from 'react';
import classes from "./Dish.module.css";
import dish_img1 from "../../Assets/images/Res_img/dishes/62908867a48e4.jpg";
import dish_img2 from "../../Assets/images/Res_img/dishes/629089fee52b9.jpg";
import dish_img3 from "../../Assets/images/Res_img/dishes/62908bdf2f581.jpg";
import dish_img4 from "../../Assets/images/Res_img/dishes/62908d393465b.jpg";
import dish_img5 from "../../Assets/images/Res_img/dishes/606d7491a9d13.jpg";
import dish_img6 from "../../Assets/images/Res_img/dishes/606d74c416da5.jpg";
import DishCard from './DishCard';

const dishData = [  
    {    
        dish_img: dish_img1,    
        dish_name: "Jollof Rice",    
        dish_description: "A popular West African rice dish cooked in a spicy tomato-based sauce and served with fried plantains and your choice of protein. Very delecious!!!.",    
        dish_price: 1000 
     },
    {    
        dish_img: dish_img2,  
        dish_name: "Egusi Soup",    
        dish_description: "A traditional Nigerian soup made with ground melon seeds, vegetables, and your choice of protein. Served with fufu or pounded yam. Very delecious!!!.",    
        dish_price: 1200 
     },  
    {    
        dish_img: dish_img3,  
        dish_name: "Suya",    
        dish_description: "Spicy skewered meat (usually beef or chicken) marinated in a peanut-based spice blend and grilled over an open flame. Served with sliced onions and tomatoes.",    
        dish_price: 800  
    },  
    {    
        dish_img: dish_img4,  
        dish_name: "Pounded Yam and Egusi Soup",    
        dish_description: "A classic Nigerian combination of smooth, fluffy yam pounded into a dough-like consistency and served with a rich, flavorful soup made with ground melon seeds.",    
        dish_price: 1500 
     },
    {    
        dish_img: dish_img5,  
        dish_name: "Akara",    
        dish_description: "Deep-fried bean cakes made with black-eyed peas, onions, and spices. Served as a snack or breakfast food with pap (a cornmeal porridge) or bread.",    
        dish_price: 500  
    },
    {    
        dish_img: dish_img6,  
        dish_name: "Pepper Soup",    
        dish_description: "A spicy soup made with your choice of protein (goat, chicken, fish, or beef), pepper, onions, and other aromatic spices. Served with a side of rice or yam.",    
        dish_price: 1200 
     }
]


function Dish() {
  return (
    
    <section className={classes.dishes_section}>
        <h2 className={classes.dishes_header}>Popular Dishes of the Month</h2>
        <p className={classes.dishes_sub_heading}>Easiest way to order your favourite food among these top 6 dishes</p>
        <div className={classes.dishes_card_wrapper}>
            {
                dishData.map( (dish, index) => {
                    return (
                        <DishCard
                            key={index}
                            dish_img={dish.dish_img}
                            dish_name={dish.dish_name}
                            dish_description={dish.dish_description}
                            dish_price={dish.dish_price}
                        />
                    );
                })
            }
        </div>
    </section>
  )
}

export default Dish;
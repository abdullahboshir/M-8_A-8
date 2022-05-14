import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    console.log(props)
    return (
        <div className='cart-items'>
            <p>{props.product.name}</p> 
            <img src = {props.product.thumbnail} alt="" />
        </div>
    );
};

export default Cart;
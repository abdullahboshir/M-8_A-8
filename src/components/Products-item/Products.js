import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Products.css"

const Products = (props) => {
    const { product, handleAddToCart } = props;
    const { name, thumbnail, chip, ram, ssd, price } = product;
    return (
        <div className='product-details'>
            <img src={thumbnail} alt="" />
            <div className="products-info">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>{chip}</p>
                <p>Ram: {ram} DDR4</p>
                <p>Storage: {ssd} SSD</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faCartFlatbed}></FontAwesomeIcon></button>
        </div>
    );
};

export default Products;
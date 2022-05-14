import React, { useEffect, useState } from 'react';
import Cart from '../../cart/Cart';
import Products from '../Products-item/Products';
import "./Store.css"

const Store = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products-info.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(cart)
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='main-container'>
            <h1>Select the Products of your choice</h1>
            <div className='store-container'>

                <div className="products-item">
                {
                    products.map(product =><Products
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    ></Products>)
                }
                </div>

                <div className="products-selected-item">
                <h3>Selected Products:</h3> 
                    {
                        cart.map(product => <Cart
                            product={product}
                            key = {product.id}
                        ></Cart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Store;
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../Products-item/Products';
import "./Store.css";

const Store = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products-info.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);


    const handleAddToCart  = (product) => {
        if (cart.find(prod => prod.id === product.id)) {
                alert("This item has already been added")
        } else {
          if (cart.length >= 4) {
            alert("you can added maximum 4 items .....")
    
          } else {
            setCart([...cart, product]);
          }
        }
      };


    const chooseAgainHandle = () => {
        setCart([])
    }

    const random = () => {
        const random = cart;
        if(random.length > 0){
            const SelectRandomOneValue = Math.floor(Math.random() * random.length);
            setCart([random[SelectRandomOneValue]]);
        }
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
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
                </div>
                <div className="products-selected-item">
                    <div className='clear-item'>
                    <div className='clear-items'>
                    <h3>Selected Products:</h3> 
                    {
                            cart.map(cartProduct => <Cart
                                cartProduct={cartProduct}
                                key={cartProduct.id}
                                cart = {cart}
                                setCart = {setCart}
                        ></Cart>)
                        }
                        
                        <div className='choose-btn'>
                        <button onClick={chooseAgainHandle} className = "choose-again-btn">Choose again</button>
                        <button onClick={random} className = "choose-one-btn">Choose one</button>
                      </div>
                   </div>
                    </div>

                    
                </div>
            </div>

        </div>
    );
};

export default Store;
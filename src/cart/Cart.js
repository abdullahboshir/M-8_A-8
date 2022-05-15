import "./Cart.css"

const Cart = (props) => {
    const { cartProduct, setCart, cart } = props;
    const { name, thumbnail, id } = cartProduct;

    let clearHandler = () => {
        setCart(cart.filter(carts => carts.id !== id)) 
    }


    return (
        <div className='cart-items'>
            <img src={thumbnail} alt="" />
            <p>{name}</p> 
            <button onClick={clearHandler}>delete</button>
        </div>
    );
};

export default Cart;
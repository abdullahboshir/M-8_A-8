import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css"

const Cart = (props) => {
    const { cartProduct, setCart, cart } = props;
    const { name, thumbnail, id } = cartProduct;

    let clearHandler = () => {
        setCart(cart.filter(carts => carts.id !== id))
    }


    return (
        <div className="cart-items-container">
             <div className='cart-items'>
            <img src={thumbnail} alt="" />
            <p>{name}</p> 
            </div>
            <div className="btn">
                <button className="delete-btn" onClick={clearHandler}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
       </div>
    );
};

export default Cart;
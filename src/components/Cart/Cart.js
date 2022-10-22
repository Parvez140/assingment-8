import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    // let = [];
    // const (cart)
    
    return (
        <div >
            <h3>Picke Your Car</h3>
            {
                cart.map(product => (
                    <div className='single-cart' key={product.id}>
                        <img src={product.img} alt="" />
                        <h4 className='title'>{product.name}</h4>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                ))
            }
            <div>
                <button>CHOOSE ONE</button>
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;
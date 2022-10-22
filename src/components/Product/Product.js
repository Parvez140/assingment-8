import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {

    const {name, price, img , ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={()=> handleAddToCart(product)} key={product.id} className='btn-cart'>
                <p className='btn-text'>Picked Car<FontAwesomeIcon id='btn-icon' icon={faKey} /></p>
            </button>
        </div>
    );
};

export default Product;
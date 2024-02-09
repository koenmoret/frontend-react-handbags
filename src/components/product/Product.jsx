import React from 'react';
import "./Product.css";

// eslint-disable-next-line react/prop-types
function Product({ label, image, nameOfBag, price }) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={nameOfBag}/>
            <p>{nameOfBag}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;
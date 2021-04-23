import React from 'react';

const Products = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid green', margin: '5px'}}>
            <h3>product name: {product.name}</h3>
            <button onClick={() => addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Products;
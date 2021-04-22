import React from 'react';

const Products = (props) => {
    const {name, id} = props.product;
    return (
        <div style={{border: '1px solid green', margin: '5px'}}>
            <h3>product name: {name}</h3>
            <button>add to cart</button>
        </div>
    );
};

export default Products;
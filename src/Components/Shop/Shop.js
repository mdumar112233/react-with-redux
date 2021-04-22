import React from 'react';
import Products from '../Products/Products';

const products = [
    {name: 'Lenovo laptop', id: 1},
    {name: 'dell laptop', id: 2},
    {name: 'Asus laptop', id: 3},
    {name: 'dcl laptop', id: 4},
    {name: 'hp laptop', id: 5},
]

const Shop = () => {
    return (
        <div>
            <h3>This is shop</h3>
            {
                products.map(pd => <Products product={pd}></Products>)
            }
        </div>
    );
};

export default Shop;


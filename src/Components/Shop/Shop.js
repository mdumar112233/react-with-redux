import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/CartAction';
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

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(shop);

// connect(mapStateToProps, mapDispatchToProps)(Shop),


export default connect(mapStateToProps, mapDispatchToProps)(Shop)
;


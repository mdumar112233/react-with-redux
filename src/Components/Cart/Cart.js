import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/CartAction';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h3>This is cart</h3>
            <ul>
                {
                    cart.map(id => <li>{id} <button onClick={()=> removeFromCart(id)}>x</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
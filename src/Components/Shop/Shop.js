import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/CartAction';
import Products from '../Products/Products';


const Shop = (props) => {
    console.log(props);
    const {products, addToCart} = props;
    return (
        <div>
            <h3>This is shop</h3>
            {
                products.map(pd => <Products addToCart={addToCart} key={pd.id} product={pd}></Products>)
            }
        </div>
    );
};

// connect with redux store
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


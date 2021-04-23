import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartAction";

const initialState = {
    cart: [],
    products: [
        {name: 'Lenovo laptop', id: 1},
        {name: 'dell laptop', id: 2},
        {name: 'Asus laptop', id: 3},
        {name: 'dcl laptop', id: 4},
        {name: 'hp laptop', id: 5},
    ]
}


const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            console.log(action);
            // const newId = action.id;
            const newItem = {
                productId: action.id,
                productName: action.name,
                cartId: state.cart.length +1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};
            break;

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            console.log(remainingCart);
            return {...state, cart: remainingCart};
        default:
            return state;
    }
}

export default cartReducer;
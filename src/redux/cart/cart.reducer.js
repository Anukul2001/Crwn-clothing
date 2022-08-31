import CartActionTypes from "./cart.types";
import {addItemToCart,removeByOne} from "./cart.utils";
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
};
const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden};
        case CartActionTypes.ADD_ITEMS:return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
        }
        case CartActionTypes.REMOVE_ITEMS:return{
            ...state,
            cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
        }
        case CartActionTypes.REMOVE_ONE_ITEM:return{
            ...state,
            cartItems:removeByOne(state.cartItems,action.payload)
        }
            
            default:
                return state;
    }
};
export default CartReducer;
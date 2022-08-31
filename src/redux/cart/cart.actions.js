import CartActionTypes from "./cart.types";

export const toggleCartHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addItem=item=>({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
});
export const RemoveItemFromCart=item=>({
    type:CartActionTypes.REMOVE_ITEMS,
    payload:item
});
export const removeItem=item=>({
    type:CartActionTypes.REMOVE_ONE_ITEM,
    payload:item
})
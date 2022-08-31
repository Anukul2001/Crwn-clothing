import React from "react";
import './checkout-item.styles.scss';
import {connect } from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {RemoveItemFromCart,addItem,removeItem} from "../../redux/cart/cart.actions";



const CheckoutItem=({cartItem,RemoveItemFromCart,addItem,removeByOne})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return(
    <div className="checkout-item">
<div className="image-container">
    <img alt="item" src={imageUrl} />
</div>
<span className="name">{name}</span>
<span className="quantity">
<div className="arrow" onClick={()=>removeByOne(cartItem)}>&#10094;</div>
<span className="value">{quantity}</span>
<div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
</span>
<span className="price">${price}</span>
<div className="remove-button" onClick={()=>RemoveItemFromCart(cartItem)}>&#10005;</div>

    </div>
)}
const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems 
});
const mapDispatchToProps=dispatch=>({
    RemoveItemFromCart:item=>dispatch(RemoveItemFromCart(item)),
    removeByOne:item=>dispatch(removeItem(item)),
    addItem:item=>dispatch(addItem(item))
})

    export default connect(mapStateToProps,mapDispatchToProps)(CheckoutItem);
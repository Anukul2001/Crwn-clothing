import React from "react";
import "./cart-dropdown.styles.scss";
import  CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect } from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect';
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown=({item,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            item.length?
            item.map(item=> (<CartItem key={item.id} item={item} />))
            :<div className="empty-message">Cart Is Empty!</div>
            }
           
        </div>
        <CustomButton onClick={
            ()=>{history.push('/checkout');
            dispatch(toggleCartHidden());}
            }> CheckOut</CustomButton>
    </div>
);
const mapStateToProps=createStructuredSelector({
    item:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
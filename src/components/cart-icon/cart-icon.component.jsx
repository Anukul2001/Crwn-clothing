import React from "react";
import "./cart-icon.styles.scss";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector,selectHidden} from "reselect";

const CartIcon=({toggleCartHidden,noOfItems})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{noOfItems}</span>
    </div>
);
const mapDispatchToProps=dispatch=>({
toggleCartHidden: ()=>dispatch(toggleCartHidden())
});
const mapStateToProps=createStructuredSelector({
noOfItems:selectCartItemsCount})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
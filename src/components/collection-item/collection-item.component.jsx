import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
const CollectionItem =({item,addItem})=> {

    const {id,name,price,imageUrl}=item;

    return(
<div className="collection-item">
    <div className="image" style={{
        backgroundImage:`url(${imageUrl})`
    }} />

    <div className="collection-footer" >
        <span className="name">{name}</span>
        <span className="price">${price}</span>
</div>
<CustomButton inverted onClick={()=>addItem(item)}>Add To Cart</CustomButton>
</div>
    )
}
const mapDispatchToProps=dispatch=>({
    addItem:item=> dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
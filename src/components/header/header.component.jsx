import React from "react";
import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const Header =({currentUser,hidden})=>(
    <div className="header">
<Link to="/" className="logo-container">
<Logo />
</Link>
<div className="options">
    <Link className="option" to="/shop">SHOP</Link>
    <Link className="option" to="/contact">CONTACT </Link>
    <Link>
       {
           currentUser?<div className="option" onClick={()=>auth.signOut()}  >SIGN OUT</div>:<Link to="/signin" className="option">SIGN IN</Link>
       }
    </Link>
  <CartIcon />
</div>
{
    hidden ? true : <CartDropdown />
}

    </div>
);
const mapStateToProps= createStructuredSelector({
currentUser:selectCurrentUser,
hidden:selectHidden
})
export default connect(mapStateToProps)(Header);
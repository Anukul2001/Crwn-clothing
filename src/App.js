import React from "react";
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from "./pages/homepage/Homepage.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shops/shop.component";
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import Header from "./components/header/header.component";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from 'reselect';


class App extends React.Component{
 
  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
if(userAuth){
  const userRef=await createUserProfileDocument(userAuth);
   userRef.onSnapshot(snapShot=>{
    setCurrentUser({
      id:snapShot.id,
      ...snapShot.data()
    })
    console.log(setCurrentUser)
  })
}
else{ 
  setCurrentUser(userAuth)
}console.log(setCurrentUser);

  })
    }
    componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 render(){
  return (
    <div>
    <Header />
    <Switch>
 <Route exact path='/' component={HomePage} />
 <Route  path='/shop' component={ShopPage} />
 <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to="/"/>) :(<SignInAndSignUp />)}/>
 <Route exact path='/checkout' component={CheckOutPage} />

 </Switch> </div>
  );
 }
  
}
const mapStateToProps = createStructuredSelector({
currentUser:selectCurrentUser
})
const setDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,setDispatchToProps)(App);

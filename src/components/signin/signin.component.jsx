import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import "./signin.styles.scss";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= async event=>{
event.preventDefault();
try{
    const {email,password}=this.state;
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({email:"",password:""})

} catch(error){
    console.error(error);
}
    }


    handleChange=(event)=>{
        const {name,value}=event.target;

        this.setState({[name]:value})
    }
    render(){
        const {email,password}=this.state;
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>login using Email and Password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" handleChange={this.handleChange} value={email} label="Email"/>
                <FormInput label="Password" type="password" name="password" value={password} onChange={this.handleChange}/>
               <div class="button">
               <CustomButton  type="submit">SIGN IN</CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogle>Sign in with Google</CustomButton>
                </div>
                </form>
                
            </div>
        )
    }
}
export default SignIn;
import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up-page.styles.scss";

const SignInAndSignUp=()=>{
    return(
        <div className="sign-in-sign-up">
             <SignIn />
             <SignUp />
        </div>
       
        
    )
}
export default SignInAndSignUp;
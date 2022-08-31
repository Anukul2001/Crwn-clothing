import React from "react";
import StripeCheckout from "react-stripe-checkout";
import SrtipCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='';
    
   const onTaken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='crwn-clothing company Ltd.'
            billingAddress
            shippingAdress
            description={`Your Total Amount is $${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onTaken}
            stripeKey={publishableKey}

        />
    )
}
export default StripeCheckoutButton;

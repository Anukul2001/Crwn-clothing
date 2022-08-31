import React from "react";
import './custom-button.styles.scss';



const CustomButton=({children,isGoogle,inverted,...otherprops})=>
(<button className={`${inverted?"inverted":""} ${isGoogle?'google-button':''} custom-button`} {...otherprops}>
    {children}
</button>
);
export default CustomButton;
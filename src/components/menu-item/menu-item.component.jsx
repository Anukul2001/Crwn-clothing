import React from 'react';
import "./menu-item.styles.scss";
import {withRouter} from 'react-router-dom';
 const MenuItem= ({title,imageUrl,size,history,match,linkUrl}) => (
    <div className={`${size} menu-item` } onClick={()=>history.push(`${match.url}${linkUrl}`)}>
<div style={{backgroundImage:`url(${imageUrl})`}} className="background-img" > </div>
                    <div className="content" >
                        <h1 className="title">{title}</h1>
                        <span className="subtitle">shop now</span>
                    </div>
               
                </div>
);

export default withRouter(MenuItem);
import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import "./collection-overview.styles.scss";
import {selectCollectionData} from "../../redux/collection/collection.selectors"

const CollectionOverview=({collections})=>(
    
<div className="collection-overview">
{ collections.map(({id,...collectionItems})=>(
        <CollectionPreview key={id} {...collectionItems} />
    ))
}   
 </div>
);

const mapStateToProps=createStructuredSelector(
    
      { collections: selectCollectionData}
    
)
export default connect(mapStateToProps)(CollectionOverview);
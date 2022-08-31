import {createSelector} from "reselect";

const selectCollection=state=>state.collection;


export const selectCollectionData=createSelector(
    [selectCollection],
    collection=>collection.SHOP_DATA
);

export const selectCollections=collectionUrlParam=>createSelector(
    [selectCollectionData],
    SHOP_DATA=>SHOP_DATA[collectionUrlParam]
    );
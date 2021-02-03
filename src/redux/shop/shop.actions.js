import ShopActionTypes  from './shop.types';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap

});

export const fetchCollectionsFailure =  errormessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errormessage
});

// this function pass to the component to start the proccess
export const fetchCollectionsStartAsync = () => {
    
    return dispatch => {

        const collectionRef = firestore.collection('collections');

        //doing the dispatch the moment that this function gets call (this is because of redux-thunk)
        dispatch(fetchCollectionsStart());

        /** PROMISE PATTERN => just resive data when mount or remount our shop (API call)*/
          collectionRef
                .get()
                .then( snapshot => {
                     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);           
                     //when it success we put the collection into the dispatch
                     dispatch(fetchCollectionsSuccess(collectionsMap))
                 })
                 .catch(error => dispatch(fetchCollectionsFailure(error)));

    };
};
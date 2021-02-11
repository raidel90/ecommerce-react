import {all, call} from 'redux-saga/effects';

import {shopSagas} from '../redux/shop/shop.saga';
import { userSagas } from "../redux/user/user.sagas";
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga(){
   /** with this ALL we can call any   number of sagas
    *  and initialize them all on separate
    *  
    * ***this help us to pass all of saga
    * from here and not in:
    *  / store.js => sagaMiddleware.run(rootSaga);

    */
    yield all([
        /**we can call it like this too:
         * fet fetchCollectionsStart()
         */
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ]);
}
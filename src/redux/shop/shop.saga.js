import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();

    /**
     * more yields = more ways to test
     * snapshot is the parameter that we pass to the function convertColle...
     * we use CALL if it takes many time
     * */
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    /**
     * PUT is equal to dispatch
     */
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );

}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
  };
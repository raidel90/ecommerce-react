import { connect } from "react-redux";
import { compose } from "redux";

import {  createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});


/**Compose evaluates from right to left (equivalent to: connect(mapStateToProps)(WithSpinner(CollectionsOverview)) */
const  CollectionsOverviewContainer = compose(
                                                    connect(mapStateToProps),
                                                    WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
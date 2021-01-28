import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import  CollectionPreview  from "../collection-preview/collection-preview.component";

import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => (
   <div className='collections-overview'>{
        collections.map(({id, ...otherColletionProps}) => (<CollectionPreview key={id} {...otherColletionProps} className=''/>))
    }
    </div>
);

const mapStateToProps= createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
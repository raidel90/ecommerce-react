import React from "react";

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollections} from '../../redux/shop/shop.selector';

import  ColletionPreview  from "../../components/collection-preview/collection-preview.component";


const ShopPage = ({collections}) => {

    return(
        <div className='shop-page'>
            {
                collections.map(({id, ...otherColletionProps}) => (<ColletionPreview key={id} {...otherColletionProps} className=''/>))
            }
        </div>
     );
     
}

const mapStateToProps= createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
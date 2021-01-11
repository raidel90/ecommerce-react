import React from "react";
import SHOP_DATA from './shop.data.js';
import  ColletionPreview  from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component{
 
    constructor(props){
     super(props);

    this.state= {
        collection: SHOP_DATA
    };
 }

 render(){
const {collection} = this.state;
    return(
        <div className='shop-page'>
            {
                collection.map(({id, ...otherColletionProps}) => (<ColletionPreview key={id} {...otherColletionProps} className=''/>))
            }
        </div>
     );
     
 }

}

export default ShopPage;
import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom';

import {toogleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItems}  from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
         {
             cartItems.length ?

             cartItems.map(
                             cartItem =>  <CartItem key={cartItems.id} item={cartItem} />
                          )
                             :
                             <span className='empty-message'>El carrito esta vacío</span>
         }
                    
         </div>
           <CustomButton onClick={() => {history.push('/checkout'); dispatch(toogleCartHidden());}} >Ver mas</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
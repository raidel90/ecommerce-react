import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems}  from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
         {
             cartItems.map(
                             cartItem =>  <CartItem key={cartItems.id} item={cartItem} />
                          )
         }
                    
         </div>
           <CustomButton>Ver mas</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
   cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
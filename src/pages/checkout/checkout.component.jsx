import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const checkoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span className="">Producto</span>
      </div>
      <div className="header-block">
        <span className="">Descripcion</span>
      </div>
      <div className="header-block">
        <span className="">Cantidad</span>
      </div>
      <div className="header-block">
        <span className="">Precio</span>
      </div>
      <div className="header-block">
        <span className="">Eliminar</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className='text-warning'>
        *Por favor use la siguiente tarjeta*
        <br/>
        4242 4242 4242 4242 - exp 01/21 - cvv:123 
    </div>
        <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(checkoutPage);

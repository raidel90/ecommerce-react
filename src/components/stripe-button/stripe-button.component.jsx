import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

//4242 4242 4242 4242
//01/21
//123

const StripeCheckoutButton  = ({price}) => {
    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_51IEhSBH0i0O90QLrSIaHqmhyhkyhPUbwNmE3o9gqzE9SCnTiiv1e7RcpjwQBZh3DuL5wKGfDrqbQSXv84O9rjnFo00OKg2mwGX';

  const onTocken = tocken => {
        console.log(tocken)
        alert('pago realizado correctamente');
    }
    return(
        <StripeCheckout 
            label='Pagar Ahora'
            name='CRWN ecommerce test'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`El total es $${price}`}
            amount ={priceForStripe}
            panelLabel='Pagar ahoraa'
            token={onTocken}
            stripeKey={PublishableKey}
        />
    );
}

export default StripeCheckoutButton;
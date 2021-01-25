export const addItemToCart = (cartItems, cartItemToAdd) =>{
   
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem){

        return cartItems.map(
            
                                cartItem => 

                                cartItem.id === cartItemToAdd.id 

                                ? {...cartItem, quantity:cartItem.quantity+1}

                                : cartItem
                              )
    }

    //se agrega la cantidad=1 la primera vez cuando se adiciona un producto
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id)

    // if item already in cart, find the matching item and update the quantity.
    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        })
    }

    // if item doesn't yet exist in cart, add it now.
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
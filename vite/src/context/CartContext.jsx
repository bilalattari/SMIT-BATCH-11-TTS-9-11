import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const items = localStorage.getItem('cartItems')
        if (items) {
            setCartItems([...JSON.parse(items)])
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item) => {
        const arr = cartItems
        const productIndex = cartItems.findIndex((data) => data.id == item.id)
        if (productIndex === -1) {
            arr.push(item)
        } else {
            arr[productIndex].quantity++
        }
        setCartItems([...arr])
    }

    const removeItemFromCart = (id) => {
        const arr = cartItems
        const productIndex = cartItems.findIndex((data) => data.id == id)
        arr.splice(productIndex, 1)
        setCartItems([...arr])
    }

    const isItemAdded = (id) => {
        const productIndex = cartItems.findIndex((data) => data.id == id)
        if (productIndex == -1) {
            return null
        } else {
            return cartItems[productIndex]
        }

    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            isItemAdded
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
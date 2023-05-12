import { createContext, useState, useContext } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
           const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }

                    return productUpdated
                } else {
                    return prod
                }
           })

           setCart(cartUpdated)
        }    
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }
    
    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })

        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const productAdded = cart.find(prod => prod.id === id)
        const quantity = productAdded?.quantity || 0

        return quantity
    }

    const incrementQuantity = (id, stock) => {
        const cartUpdated = cart.map(prod => {
            if(prod.id === id) {
                const productUpdated = {
                    ...prod,
                    quantity: prod.quantity < stock ? prod.quantity + 1 : prod.quantity 
                }

                return productUpdated
            } else {
                return prod
            }
       })

       setCart(cartUpdated)
    }

    const decrementQuantity = (id) => {
        const cartUpdated = cart.map(prod => {
            if(prod.id === id) {
                const productUpdated = {
                    ...prod,
                    quantity: prod.quantity > 1 ? prod.quantity - 1 : prod.quantity 
                }

                return productUpdated
            } else {
                return prod
            }
       })

       setCart(cartUpdated)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart, getProductQuantity, incrementQuantity, decrementQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
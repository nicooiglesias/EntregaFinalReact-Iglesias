import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, total, incrementQuantity, decrementQuantity, clearCart } = useCart()

    return (
        <div>
            <h1>Detalles de compra</h1>
            
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h2>{prod.nombre}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>${prod.precio} x Unidad</h2>
                                <button onClick={() => decrementQuantity(prod.id)}>-</button>
                                <button onClick={() => incrementQuantity(prod.id, prod.stock)}>+</button>
                            </div>
                        )
                    })
                }
            </div>

            <h1>Total de la compra: ${total}</h1>
            <Link to='/checkout' className="Option">Checkout</Link>
            <button className="Option" onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
import { useCart } from "../../data/context/CartContext"
import { Link } from 'react-router-dom'
import styles from './cart.module.css'

const Cart = () => {
    const { cart, total, incrementQuantity, decrementQuantity, clearCart } = useCart()

    return (
        <div>
            <h1 className="titulo">Detalles de compra</h1>
            
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h2>{prod.nombre}</h2>
                                <h2>${prod.precio} x Unidad</h2>
                                
                                
                                <button className={styles.boton} onClick={() => decrementQuantity(prod.id)}>-</button>
                                
                                <button className={styles.boton} onClick={() => incrementQuantity(prod.id, prod.stock)}>+</button>
                                <h2>Cantidad: {prod.quantity}</h2>
                            </div>
                        )
                    })
                }
            </div>

            <h1>Total de la compra: ${total}</h1>
            <Link to='/checkout' className={styles.boton}>Checkout</Link>
            <button className={styles.boton} onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
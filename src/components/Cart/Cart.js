import { useCart } from "../../data/context/CartContext"
import { Link } from 'react-router-dom'
import styles from './cart.module.css'

const Cart = () => {
    const { cart, total, clearCart, removeItem } = useCart()

    return (
        <div>
            <h1 className="titulo">Detalles de compra</h1>
            
            <div className={styles.carrito}>
                {
                    cart.map(prod => {
                        return (
                            <div  key={prod.id}>
                                <h2>{prod.nombre}</h2>
                                <h2>${prod.precio} x Unidad</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <div className={styles.ItemAction}>
                                    <button className={styles.boton} onClick={() => removeItem(prod.id)}> X
                                    </button>
                                </div>
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



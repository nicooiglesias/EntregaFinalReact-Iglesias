import style from'./ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, nombre, imgpicture, categoria,  precio, stock }) => {
    
    const { addItem, getProductQuantity } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity, stock, imgpicture
        }
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${nombre}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className={style.card}>
        <article className={style.CardItem}>
            <header className={style.Header}>
                <h2 className={style.ItemHeader}>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imgpicture} alt={nombre} className={style.ItemImg}/>
            </picture>
            <section>
                <p className={style.Info}>
                    Categoria: {categoria}
                </p>
                <p className={style.Info}>
                    Precio: {precio}
                </p>
            </section>           
            <footer className={style.ItemFooter}>
                
            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity || 1}/>
                    
                
            </footer>
        </article>
        </div>
    )
}

export default ItemDetail
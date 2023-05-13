import style from'./ItemList.module.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className={style.ListGroup}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList
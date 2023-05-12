import style from'./Item.module.css';
import { Link } from 'react-router-dom'


const Item = ({id, nombre, imgpicture, precio}) => {

    
    return (
        <div className={style.card}>
        <article className={style.CardItem}>
            <header className={style.Header}>
                <h2 className={style.ItemHeader}>
                    {nombre}
                </h2>
            </header>
            <picture className={style.ItemImg}>
                <img className={style.img} src={imgpicture} alt={nombre} />
            </picture>
            <section>
                <p className={style.Info}>
                    Precio: ${precio}
                </p>
            </section>           
            <footer className={style.ItemFooter}>
               <Link to={`/item/${id}`} className={style.ButtonDetail}>Ver detalle</Link>
            </footer>
        </article>
        </div>
    )
}

export default Item
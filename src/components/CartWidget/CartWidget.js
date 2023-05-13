import style from'./CartWidget.module.css'
import cart from './assets/cart.svg'
import { useCart } from '../../data/context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return(
        <div to='/cart' className={style.CartWidget} onClick={() => navigate('/cart')}>
            <img src={cart} alt='cart-widget' className={style.CartImg}/>
            {totalQuantity}
        </div>
    );
}

export default CartWidget
import './CartWidget.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return(
        <div to='/cart' className="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </div>
    );
}

export default CartWidget
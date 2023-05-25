import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import cart from './assets/cart.png'

const styles ={
    img: {
        height: 40
    }
,
span: {
    paddingLeft: 5,
}}

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cart} alt='Imagen de un carrito de compras' style={styles.img}/>
            { totalQuantity }
        </Link>
    )} 


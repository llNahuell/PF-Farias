import Badge from 'react-bootstrap/Badge';

import cart from './assets/cart.png'

const styles ={
    img: {
        height: 40
    }
,
span: {
    paddingLeft: 5,
}

}

export const CartWidget = () => {
    return(
        <Badge bg="dark">
        <img src={cart} alt='Imagen de un carrito de compras' style={styles.img}/>
        <span style={styles.span} >0</span>
        </Badge>

    )
} 
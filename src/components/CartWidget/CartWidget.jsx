import { useContext } from "react"
import { Link } from "react-router-dom"
import "./CartWidget.css"

import { CartContext } from "../../context/CartContext"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import cart from "./assets/cart.png"

const styles = {
	span: {
		paddingLeft: 5,
	},
	img: {
		height: 40,
	},
}

export const CartWidget = () => {
	const { addedProducts } = useContext(CartContext)

	const totalQuantity = () =>
		addedProducts.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity,
			0
		)

	return (
		!!totalQuantity() && (
			<Link to="/cart">
				<Badge bg="dark">
					<img src={cart} alt="Carrito" style={styles.img} />
					<span style={styles.span}>{totalQuantity()}</span>
				</Badge>
				<Button>Terminar mi compra</Button>
			</Link>
		)
	)
}

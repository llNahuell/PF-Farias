import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import "./Cart.css"

import { CartContext } from "../../context/CartContext"

export const Cart = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
        email2:"",
	})

	const { addedProducts, deleteItem, clear } =
		useContext(CartContext)

	const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: addedProducts,
            total: total(),
        }

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response => {
			if (response.id) {
				clear()
				alert("Su orden: " + response.id + " ha sido completada!")
			}
		})
	}

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

	const total = () =>
    addedProducts.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity * valorActual.price,
			0
		)

	return ( 
		<Container className="mt-4">
			<h1>Lista de productos</h1>
			{!addedProducts.length ? (
				<mark>No hay productos</mark>
			) : (
				<>
					<Table bordered>
						<thead>
							<tr>
								<th>Nombre</th>
								<th></th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{addedProducts.map(items => (
								<tr key={items.id}>
									<td>{items.name}</td>
									<td>
										<img
											src={items.img}
											alt={items.name}
										/>
									</td>
									<td>{items.price}</td>
									<td>{items.quantity}</td>
									<td>
										<Button
											onClick={() =>
												deleteItem(items.id)
											}
										>
											Eliminar
										</Button>
									</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td>Total</td>
								<td></td>
								<td></td>
								<td>{total()}</td>
								<td></td>
							</tr>
						</tfoot>
					</Table>
					<h2>Ingresar datos de usuario</h2>
					<Form>
						<Form.Group
							className="mb-3"
							controlId="formBasicEmail"
						>
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.name}
								type="text"
								name="name"
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="formBasicEmail"
						>
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.email}
								type="email"
								name="email"
							/>
						</Form.Group>
                        <Form.Group
							className="mb-3"
							controlId="formBasicEmail"
						>
							<Form.Label>Repetir Email</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.email2}
								type="email2"
								name="email2"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.phone}
								type="text"
								name="phone"
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="button"
							onClick={sendOrder}
						>
							Submit
						</Button>
					</Form>
				</>
			)}
		</Container>
	)
}
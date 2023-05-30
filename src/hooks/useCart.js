import { useState } from "react"

export const useCart = () => {
	const [addedProducts, setAddedProducts] = useState([])

	const addItem = (product, quantity) => {
		const { stock, ...rest } = product
		const alreadyExists = addedProducts.some(
			product => product.id === rest.id
		)
		if (!alreadyExists)
        setAddedProducts(prev => [
				...prev,
				{ ...rest, quantity },
			])
		else {
			const actualizarProductos = addedProducts.map(
				product => {
					if (product.id === rest.id)
						return {
							...product,
							quantity: product.quantity + quantity,
						}
					else return product
				}
			)
			setAddedProducts(actualizarProductos)
		}
	}

	const deleteItem = id => {
		const otrosProductos = addedProducts.filter(
			product => product.id !== id
		)
		setAddedProducts(otrosProductos)
	}

	const clear = () => setAddedProducts([])

	return {
		addedProducts,
		addItem,
		clear,
		deleteItem,
	}
}
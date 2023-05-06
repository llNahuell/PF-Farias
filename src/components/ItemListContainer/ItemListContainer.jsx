import { useEffect, useState } from 'react'
import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'

const styles ={
    h1: 
    {  
        fontSize: 39.9
    }
}

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
    <>
        <Container className='mt-4'><h1 style={styles.h1}>{greeting}</h1></Container>
        <ItemList products={products} />
    </>
    );
}

export default ItemListContainer
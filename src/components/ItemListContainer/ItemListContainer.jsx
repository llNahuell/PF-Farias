import { useEffect, useState } from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'

const styles ={
    h1: 
    {  
        fontSize: 39.9
    }
}

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const{ categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc()
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
    <>
        <Container className='mt-4'><h1 style={styles.h1}>{greeting}</h1></Container>
        <ItemList products={products} />
    </>
    );
}

export default ItemListContainer
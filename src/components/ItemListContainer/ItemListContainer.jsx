import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

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
        const collectionRef = categoryId
            ? query(collection(db, 'items'), where('category', '==', categoryId))
            : collection(db, 'items')

        getDocs(collectionRef)
            .then(response =>{
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
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
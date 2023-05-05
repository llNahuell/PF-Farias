import Container from 'react-bootstrap/Container';
import products from '../../json/products.json'

console.log(products)



const styles ={
    h1: 
    {  
        fontSize: 39.9
    }
}

export const ItemListContainer = ({greeting}) => {
    return(
    <>
    <Container className='mt-4'><h1 style={styles.h1}>{greeting}</h1></Container>
    </>

    
    );
}
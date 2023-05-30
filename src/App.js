import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  { NavBar }  from './components/NavBar/NavBar';
import  ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from "./components/Cart/Cart"

import { CartProvider } from './context/CartContext';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a AltF4, la tienda de componentes que necesitás para tu pc" />}/>     
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>  
          <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;
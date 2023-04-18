import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a AltF4, la tienda de productos que necesitás para tu pc"/>
    </>    
  );
}

export default App;

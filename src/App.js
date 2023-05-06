import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import  { default as ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="Bienvenidos a AltF4, la tienda de componentes que necesitás para tu pc" />
    <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('cantidad agregada ',quantity)} />
  </div>

  );
}

export default App;

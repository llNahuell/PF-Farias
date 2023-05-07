import './App.css';
import  { NavBar }  from './components/NavBar/NavBar';
import  ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="Bienvenidos a AltF4, la tienda de componentes que necesitás para tu pc" />
    <ItemDetailContainer />
  </div>

  );
}

export default App;

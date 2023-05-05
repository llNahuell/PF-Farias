import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={ <ItemListContainer greeting="Bienvenidos a AltF4, la tienda de componentes que necesitás para tu pc" />} />
      <Route path="/category/:id" element={ <ItemListContainer greeting="Bienvenidos a AltF4, la tienda de componentes que necesitás para tu pc" />} />
    </Routes>    
  </BrowserRouter>

  );
}

export default App;

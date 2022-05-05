import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Producto" />}></Route>
      <Route path='/categoria/:categoryId' element={<ItemListContainer greeting="Producto" />}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
    </Routes>
    </div>
  );
}

export default App;

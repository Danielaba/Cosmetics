import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItenCount/ItemCount';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Producto" />
    </div>
  );
}

export default App;

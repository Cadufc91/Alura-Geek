import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Promo from './components/Promo/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Products />
    </div>
  );
}

export default App;

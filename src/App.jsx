import './App.css';
import Consoles from './components/Consoles/Consoles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Miscellaneous from './components/Miscellaneous/Miscellaneous';
import Products from './components/Products/Products';
import Promo from './components/Promo/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Products />
      <Consoles />
      <Miscellaneous />
      <Footer />
    </div>
  );
}

export default App;

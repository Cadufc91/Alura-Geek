import './App.css';
import Consoles from './components/Home/Consoles/Consoles';

import Miscellaneous from './components/Home/Miscellaneous/Miscellaneous';
import Products from './components/Home/Products/Products';
import Promo from './components/Home/Promo/Promo';

function App() {
  return (
    <div className="App">
      <Promo />
      <Products />
      <Consoles />
      <Miscellaneous />
    </div>
  );
}

export default App;

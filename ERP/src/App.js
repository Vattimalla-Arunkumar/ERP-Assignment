
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useRef} from 'react'
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';

function App() {
  const NavbarRef = useRef(null);

  const navbarRefresh = () => {
    NavbarRef.current.refresh();
  }

  return (
    <Router>
      <div className="App">
        <Navbar ref={NavbarRef}/>
        <Routes>
          <Route path="/products" element={<Products navbarRefresh={navbarRefresh}/> } />
          <Route path="/orders" element={<Orders navbarRefresh={navbarRefresh}/> } />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

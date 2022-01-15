
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
// import { ProductDetails } from './components/ProductDetail';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
import { Products } from './components/Products';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route  path="/about" element={<About />} ></Route>
    <Route  path="/contact" element={<Contact />} ></Route>
    <Route  path="/users" element={<Users/>} ></Route>
    <Route  path="/user/:id" element={<UserDetails />} ></Route>
    {/* <Route  path="/product" element={<Products />} ></Route> */}
    <Route  path="/products/:id" element={<Products />} ></Route>
    </Routes>
    </div>
  );
}

export default App;

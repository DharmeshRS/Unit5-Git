
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Settings } from './components/Settings';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route  path="/login" element={<Login />} ></Route>
    <Route  path="/dashboard" element={<Dashboard />} ></Route>
    <Route  path="/setting" element={<Settings/>} ></Route>
    <Route  path="/user/:id" element={<PrivateRoute><UserDetails /></PrivateRoute>} ></Route>
    <Route  path="/user" element={<Users />} ></Route>
    {/* <Route  path="/product" element={<Products />} ></Route> */}
    {/* <Route  path="/products/:id" element={<Products />} ></Route> */}
    </Routes>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import { Login } from './components/Login';
import { Admin } from './components/Admin';
import { SearchJob } from './components/Searchjob';
import { Register } from './components/Register';
import { PrivateRoute } from './components/PrivateRoute';
import {Dashboard} from './components/Dashboard.jsx'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/"></Route> 
          <Route path="/login" element={<Login />}></Route> 
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/searchjob" element={<PrivateRoute><SearchJob /></PrivateRoute>}></Route>
          {/* <Route path="/searchjob" element={<SearchJob />}></Route> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
         
          <Route path="/register" element={<Register />}></Route>

      </Routes>
    </div>
  );
}

export default App;

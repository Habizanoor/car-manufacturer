import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('tools.json')
      .then(res => res.json())
      .then(data => setTools(data));
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:purchaseId' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;

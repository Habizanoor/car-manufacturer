import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  const [tools,setTools] = useState([]);
  useEffect(()=>{
    fetch('tools.json')
    .then(res=> res.json())
    .then(data=>setTools(data));
  },[])

  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>


      {/* <h1>Final assignment</h1>
      <button className="btn">Button</button>
      {
        tools.map(tool => <div>
          <h1>{tool.name}</h1>
          <img src={tool.picture} alt="" />
        </div>)
      } */}
      
    </div>
  );
}

export default App;

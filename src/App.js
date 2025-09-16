import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Pages/Navbar';
import Services from './Components/Pages/Services';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className="App">
        
        <Router>
          <Navbar />
          
            <Routes>
              
              <Route path='/' element={<HomePage/>}/>
              <Route path='/services' element={<Services/>}/>
            </Routes>
          <Footer />
        </Router>

     
    </div>
  );
}

export default App;



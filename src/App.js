import React from "react";

import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Index from './components/index';
import CreditLine from "./components/credit_line/creditLline";


function App() {

    return (
      
      
      <div>
      
        <Navbar />
        
        <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/Bills" element={<Index />} />
        </Routes>
      </Router >
      <CreditLine />
      </div>

    
    );
  }


export default App;


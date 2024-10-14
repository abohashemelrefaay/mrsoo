import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Index from './components/index';
import Bills from "./components/bills/bills";
import Store from "./components/store/store";




function App() {

    return (
      
      
      <div>
      
        <Navbar />
        
        
        <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/Bills" element={<Bills />} />
          <Route exact path="/Store" element={<Store />} />
        </Routes>
      </Router >

      
      </div>

    
    );
  }


export default App;


import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <Router >
        <Header />
        <Home />
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;

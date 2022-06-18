import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Details from './components/details/Details';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element= { <Details />}/>
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

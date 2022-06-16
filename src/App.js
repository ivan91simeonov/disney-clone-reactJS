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

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Home />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/details" element={<Navigate to={< Details />}/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

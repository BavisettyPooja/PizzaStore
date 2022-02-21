import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PizzaPage from './PizzaPage';
import Dessertpage from './DessertPage'
import {GlobalStyle} from './globalFiles'

function App() {
  return (
    <Router>
    <div>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/pizzamenu" element={<PizzaPage/>}></Route>
        <Route path="/dessertmenu" element={<Dessertpage/>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;

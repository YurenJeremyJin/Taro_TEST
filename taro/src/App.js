import React, { Component } from "react";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css'
import HomePage from "./src/pages/HomePage";
import Header from "./src/pages/Header";
import Login from "./src/pages/Login";
import Recipes from "./src/pages/Recipes";
 
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path="/Login" element={<Login/>} exact/>
          <Route path="/Recipes" element={<Recipes/>} exact/>
        </Routes>
        </div>
        </BrowserRouter>
    );
  }
}
 
export default App;
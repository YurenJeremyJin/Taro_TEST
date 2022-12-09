import React, { Component } from "react";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
 
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
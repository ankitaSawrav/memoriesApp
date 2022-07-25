import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js"
import HomePage from "./HomePage.js"
import About from "./About.js"

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Menu/>
            
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/AddMemories' element= {<AddMemories/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        </BrowserRouter>
       


    </div>
  );
}

export default App;


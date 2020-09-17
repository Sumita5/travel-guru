import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';

function App() {
  return (
       
        <Router>
            <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/booking"><Booking/></Route>
                <Route exact path="/"><Home /></Route>
                
            </Switch>
             
        </Router>
            
           
        
        
  );
}

export default App;

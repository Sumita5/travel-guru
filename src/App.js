import React, { createContext, useState } from 'react';
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
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelRoom from './components/HotelRoom/HotelRoom';


export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
        <Router>

            <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/booking/:locationName"><Booking/></Route>
                <Route path="/signin"><SignIn/></Route>
                <PrivateRoute path="/hotelroom/:locationName">
                <HotelRoom />
                </PrivateRoute>
                
                <Route exact path="/"><Home /></Route>
                
            </Switch>
             
        </Router>
        </UserContext.Provider>
           
        
        
  );
}

export default App;

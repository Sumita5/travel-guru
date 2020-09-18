import React, { createContext, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelRoom from './components/HotelRoom/HotelRoom';
import NotFound from './components/NotFound/NotFound';
import Success from './components/Success/Success';


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
                <PrivateRoute path="/Success/:hotelName">
                <Success />
                </PrivateRoute>
                <Route exact path="/"><Home /></Route>
                <Route path="/*"><NotFound /></Route>
            </Switch>    
        </Router>
    </UserContext.Provider>     
  );
}

export default App;

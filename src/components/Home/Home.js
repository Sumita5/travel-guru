

import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import Main from '../Main/Main';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Booking from '../Booking/Booking';
import fakeData from '../../fakeData/fakeData';



const ColorButton = withStyles((theme) => ({
    root: {
      color: 'black',
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
}))(Button);
  
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: '0 530px 0'
    },
}));





const Home = () => {
    const classes = useStyles();
    const [spots, setSpots] = useState((fakeData));
    return (
      
            <div className="home">
                <Header/>
                
                {
                        spots.map(spot => <Main
                            spot={spot}></Main>)
                    }
                
                    
               
                <Link to='/booking'>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                Booking
                </ColorButton>
            </Link>
                
            </div>
            
       
    );
};

export default Home;
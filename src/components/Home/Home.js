import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import Main from '../Main/Main';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import spotData from '../../fakeData/spotData';



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
    const spots = spotData
    return (
        <div className="home">
                <Header/>               
                {
                    spots.map(spot => <Main spot={spot}></Main>)
                }
                <ColorButton onClick={()=> alert("Please Click On Your Destination Image")} variant="contained" color="primary" className={classes.margin}>
                    Booking
                </ColorButton>
           
            </div>  
    );
};

export default Home;
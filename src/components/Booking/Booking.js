import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import './Booking.css';
import spotData from '../../fakeData/spotData';
import { Link, useParams } from 'react-router-dom';



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
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  card:{
    minWidth: 275,
  },
}));

const Booking = () => {
    const {locationName} = useParams();
    const location = spotData.find(city => city.name === locationName);
    const classes = useStyles();

    return (
        <div className='booking'>
            
            <div className='detail'>
                <h1>{location.name}</h1>
                <p>{location.description}</p>
            </div>

            <div className='bookingCard'>
            <Card className={classes.card}>
            <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-uncontrolled"
                        label="Origin"
                        defaultValue="DHAKA"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Destination"
                        defaultValue={location.name}
                        variant="outlined"
                    />
                    <form className={classes.container}>
                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2020-09-17"
                        className={classes.textField}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2020-09-24"
                        className={classes.textField}
                        InputLabelProps={{shrink: true}}
                    />
                    </form>
                    
                    
                    <CardActions>
                        <Link to={"/hotelroom/"+ location.name} >
                        <ColorButton>
                            Start Booking
                        </ColorButton>
                        </Link>
                    </CardActions>
                    
                </form>
            </CardContent>
                </Card>
            </div>
            
        </div>
        
    );
};

export default Booking;
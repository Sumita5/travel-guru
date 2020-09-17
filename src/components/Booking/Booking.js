import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import './Booking.css';
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
    
    
    //  width: theme.spacing(66),
    // height: theme.spacing(30),
    minWidth: 275,

  },
}));

const Booking = () => {
    const [spots, setSpots] = useState((fakeData));
    const classes = useStyles();
    return (
        <div className='booking'>
            <div className='detail'>
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className='bookingCard'>
            <Card className={classes.card}>
            <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-uncontrolled"
                        label="Origin"
                        defaultValue="Dhaka"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Destination"
                        defaultValue="Cox's Bazar"
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
                        <ColorButton>
                            Start Booking
                        </ColorButton>
                    </CardActions>
                    
                </form>
            </CardContent>
                </Card>
            </div>
        </div>
        
    );
};

export default Booking;
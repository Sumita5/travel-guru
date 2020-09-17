import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../images/Logo.png';
import { Button } from '@material-ui/core';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "transparent"
      },
  search: {
    position: 'relative',
    width: '50px',
    border: '1px solid white',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.55),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
    fontColor: 'white',

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  logIn:{
    backgroundColor: "orange",
    color: "black",
    border: "1px solid orange",
    borderRadius: "5px",
    fontFamily:"Roboto"
    
  }
  
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className='header'>
        <AppBar className= {classes.root} position="static">
            <Toolbar>
                <img className='logo' src={logo} alt="" />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search your Destination"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                
                <Button color='inherit'>News</Button>
                <Button color='inherit'>Destination</Button>
                <Button color='inherit'>Blog</Button>
                <Button color='inherit'>Contact</Button>
                <Button className={classes.logIn} >Login</Button>
               
                
                
                
            
            </Toolbar>  
        </AppBar>
    </div>
  );
}

export default Header;
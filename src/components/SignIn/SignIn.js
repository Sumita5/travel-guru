import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm, Controller} from 'react-hook-form'
import DividerWithText from '../DividerWithText/DividerWithText';
import './SignIn.css';
import fb from '../../images/fb.png';
import google from '../../images/google.png';
import {Link} from "react-router-dom";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  
}));

const SignIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: ''
  });


  initializeLoginFramework();

  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
        history.replace(from);
    }
    
};


const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true);
      })
}

const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res, false);
    })
}
const fbSignIn = () => {
  handleFbSignIn()
  .then(res => {
      handleResponse(res, true);
  })
}



 
const handleBlur = (e) => {
  
  let isFieldValid = true; 
  console.log(e.target.value, e.target.name)
  if (e.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  }
  
  if (e.target.name === 'password'){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber =  /\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;
    console.log(isPasswordValid && passwordHasNumber);    
  }
  if (isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
  }
}


  const classes = useStyles();
  const {register,  control} = useForm();

  const handleSubmit = (e) => {
      if (newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true);
            console.log(user.email)
        })
      }

      if (!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            console.log(user,res)
            handleResponse(res, true);
        })
      }
      e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    {!newUser ? <Typography component="h1" variant="h5">
                    Log in
                    </Typography> : <Typography component="h1" variant="h5">
                    Create an account
                    </Typography>}
        <form className={classes.form} onSubmit={handleSubmit}>
            {newUser && 
            <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register({
                            
                            maxLength: 20,
                            
                          })}
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    }
                   
                    
                     
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onBlur={handleBlur}
                    />
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onBlur={handleBlur}
                    />
                 {newUser && <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        autoComplete="current-password"
                    />}
                    <input type="submit" value={newUser ? "Create an account" : "Login"}/>
                    <br/>
                 
                   

                    {!newUser && <FormControlLabel
                        control={
                        <Controller as={Checkbox} control={control} name="remember" color="primary" defaultValue={false}/>}
                        label="Remember me"
                    />}
                    
                    {newUser ?
                        
                            <Grid container>
                                <Grid item xs>
                                
                                    Already have an account?
                                
                                </Grid>
                                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
                                <Grid item >
                                
                                    {"Login"}

                                </Grid>
                            </Grid> 
                        :
                            <Grid container>
                            <Grid item xs>
                                <Link>
                                    Forgot password?
                                </Link>
                                </Grid>

                                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>

                                <Grid item >
                                
                                {"Don't have an account? Sign Up"}
                                
                                </Grid>
                            </Grid>
                            }
                    
        </form>
        
        
        </div>
      <DividerWithText>Or</DividerWithText>
      <button onClick={fbSignIn} class="button"><img src={fb} alt=""/><b>Continue with Facebook</b></button>
      <br/>
      {
      user.isSignedIn && <div>
      <p> Welcome, {user.name}!</p>
      <p>Your email: {user.email}</p>
      <img src={user.photo} alt=""/>
      </div>
    }
    {user.isSignedIn 
        ? 
            <button onClick={signOut}>Sign out</button> 
        :
            <button onClick={googleSignIn} class="button"><img src={google} alt=""/><b>Continue with Google</b></button>
    }
      
    </Container>
  );
}

export default SignIn;
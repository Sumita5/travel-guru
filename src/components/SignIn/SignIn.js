import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
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
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  
}));

const SignIn = () => {

    initializeLoginFramework();


    const classes = useStyles();
    const {register,  control, errors} = useForm({mode: "all"});

    
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            password: ''
    });

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


const fbSignIn = () => {
  handleFbSignIn()
  .then(res => {
      handleResponse(res, true);
  })
}
 
const handleBlur = (e) => {
  
  let isFieldValid = true; 
  if (e.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  }
  if (e.target.name === 'password'){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber =  /\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;  
  }
  if (isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
  }
}
  
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
                            maxLength: 20
                          })}
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    }
                    <span className='error-text'>{errors.name && "Name should not exceed 20 characters"}</span>
                  
                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onBlur={handleBlur}
                    />

                    <span className='error-text'>{errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "pattern" &&"Your email is invalid"}</span>
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register({ required: true, pattern: /\d{1}/ })}  
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onBlur={handleBlur}
                    />

                    <span className='error-text'>{errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "pattern" && "Password must contain at least one number and should be at least 6 characters"}</span>
                    <br/>

                {newUser && <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register({ required: true, pattern: /\d{1}/ })}
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        autoComplete="current-password"
                    />}

                    <span className='error-text'>{errors.confirmpassword?.type === "required" && "Password is required"}
                    {errors.confirmpassword?.type === "pattern" && "Password must contain at least one number and should be at least 6 characters"}</span>
                    <br/>


                    <input className='submit-button' type="submit" value={newUser ? "Create an account" : "Login"}/>
                    <br/>
                 
                   

                    {!newUser && <FormControlLabel
                        control={
                        <Controller as={Checkbox} control={control} name="remember" color="primary" defaultValue={false}/>}
                        label="Remember me"
                    />}
                    
                    {newUser 
                        ?
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
                <button onClick={fbSignIn} class="pill-button"><img src={fb} alt=""/><b>Continue with Facebook</b></button>
                <br/>
                <button onClick={googleSignIn} class="pill-button"><img src={google} alt=""/><b>Continue with Google</b></button>
    </Container>
  );
}

export default SignIn;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { useState } from 'react';

import SignInSide from './SignInSide';

import axios from 'axios';

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/; // This checks for exactly 10 digits
    return phoneRegex.test(phoneNumber);
  }

  function validateForm(data) {
    const errors = {};
  
    if (!validateEmail(data.email)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = '';
    }
  
    if (!validatePassword(data.password)) {
      errors.password = 'Password must be at least 8 characters long';
    }
  
    if (!validatePhoneNumber(data.contact)) {
      errors.contact = 'Invalid phone number';
    } else {
      errors.contact = '';
    }
  
    return errors;
  }
  

function SignUp() {

    const [user,setUser] =useState({
        username:"",
        password:"",
        email:"",
        contactno:"",
        gender:""
    })



   const addData=(event)=>{
    event.preventDefault();
    console.log(user)
    axios.post("http://localhost:8888/userTable",user).then(()=>{
        console.log(user)
        // localStorage.setItem('user',user.username)
        // localStorage.setItem('user',user.email)
    window.alert("User Added Successfully")

    }).catch((err)=>{})
    window.alert("Failed to SignUp")
   }

   const inputHandler = (event) => {
    if (event.target.name === "contact") {
      setUser({ ...user, contactno: event.target.value }); // Update the contactno field in the state
    } else if (event.target.name === "gender") {
      setGender(event.target.value); // Update the gender state
      setUser({ ...user, gender: event.target.value }); // Update the user state for gender
    } else {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
  };
  




  const [gender, setGender] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formErrors = validateForm({
      email: data.get('email'),
      password: data.get('password'),
      contact: data.get('contact'),
    });

    if (Object.keys(formErrors).length === 0) {
      console.log({
        username: data.get('User Name'),
        email: data.get('email'),
        password: data.get('password'),
        gender: gender,
        contact: data.get('contact'),
      });
    } else {
      setErrors(formErrors);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgb(206, 205, 203,0.2)',
            boxShadow: '0px 0px 8px 3px rgb(0, 0, 0,0.2)',
            padding: '20px',
            border: '1px solid #FFD700',
            borderRadius: '30px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#800000' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: 'gold' }}>
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="User Name"
                  label="User Name"
                  onChange={inputHandler} 
                  value={user.username}
                  autoFocus
                  InputLabelProps={{
                    style: { color: 'gold' },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
              <TextField
  error={!!errors.email}
  helperText={errors.email}
  required
  fullWidth
  id="email"
  label="Email Address"
  onChange={(e) => {
    setUser({ ...user, email: e.target.value }); // Assuming user state is managed elsewhere
    if (!!errors.email) {
      setErrors({ ...errors, email: '' });
    }
  }}
  value={user.email}
  name="email"
  autoComplete="email"
  InputLabelProps={{
    style: { color: 'gold' },
  }}
/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={!!errors.password}
                  helperText={errors.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={inputHandler}
                   value={user.password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{
                    style: { color: 'gold' },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
              <TextField
  error={!!errors.contact}
  helperText={errors.contact}
  required
  fullWidth
  name="contact"
  label="Contact Number"
  onChange={inputHandler}
  value={user.contactno}
  type="tel"
  id="contact"
  autoComplete="tel"
  InputLabelProps={{
    style: { color: 'gold' },
  }}
/>

              </Grid>

              <Grid container alignItems="center" justify="center">
  <Grid item xs={12}>
    <FormControl component="fieldset">
      <Typography variant="subtitle1" style={{ color: 'gold', marginTop: '10px' }}>
        Gender
      </Typography>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={user.gender}
        onChange={inputHandler}
        style={{ flexDirection: 'row' }}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  </Grid>
</Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I would like to receive updates on new jewelry arrivals via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={addData}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: 'gold',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#800000',
                  color: 'gold',
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/login' variant="body2" style={{ color: 'gold' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
  );
}

export default SignUp;
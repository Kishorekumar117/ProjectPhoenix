import { useState, useRef, Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom'

import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInSide() {

   const nav=useNavigate();

  const [errors, setErrors] = useState({ email: '', password: '' });
  const userId = useRef();
  const userPass = useRef();
//   const history = useHistory();
const defaultTheme = createTheme();
  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Validate email
    if (!data.get('email') || !emailRegex.test(data.get('email'))) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Validate password
    if (!data.get('password')) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (validateForm(data)) {
      const uid = data.get('email');
      const upass = data.get('password');

      axios.get("http://localhost:8888/userTable")
        .then((res) => {
          const users = res.data;

          const user = users.find((val) => val.email === uid && val.password === upass);

          if (user) {
            sessionStorage.setItem("useremail", uid);
            sessionStorage.setItem("username", user.username);

            window.alert("Login Successful as User");
            nav('/userdash')
           // history.push('/user'); // Redirect to user page
          } else {
            axios.get("http://localhost:8888/adminTable")
              .then((adminRes) => {
                const adminLogin = adminRes.data.filter((val) =>{ return val.email === uid && val.password === upass });

                if (adminLogin.length>0) {
                  sessionStorage.setItem("user", uid);
                  window.alert("Login successful as Admin");
                  nav('/admindash')
                 // history.push('/admin'); // Redirect to admin page
                } else {
                  window.alert("Login Failed");
                  userId.current.value = "";
                  userPass.current.value = "";
                }
              })
              .catch((err) => {
                console.error(err);
              });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // Handle invalid form submission
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2023-01/Hindu_Wedding.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/unique-luxury-floral-ornamental-background-golden-color-invitation-other-work_615614-92.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#430b0b',
            color: 'white',
            border: '1px solid #FFD700',
            borderRadius: '30px',
            padding:'20px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#800000' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: 'gold' }}>
            Log In
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                style: { color: 'gold' },
              }}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             
              InputLabelProps={{
                style: { color: 'gold' },
              }}
              error={!!errors.password}
              helperText={errors.password}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
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
              Log In
            </Button>

            <Grid container>
              <Grid item>
                {/* <Link href="#" variant="body2" style={{ color: 'gold' }}>
                  {"Don't have an account? Register Now"}
                </Link> */}

                <Link to='/register' style={{ color: 'gold' }}>
                  <font className="fontl" >Don't have an account? Register Now</font>
                  </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}

export default SignInSide;

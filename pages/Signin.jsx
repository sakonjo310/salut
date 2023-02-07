import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from "../components/layout";
import theme from "../src/theme";
import { NextLinkComposed } from "../src/link";

const themeTwo = createTheme();

export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Layout navbarType={1}>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%" },
            backgroundImage: 'url("../signin.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          sx={{
            width: { lg: "50%", xs: "100%" },
            backgroundImage: {
              xs: 'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url("../signin.jpeg")',
              lg: "none",
            },
            backgroundSize: "cover",
            backgroundPosition: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
      <ThemeProvider theme={themeTwo}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                marginTop: "150px",
                fontFamily: theme.typography.fontFamily[0],
                marginBottom: "30px",
              }}
            >
            Sign in
          </Typography>
            
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "#fff" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link 
                  component={NextLinkComposed}
                  to={{
                    pathname: "/Signup",
                  }} 
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
          
        </Box>
      </Box>
    </Layout>

 
  );
}
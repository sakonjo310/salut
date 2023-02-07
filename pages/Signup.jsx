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
            Sign up
          </Typography>
            
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link 
                  component={NextLinkComposed}
                  to={{
                    pathname: "/Signin",
                  }}  
                  variant="body2"
                >
                  Already have an account? Sign in
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
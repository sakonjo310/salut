import { signIn, getProviders } from "next-auth/react";
import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import { Stack } from "@mui/system";
import Layout from "../../components/layout";
import Image from "next/image";
import theme from "../../src/theme";

const bcrypt = require('bcrypt');

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (data.success) {
          // handle successful login
        } else {
          // handle login failure
        }
      } catch (err) {
        // handle error
      }
    },
  });

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
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              marginTop: "150px",
              fontFamily: theme.typography.fontFamily[0],
              marginBottom: "70px",
            }}
          >
            Sign in
          </Typography>
          <Box textAlign="center">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <button type="submit">Login</button>
            </form>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Signin;

// export async function getServerSideProps(context) {
//   const query = context.query;
//   const providers = await getProviders();
//   return {
//     props: {
//       providers,
//       query: query.query[0],
//     },
//   };
// }

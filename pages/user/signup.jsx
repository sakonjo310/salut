import { signIn, getProviders } from "next-auth/react";
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Stack } from "@mui/system";
import Layout from "../../components/layout";
import Image from "next/image";
import axios from "axios";
import theme from "../../src/theme";


const bcrypt = require('bcrypt');

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  
  const handleSubmit = async (values, { setSubmitting }) => {
    // Hash the password before sending to the server
    const hashedPassword = await bcrypt.hash(values.password, 10);
  
    // Send the form data (including the hashed password) to the server
    try {
        // Send the form data (including the hashed password) to the server
        // ...
        const {data} = await axios.post('/api/signup', values);
        // Redirect to the homepage or show a success message
        Router.push('/user');
    } catch (err) {
        setSubmitting(false);
        // Show an error message
        // ...
    }
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
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
            Sign up
          </Typography>
          <Box textAlign="center">
            <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <Field name="email" type="email" placeholder="Email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <Field name="password" type="password" placeholder="Password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <button type="submit" disabled={isSubmitting}>
                            Sign up
                        </button>
                    </Form>
                )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Signup;
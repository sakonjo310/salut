import { signIn, getProviders } from "next-auth/react";
import { ButtonGroup, Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Container, Stack } from "@mui/system";

const Signin = ({ providers }) => {
  const clickHandler = async (provider) => {
    await signIn(provider, { callbackUrl: "/user" });
  };

  const providerButtons = Object.values(providers).map((provider) => {
    return (
      <Button
        key={provider.id}
        onClick={() => clickHandler(provider.id)}
        variant="contained"
      >
        Sign in with {provider.name}
      </Button>
    );
  });

  //Error handling:
  const { error } = useRouter().query;

  const errors = {
    Signin: "Try signing with a different account.",
    OAuthSignin: "Try signing with a different account.",
    OAuthCallback: "Try signing with a different account.",
    OAuthCreateAccount: "Try signing with a different account.",
    EmailCreateAccount: "Try signing with a different account.",
    Callback: "Try signing with a different account.",
    OAuthAccountNotLinked:
      "To confirm your identity, sign in with the same account you used originally.",
    EmailSignin: "Check your email address.",
    CredentialsSignin:
      "Sign in failed. Check the details you provided are correct.",
    default: "Unable to sign in.",
  };

  const SignInError = ({ error }) => {
    const errorMessage = error && (errors[error] ?? errors.default);
    return <div>{errorMessage}</div>;
  };

  return (
    <Container maxWidth="xs" sx={{ my: 20 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Sign in Options:
      </Typography>
      <Box textAlign="center">
        <Stack
          orientation="vertical"
          sx={{ textAlign: "center" }}
          spacing={2}
          mb={2}
        >
          {providerButtons}
        </Stack>
        {error && <SignInError error={error} />}
      </Box>
    </Container>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  // const query = context.query;
  // console.log(query.request);
  const providers = await getProviders();
  return {
    props: {
      providers,
      // request: query.request,
    },
  };
}

import PrimaryLayout from '@/layouts/PrimaryLayout';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

const SignupPage = () => {
  return (
    <PrimaryLayout>
      <Box mt='32' textAlign='center'>
        <Heading fontWeight='black' as='h1'>
          Welcome back 👋
        </Heading>
        <Box
          onClick={() => {
            signIn('google');
          }}
          mt='10'>
          <Button colorScheme='red' leftIcon={<FaGoogle />}>
            Continue with Google
          </Button>
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default SignupPage;

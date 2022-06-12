import PrimaryLayout from '@/layouts/PrimaryLayout';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { RedirectToDashboard } from '@/lib/redirect';

const SignupPage = () => {
  return (
    <PrimaryLayout>
      <RedirectToDashboard />
      <Box mt='32' textAlign='center'>
        <Heading fontWeight='black' as='h1'>
          Get started. <br />
          <Text
            bgGradient='linear(to-r, #40c9ff, #e81cff)'
            bgClip='text'
            fontWeight='extrabold'>
            Create your first resume
          </Text>
        </Heading>
        <Box mt='10'>
          <Button
            onClick={() => {
              signIn('google');
            }}
            colorScheme='red'
            leftIcon={<FaGoogle />}>
            Sign up with Google
          </Button>
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default SignupPage;

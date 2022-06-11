import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import ProfileDropdown from './ProfileDropdown';

const Nav = () => {
  const { data, status } = useSession();

  return (
    <Flex as='nav' w='100vw' justifyContent='space-between' px='16' py='5'>
      <Box>
        <Link href='/'>
          <Text fontWeight='black' fontSize='xl' cursor='pointer'>
            Ultraresume
          </Text>
        </Link>
      </Box>
      <Flex justifyContent='space-between' alignItems='center'>
        <Text mx='3'>
          <Link href='/showcase'>
            <a>Showcase</a>
          </Link>
        </Text>
        <Text mx='3'>
          <Link href='/templates'>
            <a>Templates</a>
          </Link>
        </Text>
        {status === 'authenticated' ? (
          <ProfileDropdown />
        ) : (
          <>
            <Link passHref href='/login'>
              <Button as='a' colorScheme='cyan' variant='outline' mx='3'>
                Login
              </Button>
            </Link>
            <Link passHref href='/signup'>
              <Button as='a' colorScheme='blue' variant='solid' mx='3'>
                <a>Sign up</a>
              </Button>
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Nav;

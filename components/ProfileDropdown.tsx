import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  MenuDivider,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Avatar, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

const ProfileDropdown = () => {
  const {
    data: {
      user: { name, image, email },
    },
  } = useSession();

  return (
    <div>
      <Menu>
        <Tooltip label={name}>
          <MenuButton as='button'>
            <Avatar size='sm' name={name} src={image} />
          </MenuButton>
        </Tooltip>
        <MenuList
          p='3'
          shadow='2xl'
          bg={useColorModeValue('white', 'gray.900')}>
          <MenuItem>
            <Box>
              <Text>Signed in as {name}</Text>
              <Text opacity={0.8} fontSize='sm'>
                {email}
              </Text>
            </Box>
          </MenuItem>
          <Link passHref href='/showcase'>
            <MenuItem as='a'>Showcase</MenuItem>
          </Link>
          <MenuItem>
            <a
              href='http://github.com/lalit2005/ultraresume'
              target='_blank'
              rel='noopener noreferrer'>
              View on GitHub
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href='http://twitter.com/lalitcodes'
              target='_blank'
              rel='noopener noreferrer'>
              Made by Lalit
            </a>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Text color='red'>Logout</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileDropdown;

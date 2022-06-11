import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Heading,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import NextLink from 'next/link';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import { useRouter } from 'next/router';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: FiHome },
  { name: 'Editor', icon: FiCompass },
  { name: 'Sharing', icon: FiTrendingUp },
  { name: 'Settings', icon: FiSettings },
];

export default function DashboardLayout({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh'>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box> */}
      <Box ml={['5', '20', '72']} pr='14' pt='20' px='14'>
        {title && <Heading fontWeight='black'>{title}</Heading>}
        {description && <Text mt='5'>{description}</Text>}
        <Box mt='10'>
          <p>{children}</p>
        </Box>
      </Box>
      <DarkModeSwitch />
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <Box
      borderRight='1px'
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontWeight='black'>
          Ultraresume
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            link={`/dashboard/${id}/${link.name.toLowerCase()}`}
            icon={link.icon}>
            {/* @ts-ignore */}
            <NextLink href={`/dashboard/${id}/${link.name.toLowerCase()}`}>
              <a>{link.name}</a>
            </NextLink>
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: string;
  children: ReactText;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <NextLink href={link} passHref>
      <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align='center'
          px='4'
          py='1'
          mt='2'
          mx='4'
          borderRadius='md'
          role='group'
          cursor='pointer'
          _hover={{
            bg: useColorModeValue('gray.200', 'gray.700'),
          }}
          {...rest}>
          {icon && <Icon mr='4' fontSize='16' as={icon} />}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      // bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}>
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text fontSize='2xl' ml='8' fontWeight='black'>
        Vibe
      </Text>
    </Flex>
  );
};

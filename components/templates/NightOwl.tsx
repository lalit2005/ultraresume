import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaBrain,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaToolbox,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import {
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';
import Markdown from '../Markdown';

const NightOwl: React.FC<{
  name: string;
  location: string;
  pfp: string;
  email: string;
  about: string;
  footerText: string;
  skills: string;
  description: string;
  socialLinks: string;
  img?: boolean;
  experience1Title: string;
  experience1Description: string;
  experience2Title: string;
  experience2Description: string;
  experience3Title: string;
  experience3Description: string;
  education1Title: string;
  education1Description: string;
}> = ({
  name,
  location,
  about,
  email,
  footerText,
  description,
  pfp,
  skills,
  socialLinks,
  experience1Title,
  experience1Description,
  experience2Title,
  experience2Description,
  experience3Title,
  experience3Description,
  education1Title,
  education1Description,
  img = true,
}) => {
  return (
    <Box
      bgGradient='linear(to-tl, twitter.50, twitter.100)'
      color={useColorModeValue('', 'gray.900')}
      p='10'
      rounded='lg'
      border='1px'
      borderColor={useColorModeValue('gray.100', 'gray.600')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Flex alignItems='center'>
        {img && (
          <Image
            shadow='lg'
            src={pfp}
            height={100}
            w={100}
            alt=''
            rounded='full'
          />
        )}
        <Box ml='5'>
          <Heading as='h1' fontWeight='black'>
            {name}
          </Heading>
          <Text opacity={0.8}>{description}</Text>
          <Box mt='1'>
            <Text display='inline-block'>
              <Icon
                as={HiOutlineLocationMarker}
                h={5}
                w={5}
                mb='-1'
                mr='1'
                color='red.400'
              />
              {location} &bull;{' '}
              <Icon
                as={HiOutlineMail}
                h={5}
                w={5}
                mb='-1'
                mr='1'
                color='chocolate'
              />
              {email}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Box mt='10'>
          <Subheading>CONTACT ME</Subheading>
          <Box mt='10'>
            <SimpleGrid columns={2} gap={3} mt={3}>
              {socialLinks?.split(',').map((link) => (
                <Box key={link}>
                  <Icon mb='-1' h={5} w={5} mr='1' as={FaLink} /> {link}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Box mt='10'>
          <Subheading>
            <Icon mb='-0.5' mr='2' as={FaUser} /> ABOUT
          </Subheading>
          <Markdown text={about} />
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>
          <Icon mb='-0.5' mr='2' as={FaToolbox} /> SKILLS
        </Subheading>
        <SimpleGrid columns={2} gap={3} mt={3}>
          {skills?.split(',').map((skill, index) => (
            <Box px='5' py='3' rounded='lg' bg='blue.200' key='index' as='p'>
              <Text fontWeight='bold'>&bull; {skill.toUpperCase()}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt='10'>
        <Subheading>
          <Icon mb='-0.5' mr='2' as={FaBrain} /> EXPERIENCE
        </Subheading>
        <Box mt='5'>
          <Box mb='4'>
            <Text fontWeight='semibold'>{experience1Title}</Text>
            <Text opacity={0.8} mt='1'>
              {experience1Description}
            </Text>
          </Box>
          <Box mb='4'>
            <Text fontWeight='semibold'>{experience2Title}</Text>
            <Text opacity={0.8} mt='1'>
              {experience2Description}
            </Text>
          </Box>
          <Box mb='4'>
            <Text fontWeight='semibold'>{experience3Title}</Text>
            <Text opacity={0.8} mt='1'>
              {experience3Description}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>EDUCATION</Subheading>
        <Box mb='5'>
          <Grid templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem colSpan={4}>
              <Box>{education1Title}</Box>
            </GridItem>
            <GridItem colSpan={8}>
              <Box>
                <Text mt='2'>{education1Description}</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Divider />
      <Box mt='10'>
        <Markdown text={footerText} />
      </Box>
    </Box>
  );
};

export default NightOwl;

const Subheading: React.FC = (props) => {
  return (
    <Heading
      // todo
      as='h2'
      color='twitter.900'
      opacity={0.9}
      fontWeight='extrabold'
      fontSize='xl'
      mb='2'>
      {props.children}
    </Heading>
  );
};

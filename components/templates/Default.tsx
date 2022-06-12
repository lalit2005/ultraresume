import {
  Badge,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';
import Markdown from '../Markdown';

const Default: React.FC<{
  name: string;
  location: string;
  pfp: string;
  email: string;
  about: string;
  footerText: string;
  skills: string;
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
  pfp,
  skills,
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
      p='10'
      rounded='lg'
      border='1px'
      borderColor={useColorModeValue('gray.100', 'gray.600')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
      <Heading as='h1' mt='10' mb='2' fontWeight='black'>
        {name}
      </Heading>
      <Text opacity={0.8}>{'Web developer who loves Jamstack'}</Text>
      <Box>
        <Box mt='5'>
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
        <Box mt='10'>
          <SimpleGrid columns={2} gap='3'>
            <Box>
              <Icon mb='-1' h={5} w={5} mr='1' as={FaGithub} /> @lalitcodes
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                as={FaLinkedin}
                color='linkedin.400'
              />{' '}
              @lalit2005
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                as={FaTwitter}
                color='twitter.500'
              />{' '}
              @lalitcodes
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                color='green.500'
                as={HiOutlineGlobeAlt}
              />{' '}
              lalit.codes
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt='10'>
          <Subheading>ABOUT</Subheading>
          <Markdown text={about} />
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>SKILL SET</Subheading>
        {skills?.split(',').map((skill, index) => (
          <Badge variant='subtle' colorScheme='blue' mr='2' key={index}>
            {skill}
          </Badge>
        ))}
      </Box>
      <Box mt='10'>
        <Subheading>EXPERIENCES</Subheading>
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

export default Default;

const Subheading: React.FC = (props) => {
  return (
    <Heading
      // todo
      as='h2'
      opacity={0.9}
      fontWeight='extrabold'
      fontSize='xl'
      mb='2'>
      {props.children}
    </Heading>
  );
};

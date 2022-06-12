import PrimaryLayout from '@/layouts/PrimaryLayout';
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <PrimaryLayout>
      <Box textAlign='center' mt='32'>
        <Heading as='h1' fontWeight='black' fontSize='5xl'>
          Build your resume like a{' '}
          <Text
            bgGradient='linear(to-t, #0061ff, #60efff)'
            bgClip='text'
            fontSize='6xl'
            fontStyle='italic'
            fontWeight='extrabold'>
            PRO
          </Text>
        </Heading>
        <Text fontSize='lg'>Build your resume in seconds not in minutes</Text>
        <Button
          mt='10'
          as='a'
          size='lg'
          shadow='xl'
          _hover={{
            shadow: '2xl',
          }}
          rounded='full'
          href='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6941639638868488192?compact=1'
          target='_blank'
          rel='noopener noreferrer'>
          View demo {'->'}
        </Button>
        <Text mt='10'>
          Made by{' '}
          <Link
            color='twitter.500'
            fontWeight='bold'
            href='http://lalit.codes'
            target='_blank'
            rel='noopener noreferrer'>
            Lalit
          </Link>
        </Text>
      </Box>
    </PrimaryLayout>
  );
};

export default IndexPage;

import PrimaryLayout from '@/layouts/PrimaryLayout';
import { Box, Heading, Text } from '@chakra-ui/react';

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
      </Box>
    </PrimaryLayout>
  );
};

export default IndexPage;

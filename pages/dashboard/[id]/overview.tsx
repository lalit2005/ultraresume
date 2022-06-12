import DashboardLayout from '@/layouts/DashboardLayout';
import {
  Box,
  Button,
  Text,
  ButtonGroup,
  Heading,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { Resume, SocialLinks } from '@prisma/client';
import { formatRelative } from 'date-fns';
import { useRouter } from 'next/router';
import { FaDownload, FaEye } from 'react-icons/fa';
import useSWR from 'swr';

const ResumePage = () => {
  const router = useRouter();

  const { data: resume } = useSWR<Resume>(
    `/api/get/resume/?id=${router.query.id}`
  );
  return (
    <DashboardLayout
      title={resume?.name || 'Loading...'}
      description={`View, edit and manage ${resume?.name || '...'}`}>
      <Box>
        <Box my='5'>
          <ButtonGroup variant='solid' spacing='6'>
            {/* todo */}
            <Button colorScheme='blue' leftIcon={<FaDownload />}>
              Download resume
            </Button>
            <Button leftIcon={<FaEye />}>View resume online</Button>
          </ButtonGroup>
        </Box>
        <Heading fontWeight='bold' fontSize='2xl' my='5' mt='10'>
          Overview
        </Heading>
        <List spacing={3} mt='5'>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Last updated:{' '}
            <Text fontWeight='bold' display='inline'>
              {resume &&
                formatRelative(new Date(resume?.updatedAt), new Date())}
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Name of person in resume:{' '}
            <Text fontWeight='bold' display='inline'>
              {resume?.name}
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Description in resume:{' '}
            <Text fontWeight='bold' display='inline'>
              {resume?.description}
            </Text>
          </ListItem>
        </List>
      </Box>
    </DashboardLayout>
  );
};

export default ResumePage;

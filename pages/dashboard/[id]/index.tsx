import DashboardLayout from '@/layouts/DashboardLayout';
import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react';
import { Resume } from '@prisma/client';
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
        <Heading fontWeight='bold' fontSize='2xl' my='5'>
          Overview
        </Heading>
        Last updated:{' '}
        {resume && formatRelative(new Date(resume.updatedAt), new Date())}
      </Box>
    </DashboardLayout>
  );
};

export default ResumePage;

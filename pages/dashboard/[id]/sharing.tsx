import DashboardLayout from '@/layouts/DashboardLayout';
import {
  Box,
  Icon,
  SimpleGrid,
  Text,
  toast,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { Resume } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaLink, FaQrcode, FaRegFilePdf } from 'react-icons/fa';
import useSWR from 'swr';

const Sharing = () => {
  const router = useRouter();

  const { data, mutate } = useSWR<Resume>(
    `/api/get/resume/?id=${router.query.id}`
  );

  const toast = useToast();

  return (
    <DashboardLayout
      title='Sharing'
      description='Share your resume and let the world know about it'>
      <SimpleGrid columns={3} gap={5}>
        <Link passHref href={`/qr/${data?.publicId}`}>
          <Box
            as='a'
            bg={useColorModeValue('', 'gray.900')}
            textAlign='center'
            py='5'
            rounded='lg'
            shadow='lg'
            _hover={{ shadow: '2xl' }}>
            <Box>
              <Icon as={FaQrcode} w='10' h='10' />
            </Box>
            <Text fontWeight='bold' fontSize='xl'>
              Share with QR code
            </Text>
          </Box>
        </Link>
        <Box
          cursor='pointer'
          onClick={async () => {
            await window.navigator.clipboard.writeText(
              `https://ultraresume.vercel.app/${data?.publicId}`
            );
            toast({
              title: 'Successfully copied URL to clipboard',
              description: 'You can share this code with anyone now ✌️',
            });
          }}
          textAlign='center'
          bg={useColorModeValue('', 'gray.900')}
          py='5'
          rounded='lg'
          shadow='lg'
          _hover={{ shadow: '2xl' }}>
          <Box>
            <Icon as={FaLink} w='10' h='10' />
          </Box>
          <Text fontWeight='bold' fontSize='xl'>
            Share with link
          </Text>
        </Box>
        <Link passHref href={`/p/${data?.publicId}`}>
          <Box
            as='a'
            bg={useColorModeValue('', 'gray.900')}
            textAlign='center'
            py='5'
            rounded='lg'
            shadow='lg'
            _hover={{ shadow: '2xl' }}>
            <Box>
              <Icon as={FaRegFilePdf} w='10' h='10' />
            </Box>
            <Text fontWeight='bold' fontSize='xl'>
              Download PDF and share
            </Text>
          </Box>
        </Link>
      </SimpleGrid>
    </DashboardLayout>
  );
};

export default Sharing;

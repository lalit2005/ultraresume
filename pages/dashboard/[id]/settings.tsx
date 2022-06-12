import DashboardLayout from '@/layouts/DashboardLayout';
import {
  Heading,
  Text,
  Box,
  Button,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { Resume } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

const Settings = () => {
  const router = useRouter();

  const { data, mutate } = useSWR<Resume>(
    `/api/get/resume/?id=${router.query.id}`
  );

  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DashboardLayout
      title='Settings'
      description={`Settings for ${data?.name} resume`}>
      <Box mb='5'>
        <Heading fontSize='lg' fontWeight='bold'>
          Display {data?.name} in{' '}
          <Link passHref href={`/showcase`}>
            <Text as='a' color='twitter.500'>
              Showcase
            </Text>
          </Link>
        </Heading>
        <Checkbox mt='5'>
          Yes, I would like to have my resume in showcase
        </Checkbox>
      </Box>
      <Divider />
      <Box mt='5'>
        <Heading fontSize='lg' fontWeight='bold' color='red.500'>
          Danger Zone
        </Heading>
        <Box mt='5'>
          <Button onClick={onOpen} colorScheme='red'>
            Delete {data?.name}
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Are you sure you want to delete it? <br /> This is irreversible
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Button
                isLoading={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  axios
                    .post(`/api/delete/resume`, { id: data?.id })
                    .then(() => {
                      router.push('/dashboard');
                    });
                }}
                colorScheme='red'
                size='md'
                mb='5'>
                Delete it anyways
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </DashboardLayout>
  );
};

export default Settings;

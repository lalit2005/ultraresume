import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import Nav from '@/components/Nav';
import ProtectedRoute from '@/lib/ProtectedRoute';
import newResumeSchema from '@/lib/new-resume-schema';
import {
  Box,
  Button,
  Heading,
  Input,
  Table,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  toast,
  useToast,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Resume } from '@prisma/client';
import Link from 'next/link';
import { FaPlusSquare } from 'react-icons/fa';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import { NewResumeSchema } from '@/types';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { formatRelative } from 'date-fns';
import { usePrefetch } from 'use-link-prefetch';
import { useRouter } from 'next/router';
import Empty from '@/components/Empty';

const Dashboard = () => {
  const { data, mutate } = useSWR<Resume[]>('/api/get/all-resumes');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const allLinks = data && data.map((r) => `/dashboard/${r.id}`);
  // const router = data && usePrefetch(allLinks);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<NewResumeSchema>({
    resolver: zodResolver(newResumeSchema),
  });

  const toast = useToast();

  return (
    <ProtectedRoute>
      <DevTool control={control} />
      <Box>
        <Nav />
        <DarkModeSwitch />
        <Box maxW='5xl' mx='auto' w='full' mt='10'>
          <Heading as='h1' size='2xl' fontWeight='black'>
            Dashboard
          </Heading>
          <Text mt='2'>
            You can view, edit and manage all your resumes here
          </Text>
          <Box mt='10'>
            <Box my='5' mb='10'>
              <Button
                onClick={onOpen}
                variant='solid'
                colorScheme='blue'
                leftIcon={<FaPlusSquare />}>
                Create new resume
              </Button>
            </Box>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Resume</Th>
                    <Th>Description</Th>
                    <Th>Updated at</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data && data.length == 0 && (
                    <>
                      <Box mt='10'>
                        <Empty minimizeFactor={5} />
                      </Box>
                      <Box>
                        You haven&apos;t created any resumes yet! Create one
                        from above button
                      </Box>
                    </>
                  )}
                  {data &&
                    data.length > 0 &&
                    data?.map((resume) => {
                      router.prefetch(`/dashboard/${resume.id}/overview`);
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <Tr
                          cursor='pointer'
                          onClick={() => {
                            router.push(`/dashboard/${resume.id}/overview`);
                          }}
                          _hover={{
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bgColor: useColorModeValue('gray.100', 'gray.700'),
                          }}>
                          <Td>{resume.name}</Td>
                          <Td>{resume.description}</Td>
                          <Td>
                            {formatRelative(
                              new Date(resume.updatedAt),
                              new Date()
                            ).replace(/^./, (str) => str.toUpperCase())}
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={handleSubmit((newData) => {
                const req = axios
                  .post('/api/create/resume', newData)
                  .then(({ data: newData }: { data: Resume }) => {
                    router.push(`/dashboard/${newData?.id}/overview`);
                    toast({
                      title: 'Your resume is created now 🎉',
                      description:
                        'You can just edit the pre generated resume according to your needs. You can choose a diff theme too!',
                      status: 'success',
                    });
                    mutate([newData, ...data]);
                  });
              })}>
              <FormControl>
                <FormLabel htmlFor='name'>Name of the resume</FormLabel>
                <Input id='name' type='text' {...register('name')} />

                <FormLabel mt='4' htmlFor='desc'>
                  Description
                </FormLabel>
                <Input id='desc' type='text' {...register('description')} />
                <ModalFooter my='5'>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    isLoading={isSubmitting}
                    type='submit'
                    variant='ghost'>
                    Create {'->'}
                  </Button>
                </ModalFooter>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ProtectedRoute>
  );
};

export default Dashboard;

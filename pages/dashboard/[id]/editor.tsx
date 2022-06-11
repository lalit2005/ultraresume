import Default from '@/components/templates/Default';
import DashboardLayout from '@/layouts/DashboardLayout';
import {
  Box,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Input,
  VStack,
  StackDivider,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { Resume } from '@prisma/client';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

const EditorPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<Resume>(
    `/api/get/resume/?id=${router.query.id}`
  );

  return (
    <DashboardLayout>
      <Box mt='-16'>
        <Grid
          // templateRows='repeat(2, 1fr)'
          templateColumns='repeat(12, 1fr)'
          gap={4}>
          <GridItem colSpan={8}>
            <Box h='85vh' overflowY='scroll' w='full'>
              {data && (
                <Default
                  name={data?.name}
                  email={data?.email}
                  about={data?.description}
                  location={data?.location}
                  footerText={data?.footer_text}
                  pfp={data?.profile_pic}
                />
              )}
            </Box>
          </GridItem>
          <GridItem
            overflowY='scroll'
            colSpan={4}
            bg={useColorModeValue('gray.100', 'gray.900')}
            shadow='lg'
            borderRadius='md'
            // maxH='80%'
            // h='full'
            p='4'
            h='85vh'>
            <Text fontWeight='semibold'>Edit to see live updates</Text>
            <Text mb='5' fontSize='sm' opacity={0.8}>
              Markdown is supported in all textareas!
            </Text>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Introduction
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <form>
                    <FormControl>
                      <VStack divider={<StackDivider />}>
                        <Box>
                          <FormLabel htmlFor='name'>Name</FormLabel>
                          <Input id='name' type='text' />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='email'>E-mail</FormLabel>
                          <Input id='email' type='email' />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='loc'>Location</FormLabel>
                          <Input id='loc' type='text' />
                        </Box>
                      </VStack>
                    </FormControl>
                  </form>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      About
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Textarea
                    rows={10}
                    placeholder='Write a para about yourself'
                  />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Social links
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <form>
                    <FormControl>
                      <VStack divider={<StackDivider />} spacing='3'>
                        <Box>
                          <FormLabel htmlFor='gh'>GitHub username</FormLabel>
                          <Input id='gh' type='text' placeholder='@lalit2005' />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='gh'>LinkedIn username</FormLabel>
                          <Input id='gh' type='text' placeholder='@lalit' />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='gh'>Twitter username</FormLabel>
                          <Input
                            id='gh'
                            type='text'
                            placeholder='@lalitcodes'
                          />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='gh'>Personal website</FormLabel>
                          <Input
                            id='gh'
                            type='text'
                            placeholder='https://lalit.codes'
                          />
                        </Box>
                      </VStack>
                    </FormControl>
                  </form>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Skill set
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Textarea
                    rows={5}
                    placeholder='Comma separated list of all your skills. Eg. nextjs, tailwindcss, prisma, vercel, mysql'
                  />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Experience
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack spacing='5'>
                    <Box>
                      <Input placeholder='Title' mb='1' />
                      <Textarea placeholder='Description' />
                    </Box>
                    <Box>
                      <Input placeholder='Title' mb='1' />
                      <Textarea placeholder='Description' />
                    </Box>
                    <Box>
                      <Button
                        variant='solid'
                        leftIcon={<HiPlus />}
                        color='blackAlpha'>
                        Add new experience
                      </Button>
                    </Box>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Education
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack spacing='5'>
                    <Box>
                      <Input placeholder='Period. Eg. 2020-2022' mb='1' />
                      <Input placeholder='Title' mb='1' />
                      <Textarea placeholder='Description' />
                    </Box>
                    <Box>
                      <Input placeholder='Period. Eg. 2020-2022' mb='1' />
                      <Input placeholder='Title' mb='1' />
                      <Textarea placeholder='Description' />
                    </Box>
                    <Box>
                      <Button
                        variant='solid'
                        leftIcon={<HiPlus />}
                        color='blackAlpha'>
                        Add new
                      </Button>
                    </Box>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Footer
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Textarea
                    rows={5}
                    placeholder='Footer text. Appears at the end of resume'
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default EditorPage;

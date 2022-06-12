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
  useToast,
} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { Education, Experience, Resume } from '@prisma/client';
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
import { FaPlus, FaSave } from 'react-icons/fa';
import { HiChevronDown, HiPlus, HiSave } from 'react-icons/hi';
import { useState } from 'react';
import Empty from '@/components/Empty';
import { nanoid } from 'nanoid';
import axios from 'axios';
import NightOwl from '@/components/templates/NightOwl';

const EditorPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<Resume>(
    `/api/get/resume/?id=${router.query.id}`
  );

  const { data: exp } = useSWR<Experience[]>(
    `/api/get/experience/?resumeId=${router.query.id}`
  );

  const { data: edu } = useSWR<Education[]>(
    `/api/get/education/?resumeId=${router.query.id}`
  );

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [pic, setPic] = useState(data?.profile_pic);
  const [loc, setLoc] = useState(data?.location);
  const [about, setAbout] = useState(data?.about);
  const [experiences, setExperiences] = useState(exp || []);
  // const [socialLinks, setSocialLinks] = useState(data?.)
  const [skillSet, setSkillSet] = useState(data?.skillSet);
  const [educations, setEducations] = useState(edu);
  const [footer, setFooter] = useState(data?.footer_text);
  const [template, setTemplate] = useState<'default' | 'night-owl'>(
    // @ts-ignore
    data?.template
  );
  const [isLoading, setIsLoading] = useState(false);

  const allThemes: typeof template[] = ['default', 'night-owl'];

  const toast = useToast();

  return (
    <DashboardLayout>
      <Box mt='-16'>
        <Grid
          // templateRows='repeat(2, 1fr)'
          templateColumns='repeat(12, 1fr)'
          gap={4}>
          <GridItem colSpan={8}>
            <Box h='85vh' overflowY='scroll' w='full'>
              {(data && template === 'night-owl' && (
                <NightOwl
                  name={name}
                  email={email}
                  about={about}
                  location={loc}
                  footerText={footer}
                  pfp={pic}
                  skills={skillSet}
                  experiences={experiences}
                  education={educations}
                />
              )) ||
                (template === 'default' && (
                  <Default
                    name={name}
                    email={email}
                    about={about}
                    location={loc}
                    footerText={footer}
                    pfp={pic}
                    skills={skillSet}
                    experiences={experiences}
                    education={educations}
                  />
                ))}
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
            <Text mb='3' fontSize='sm' opacity={0.8}>
              Markdown is supported in all textareas!
            </Text>
            <Button
              onClick={() => {
                setIsLoading(true);
                axios
                  .post(`/api/update/resume`, {
                    id: data?.id,
                    name,
                    about,
                    email,
                    template,
                    footer_text: footer,
                    loc,
                    profile_pic: pic,
                    skillSet,
                  })
                  .then(({ data }: { data: Resume }) => {
                    mutate(data);
                    setIsLoading(false);
                  });
              }}
              mb='10'
              isLoading={isLoading}
              colorScheme='blue'
              leftIcon={<FaSave />}
              size='sm'>
              Save
            </Button>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Resume Theme
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Menu>
                    <MenuButton>
                      <Button
                        colorScheme='twitter'
                        size='sm'
                        rightIcon={<HiChevronDown />}>
                        {template}
                      </Button>
                    </MenuButton>
                    <MenuList p={3}>
                      {allThemes.map((t) => (
                        <MenuItem onClick={() => setTemplate(t)} key={t}>
                          {t}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </AccordionPanel>
              </AccordionItem>

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
                          <Input
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                            id='name'
                            type='text'
                          />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='email'>E-mail</FormLabel>
                          <Input
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id='email'
                            type='email'
                          />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='loc'>Picture</FormLabel>
                          <Input
                            id='loc'
                            defaultValue={pic}
                            onChange={(e) => setPic(e.target.value)}
                            type='text'
                            placeholder='Image url for your profile pic'
                          />
                        </Box>
                        <Box>
                          <FormLabel htmlFor='loc'>Location</FormLabel>
                          <Input
                            id='loc'
                            defaultValue={loc}
                            onChange={(e) => setLoc(e.target.value)}
                            type='text'
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
                      About
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Textarea
                    rows={10}
                    onChange={(e) => setAbout(e.target.value)}
                    defaultValue={about}
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
                    defaultValue={skillSet}
                    onChange={(e) => setSkillSet(e.target.value)}
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
                    {experiences && experiences?.length === 0 && (
                      <>
                        <Box my={3} textAlign='center'>
                          <Empty minimizeFactor={6} />
                        </Box>
                        <Text fontSize='sm' textAlign='center'>
                          You haven&apos;t added any experiences yet!
                        </Text>
                      </>
                    )}
                    {experiences &&
                      experiences.length > 0 &&
                      experiences.map((e) => (
                        <Box key={e.id}>
                          <Input
                            onChange={(ev) => {
                              const others = experiences.filter(
                                (exp) => exp.id !== e.id
                              );
                              // @ts-ignore
                              setExperiences([
                                ...others,
                                { ...e, title: ev.target.value },
                              ]);
                            }}
                            placeholder='Title'
                            mb='1'
                          />
                          <Textarea
                            onChange={(ev) => {
                              const others = experiences.filter(
                                (exp) => exp.id !== e.id
                              );
                              // @ts-ignore
                              setExperiences([
                                ...others,
                                { ...e, description: ev.target.value },
                              ]);
                            }}
                            placeholder='Description'
                          />
                        </Box>
                      ))}
                    <Box>
                      <Button
                        variant='solid'
                        leftIcon={<HiPlus />}
                        color='blackAlpha'
                        onClick={() => {
                          setExperiences([
                            ...experiences,
                            { title: '', description: '', id: nanoid() },
                          ]);
                        }}>
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
                    {educations?.length === 0 && (
                      <>
                        <Box my={3} textAlign='center'>
                          <Empty minimizeFactor={6} />
                        </Box>
                        <Text fontSize='sm' textAlign='center'>
                          You haven&apos;t added anything related related to
                          education yet!
                        </Text>
                      </>
                    )}
                    {educations &&
                      educations.length > 0 &&
                      educations.map((e) => (
                        <Box key={e.id}>
                          <Input
                            onChange={(ev) => {
                              const others = educations.filter(
                                (exp) => exp.id !== e.id
                              );
                              // @ts-ignore
                              setEducations([
                                ...others,
                                { ...e, title: ev.target.value },
                              ]);
                            }}
                            placeholder='Title'
                            mb='1'
                          />
                          <Input
                            onChange={(ev) => {
                              const others = educations.filter(
                                (exp) => exp.id !== e.id
                              );
                              // @ts-ignore
                              setEducations([
                                ...others,
                                { ...e, period: ev.target.value },
                              ]);
                            }}
                            placeholder='Period. Eg. 2020-2022'
                            mb='1'
                          />
                          <Textarea
                            onChange={(ev) => {
                              const others = educations.filter(
                                (exp) => exp.id !== e.id
                              );
                              // @ts-ignore
                              setEducations([
                                ...others,
                                { ...e, description: ev.target.value },
                              ]);

                              // axios.post(`/api/create/experiences`, {
                              // 	id: data.id,

                              // })
                            }}
                            placeholder='Description'
                          />
                        </Box>
                      ))}
                    <Box>
                      <Button
                        variant='solid'
                        leftIcon={<HiPlus />}
                        onClick={() => {
                          setEducations([
                            ...educations,
                            {
                              title: '',
                              period: '2018-2022',
                              description: '',
                              id: nanoid(),
                            },
                          ]);
                        }}
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
                    defaultValue={footer}
                    onChange={(e) => setFooter(e.target.value)}
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

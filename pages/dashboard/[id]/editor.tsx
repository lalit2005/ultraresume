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
import { Resume, SocialLinks } from '@prisma/client';
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

  const { data, mutate } = useSWR<
    Resume & {
      socialLinks: SocialLinks[];
    }
  >(`/api/get/resume/?id=${router.query.id}`);

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [pic, setPic] = useState(data?.profile_pic);
  const [loc, setLoc] = useState(data?.location);
  const [about, setAbout] = useState(data?.about);
  // const [socialLinks, setSocialLinks] = useState(data?.)
  const [skillSet, setSkillSet] = useState(data?.skillSet);

  const [experience1Title, setExperience1Title] = useState(
    data?.experience1Title
  );
  const [experience1Description, setExperience1Description] = useState(
    data?.experience1Description
  );
  const [experience2Title, setExperience2Title] = useState(
    data?.experience2Title
  );
  const [experience2Description, setExperience2Description] = useState(
    data?.experience2Description
  );
  const [experience3Title, setExperience3Title] = useState(
    data?.experience3Title
  );
  const [experience3Description, setExperience3Description] = useState(
    data?.experience3Description
  );

  const [education1Title, setEducation1Title] = useState(data?.education1Title);
  const [education1Description, setEducation1Description] = useState(
    data?.education1Description
  );

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
              {data &&
                (template === 'night-owl' ? (
                  <NightOwl
                    name={name}
                    email={email}
                    about={about}
                    location={loc}
                    footerText={footer}
                    pfp={pic}
                    skills={skillSet}
                    experience1Title={experience1Title}
                    experience2Title={experience2Title}
                    experience3Title={experience3Title}
                    experience1Description={experience1Description}
                    experience2Description={experience2Description}
                    experience3Description={experience3Description}
                    education1Title={education1Title}
                    education1Description={education1Description}
                  />
                ) : (
                  <Default
                    name={name}
                    email={email}
                    about={about}
                    location={loc}
                    footerText={footer}
                    pfp={pic}
                    skills={skillSet}
                    experience1Title={experience1Title}
                    experience2Title={experience2Title}
                    experience3Title={experience3Title}
                    experience1Description={experience1Description}
                    experience2Description={experience2Description}
                    experience3Description={experience3Description}
                    education1Title={education1Title}
                    education1Description={education1Description}
                  />
                ))}
            </Box>
          </GridItem>
          <GridItem
            overflowY='scroll'
            colSpan={4}
            // eslint-disable-next-line react-hooks/rules-of-hooks
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
                  .then(({ data: newData }: { data: Resume }) => {
                    mutate({ ...data, ...newData });
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
                    <Box>
                      <Input
                        onChange={(ev) => setExperience1Title(ev.target.value)}
                        defaultValue={experience1Title}
                        placeholder='Title'
                        mb='1'
                      />
                      <Textarea
                        onChange={(ev) =>
                          setExperience1Description(ev.target.value)
                        }
                        defaultValue={experience1Description}
                        placeholder='Description'
                      />
                    </Box>
                    <Box>
                      <Input
                        onChange={(ev) => setExperience2Title(ev.target.value)}
                        defaultValue={experience2Title}
                        placeholder='Title'
                        mb='1'
                      />
                      <Textarea
                        onChange={(ev) =>
                          setExperience2Description(ev.target.value)
                        }
                        defaultValue={experience2Description}
                        placeholder='Description'
                      />
                    </Box>
                    <Box>
                      <Input
                        onChange={(ev) => setExperience3Title(ev.target.value)}
                        defaultValue={experience3Title}
                        placeholder='Title'
                        mb='1'
                      />
                      <Textarea
                        onChange={(ev) =>
                          setExperience3Description(ev.target.value)
                        }
                        defaultValue={experience3Description}
                        placeholder='Description'
                      />
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
                  <Box>
                    <Input
                      placeholder='Title'
                      mb='1'
                      onChange={(e) => setEducation1Title(e.target.value)}
                      defaultValue={education1Title}
                    />
                    <Textarea
                      placeholder='Description'
                      onChange={(e) => setEducation1Description(e.target.value)}
                      defaultValue={education1Description}
                    />
                  </Box>
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

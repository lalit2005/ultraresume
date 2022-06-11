import {
  Badge,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';

const Default: React.FC<{
  name: string;
  location: string;
  pfp: string;
  email: string;
  about: string;
  footerText: string;
}> = ({ name, location, about, email, footerText, pfp }) => {
  const { data } = useSession();
  const user = data?.user;

  const skills = ['nextjs', 'tailwindcss', 'prisma', 'vercel'];
  const experiences = [
    {
      title: 'Hello world',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure vel, laudantium doloribus molestias eaque aspernatur delectus impedit nobis debitis quod! Natus officiis, quidem ut, rem, magnam autem rerum accusantium nulla nisi omnis suscipit. Facilis aperiam pariatur soluta minus numquam, cumque, nulla veniam ab repellat, iure distinctio cupiditate alias? Esse!',
    },
    {
      title: 'Hello world',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure vel, laudantium doloribus molestias eaque aspernatur delectus impedit nobis debitis quod! Natus officiis, quidem ut, rem, magnam autem rerum accusantium nulla nisi omnis suscipit. Facilis aperiam pariatur soluta minus numquam, cumque, nulla veniam ab repellat, iure distinctio cupiditate alias? Esse!',
    },
    {
      title: 'Hello world',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure vel, laudantium doloribus molestias eaque aspernatur delectus impedit nobis debitis quod! Natus officiis, quidem ut, rem, magnam autem rerum accusantium nulla nisi omnis suscipit. Facilis aperiam pariatur soluta minus numquam, cumque, nulla veniam ab repellat, iure distinctio cupiditate alias? Esse!',
    },
    {
      title: 'Hello world',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure vel, laudantium doloribus molestias eaque aspernatur delectus impedit nobis debitis quod! Natus officiis, quidem ut, rem, magnam autem rerum accusantium nulla nisi omnis suscipit. Facilis aperiam pariatur soluta minus numquam, cumque, nulla veniam ab repellat, iure distinctio cupiditate alias? Esse!',
    },
  ];

  const edu = [
    {
      period: '2006-2015',
      title: 'Schooling @ iNeuron',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure vel, laudantium doloribus molestias eaque aspernatur delectus impedit nobis debitis quod! Natus officiis, quidem ut, rem, magnam autem rerum accusantium nulla nisi omnis suscipit. Facilis aperiam pariatur soluta minus numquam, cumque, nulla veniam ab repellat, iure distinctio cupiditate alias? Esse!',
    },
    {
      period: '2006-2015',
      title: 'College @ IITM',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus iure vel, laudantium doloribus molestias eaque aspernatur delectus impedit nobis debitis quod! Natus officiis, quidem ut, rem, magnam autem rerum accusantium nulla nisi omnis suscipit. Facilis aperiam pariatur soluta minus numquam, cumque, nulla veniam ab repellat, iure distinctio cupiditate alias? Esse!',
    },
  ];

  return (
    <Box p='10' rounded='lg'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={user?.image} alt='' rounded='full' />
      <Heading as='h1' mt='10' mb='2' fontWeight='black'>
        {'Lalit'}
      </Heading>
      <Text opacity={0.8}>{'Web developer who loves Jamstack'}</Text>
      <Box>
        <Box mt='5'>
          <Text display='inline-block'>
            <Icon
              as={HiOutlineLocationMarker}
              h={5}
              w={5}
              mb='-1'
              mr='1'
              color='red.400'
            />
            {location} &bull;{' '}
            <Icon
              as={HiOutlineMail}
              h={5}
              w={5}
              mb='-1'
              mr='1'
              color='chocolate'
            />
            {email}
          </Text>
        </Box>
        <Box mt='10'>
          <SimpleGrid columns={2} gap='3'>
            <Box>
              <Icon mb='-1' h={5} w={5} mr='1' as={FaGithub} /> @lalitcodes
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                as={FaLinkedin}
                color='linkedin.400'
              />{' '}
              @lalit2005
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                as={FaTwitter}
                color='twitter.500'
              />{' '}
              @lalitcodes
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                color='green.500'
                as={HiOutlineGlobeAlt}
              />{' '}
              lalit.codes
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt='10'>
          <Subheading>ABOUT</Subheading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            eveniet perspiciatis unde aperiam similique placeat distinctio
            dolores enim non laboriosam quis maiores illum reiciendis, repellat
            soluta dolore aliquam odit obcaecati recusandae quod! Quae explicabo
            illum voluptatem aperiam nulla, omnis ducimus iste placeat?
            Accusamus labore debitis optio. Nisi recusandae eaque ea tempora, ab
            suscipit quasi asperiores quaerat laborum! Omnis totam cupiditate
            praesentium officia illo eos impedit labore voluptatem. Itaque
            maiores magnam corporis asperiores rerum quisquam facilis optio
            reiciendis soluta velit. Necessitatibus illum ex dolore itaque autem
            voluptatum, et voluptatem ipsa earum atque, rem repudiandae. Modi
            minus magnam ad perferendis totam fugiat?
          </Text>
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>SKILL SET</Subheading>
        {skills.map((skill, index) => (
          <Badge variant='subtle' colorScheme='blue' mr='2' key={index}>
            {skill}
          </Badge>
        ))}
      </Box>
      <Box mt='10'>
        <Subheading>EXPERIENCES</Subheading>
        <Box mt='5'>
          {experiences.map((exp, index) => (
            <Box key={index} mb='4'>
              <Text fontWeight='semibold'>{exp.title}</Text>
              <Text opacity={0.8} mt='1'>
                {exp.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>EDUCATION</Subheading>
        <Box mt='5'>
          {edu.map((e, index) => (
            <Box key={index} mb='5'>
              <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem colSpan={4}>
                  <Box>{e.period}</Box>
                </GridItem>
                <GridItem colSpan={8}>
                  <Box>
                    <Text fontWeight='semibold'>{e.title}</Text>
                    <Text mt='2'>{e.description}</Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box mt='10'>
        <Text>{footerText}</Text>
      </Box>
    </Box>
  );
};

export default Default;

const Subheading: React.FC = (props) => {
  return (
    <Heading
      // todo
      bgGradient='linear(to-tr, #439cfb, #f187fb)'
      bgClip='text'
      fontWeight='extrabold'
      fontSize='xl'
      mb='2'>
      {props.children}
    </Heading>
  );
};

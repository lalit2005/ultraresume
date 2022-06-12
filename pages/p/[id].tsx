import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { prisma } from '@/utils/prisma';
import Default from '@/components/templates/Default';
import { Box, Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
import { FaFilePdf, FaQrcode } from 'react-icons/fa';
import Script from 'next/script';
import { useState } from 'react';
import Link from 'next/link';

const Page: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const [img, setImg] = useState(true);

  const { colorMode, toggleColorMode } = useColorMode();

  if (colorMode === 'dark') {
    toggleColorMode();
  }

  return (
    <div>
      <Script
        src='https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js'
        strategy='lazyOnload'
      />
      <Box maxW='4xl' mx='auto' mt='16'>
        <ButtonGroup>
          <Button
            shadow='md'
            colorScheme='messenger'
            my='10'
            size='sm'
            leftIcon={<FaFilePdf />}
            onClick={() => {
              setImg(false);
              window
                // @ts-ignore
                ?.html2pdf(document?.querySelector('.resume'), {
                  margin: [20, 10],
                  filename: `${props.name}-Resume.pdf`,
                  useCORS: true,
                });
            }}>
            Download as PDF
          </Button>
          <Link passHref href={`/qr/${props.publicId}`}>
            <Button
              as='a'
              cursor='pointer'
              shadow='md'
              colorScheme='twitter'
              my='10'
              size='sm'
              leftIcon={<FaQrcode />}>
              View QR Code
            </Button>
          </Link>
        </ButtonGroup>
        <Box userSelect='none' className='resume'>
          <Default
            name={props.name}
            img={img}
            about={props.about}
            education={props.Education}
            experiences={props.Experience}
            footerText={props.footer_text}
            email={props.email}
            pfp={props.profile_pic}
            location={props.location}
            skills={props.skillSet}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resume = await prisma.resume.findUnique({
    where: {
      publicId: params.id as string,
    },
    include: {
      Education: true,
      Experience: true,
    },
  });

  console.log({ ...resume });

  return {
    props: {
      ...resume,
      createdAt: resume.createdAt.toString(),
      updatedAt: resume.updatedAt.toString(),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

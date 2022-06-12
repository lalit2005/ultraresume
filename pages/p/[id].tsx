import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { prisma } from '@/utils/prisma';
import Default from '@/components/templates/Default';
import { Box, Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
import { FaFilePdf, FaQrcode } from 'react-icons/fa';
import Script from 'next/script';
import { useState } from 'react';
import Link from 'next/link';
import NightOwl from '@/components/templates/NightOwl';

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
          {props.template === 'night-owl' ? (
            <NightOwl
              name={props.name}
              email={props.email}
              about={props.about}
              location={props.loc}
              description={props.description}
              footerText={props.footer}
              pfp={props.pic}
              skills={props.skillSet}
              experience1Title={props.experience1Title}
              experience2Title={props.experience2Title}
              experience3Title={props.experience3Title}
              experience1Description={props.experience1Description}
              experience2Description={props.experience2Description}
              experience3Description={props.experience3Description}
              education1Title={props.education1Title}
              education1Description={props.education1Description}
            />
          ) : (
            <Default
              name={props.name}
              email={props.email}
              about={props.about}
              location={props.loc}
              description={props.description}
              footerText={props.footer}
              pfp={props.pic}
              skills={props.skillSet}
              experience1Title={props.experience1Title}
              experience2Title={props.experience2Title}
              experience3Title={props.experience3Title}
              experience1Description={props.experience1Description}
              experience2Description={props.experience2Description}
              experience3Description={props.experience3Description}
              education1Title={props.education1Title}
              education1Description={props.education1Description}
            />
          )}
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

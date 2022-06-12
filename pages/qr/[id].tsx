import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { prisma } from '@/utils/prisma';
import Default from '@/components/templates/Default';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { FaFilePdf, FaQrcode } from 'react-icons/fa';
import Script from 'next/script';
import { useState } from 'react';
import QrCode from '@/components/QRCode';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Page: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const [img, setImg] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  if (colorMode === 'dark') {
    toggleColorMode();
  }

  const router = useRouter();

  return (
    <div>
      <Script
        src='https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js'
        strategy='lazyOnload'
      />

      <Box maxW='80' mx='auto' text-center>
        <Heading fontSize='4xl' mt='20' fontWeight='black'>
          {props.name}
        </Heading>
        <QrCode
          image={props.profile_pic}
          link={`https://ultraresume.vercel.app/p/${router.query.id}`}
        />
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

import QRCodeStyling from '@solana/qr-code-styling';
import { useEffect, useRef, useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
} from '@chakra-ui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const QRCode: React.FC<{ image: string; link: string }> = ({ image, link }) => {
  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image,
    dotsOptions: {
      color: 'black',
      type: 'rounded',
    },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 20,
    },
  });

  const [url, setUrl] = useState(link);
  const [fileExt, setFileExt] = useState('png');
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      // @ts-ignore
      extension: fileExt,
    });
  };

  return (
    <Box>
      {/* <div>
        <select onChange={onExtensionChange} value={fileExt}>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='webp'>WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div> */}
      <Box ref={ref} mb='5' mt='24' />
      <Menu>
        <MenuButton>
          <Button
            // @ts-ignore
            rightIcon={<HiOutlineChevronDown />}
            size='sm'
            bgColor='twitter.500'
            color='white'>
            {fileExt}
          </Button>
        </MenuButton>
        <MenuList p='3'>
          <MenuItem onClick={() => setFileExt('png')}>PNG</MenuItem>
          <MenuItem onClick={() => setFileExt('jpeg')}>JPEG</MenuItem>
          <MenuItem onClick={() => setFileExt('webp')}>WEBP</MenuItem>
        </MenuList>
      </Menu>
      <Button
        onClick={() => {
          qrCode.download({
            // @ts-ignore
            extension: fileExt,
          });
        }}
        _hover={{
          bgColor: 'white',
          color: 'black',
        }}
        bgColor='black'
        color='white'
        border='1px'
        borderColor='black'
        size='sm'
        ml='3'>
        Download
      </Button>
    </Box>
  );
};

export default QRCode;

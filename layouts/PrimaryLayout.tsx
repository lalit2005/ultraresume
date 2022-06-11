import Nav from '@/components/Nav';
import { Box } from '@chakra-ui/react';

const PrimaryLayout: React.FC = (props) => {
  return (
    <Box>
      <Nav />
      <Box>
        <Box mb='32'>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default PrimaryLayout;

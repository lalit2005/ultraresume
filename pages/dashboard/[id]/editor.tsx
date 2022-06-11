import Default from '@/components/templates/Default';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

const EditorPage = () => {
  return (
    <DashboardLayout>
      <Box mt='-16'>
        <Grid
          // templateRows='repeat(2, 1fr)'
          templateColumns='repeat(12, 1fr)'
          gap={4}>
          <GridItem colSpan={8}>
            <Box h='85vh' overflowY='scroll' w='full'>
              <Default />
            </Box>
          </GridItem>
          <GridItem
            colSpan={4}
            bg={useColorModeValue('gray.200', 'gray.900')}
            shadow='lg'
            borderRadius='md'
            // maxH='80%'
            // h='full'
            h='85vh'>
            Controls
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default EditorPage;

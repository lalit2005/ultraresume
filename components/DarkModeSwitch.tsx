import { useColorMode, IconButton, Box } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import ProfileDropdown from './ProfileDropdown';

export const DarkModeSwitch: React.FC<{ showPfp?: boolean }> = ({
  showPfp,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Box
      display='flex'
      alignItems='center'
      position='fixed'
      bottom={4}
      left={4}>
      <IconButton
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label='Toggle Theme'
        onClick={toggleColorMode}
        mr='2'
      />
      {showPfp && <ProfileDropdown />}
    </Box>
  );
};

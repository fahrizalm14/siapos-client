import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  BoxProps,
} from '@chakra-ui/react';
import NavItem from './NavItem';
import { useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import LinkItems from '../routes/LinkItems';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation();
  const parentLocation = location.pathname.slice(1).split('/')[0];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      overflow="scroll"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(({ name, path, icon }) => (
        <NavItem
          key={name}
          path={path}
          icon={icon}
          bg={parentLocation.includes(path) ? 'cyan.400' : undefined}
          color={parentLocation.includes(path) ? 'white' : undefined}
        >
          {name}
        </NavItem>
      ))}
    </Box>
  );
};

export default Sidebar;

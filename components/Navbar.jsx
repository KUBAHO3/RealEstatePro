import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Center, MenuDivider, Avatar, Button, useColorMode,} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout, FcSearch } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () =>{
    const { colorMode, toggleColorMode } = useColorMode();

    return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100" position="sticky">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingleft="2">Heaven</Link>
        </Box>
        <Spacer/>
        <Box>
            
            <Menu>
               <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.600"/> 
               <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
               </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                size={'sm'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
                </Center>
                <br />
                <Center>
                <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Menu >
                <Button onClick={toggleColorMode} size='sm' borderRadius="full" m="2">
                    {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                </Button>
            </Menu>
        </Box>
    </Flex>
)};
export default Navbar;

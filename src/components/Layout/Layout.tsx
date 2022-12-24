import React from 'react';
import {Flex, useColorModeValue, useColorMode} from '@chakra-ui/react'
import Nav from './Nav';
import { Global, css } from '@emotion/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const bg = useColorModeValue('gray.100', 'gray.900');
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
        {colorMode === 'light' ? <Global styles={css`body { background-image: url("src/assets/alexisnco-background-design-1-back.png"); background-size: contain; !important; }`}/> : <Global styles={css`body { background-image: url("src/assets/alexisnco-background-design-1-skin.png"); background-size: contain; !important; }`}/>}
        <Nav/>
        <Flex flexDir={'column'} maxW={'full'}>
            <Flex mt={{base: '4rem', md: '0'}}>
                {props.children}
            </Flex>
        </Flex>
    </>
  );
};

export default Layout;

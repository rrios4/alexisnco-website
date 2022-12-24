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
        {colorMode === 'light' ? <Global styles={css`body { background-image: url("https://raw.githubusercontent.com/rrios4/alexisnco-website/master/src/assets/alexisnco-background-design-1-back.png?token=GHSAT0AAAAAAB4QVE2FUU65QM2GJVNRCE3YY5HGNCA"); background-size: contain; !important; }`}/> : <Global styles={css`body { background-image: url("https://raw.githubusercontent.com/rrios4/alexisnco-website/master/src/assets/alexisnco-background-design-1-skin.png?token=GHSAT0AAAAAAB4QVE2FPBUMX26BPKGJHQWUY5HGMQQ"); background-size: contain; !important; }`}/>}
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

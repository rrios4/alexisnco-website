import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
    Input,
    Button,
    Flex
  } from '@chakra-ui/react';
  import { BiMailSend } from 'react-icons/bi';
  
  export default function SmallWithNavigation() {
    return (
      <Box
        bg={useColorModeValue('#E8EA36', 'gray.800')}
        color={useColorModeValue('gray.700', 'gray.200')}
        px={'1px'}
        bottom={'0'}
        left={'0'}
        w={'full'}
        pb={{base: '2rem', md: '0'}}
        mt={{base: '2rem', md: '1rem'}}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          {/* <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack> */}
          <Text>© 2022 Alexis&Co. All rights reserved</Text>
          <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
            <Flex alignItems={'center'} justifyContent={{base: 'center', md: 'flex-end'}} w={{base: '', md: '220px'}} px={{base: '', md: '4px'}} >
                <Text>Subscribe for Newsletters</Text>
            </Flex>
            <Input
              type={'text'}
              maxW={'220px'}
              placeholder={'Your email address'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.700')}
              rounded={'full'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
              disabled
            />
            <Button
              bg={useColorModeValue('blue.500', 'green.400')}
              rounded={'full'}
              color={useColorModeValue('black', 'white')}
              flex={'1 0 auto'}
              _hover={{ bg: useColorModeValue('blue.300', 'green.500') }}
              _focus={{ bg: 'green.400' }}
              disabled>
              <BiMailSend/>
            </Button>
          </Stack>
          
        </Container>
      </Box>
    );
  }
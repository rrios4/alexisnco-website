import { useState } from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  Input,
  SimpleGrid,
  Image,
  StackDivider,
  VStack,
  List,
  ListItem,
  Card,
  useColorMode,
  IconButton, 
  useBreakpointValue
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi'
import { MdLocalShipping } from 'react-icons/md';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Countdown from 'react-countdown';
import DigitalClock from './components/DigitalClock';
import SimpleSlider from './components/SimpleSlider';


function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxW={'3xl'}>
        <Flex flexDir={'column'} mt={{base: '2rem', md:'6rem'}} justify={'center'}>
          <Flex justifyContent={'center'}>
            {colorMode === 'light' ? <Image src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-header-logo-v2-yellow-001.png?raw=true' w={{base: '150px', md:'180px'}} /> : <Image src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-header-logo-v2-pascalpurple-001.png?raw=true' w='200px' />}
          </Flex>
          <Flex justifyContent={'center'} fontWeight='thin' color={'white'}>
            <Text fontSize={'2xl'} textAlign='center' py={'1rem'}><DigitalClock /></Text>
            <Text fontSize={'2xl'} textAlign='center' py={'1rem'} ml='10px'>Houston, TX</Text>
          </Flex>
          <Flex justifyContent={'center'} mt={'10px'} mb={'4rem'}>
            <Flex maxW={{base: '300px',md:'350px'}} flexDir={'column'}>
              <Text fontSize={{base: '4xl', md: '5xl'}}  align={'center'} color={'#E8EA36'} textShadow={'2xl'}>ГЕОПОЛИТИКА ЗАСТАЛА МОЕГО СЫНА УБИТЬ СВОЮ ВЕРБОВКУ</Text>
              <Text fontSize={'sm'} align={'center'} color={'#E8EA36'} mt={'1rem'}>"GEOPOLITICS MADE MY SON KILL HIS RECRUITER"</Text>
              <Text fontSize={{base: '5xl', md: '6xl'}} fontWeight='extrabold' mt={'1rem'} textAlign='center' color={'white'}>
                <Countdown date={Date.parse("2023-01-15T16:00:00.000-06:00")}>
                  {/* <RenderProduct /> */}
                  <Button disabled>AVAILABLE NOW</Button>
                </Countdown>
              </Text>
            </Flex>
          </Flex>
          {/* <Flex flexDir={'column'} mb='3rem'>
            <Text fontSize={'6xl'} fontWeight='bold' textAlign='center'>
              <Countdown date={Date.parse("2022-12-28T16:00:00.000-06:00")}>
                <RenderProduct />
              </Countdown>
            </Text>
          </Flex> */}
        </Flex>
        {/* <Flex justifyContent={'center'} flexDir='column' mb={'2rem'}>
          <Flex justifyContent={'center'}>
            <Text fontSize={{base: '2xl', md:'3xl'}} fontWeight='bold'>2022 Fall Winter LookBook</Text>
          </Flex>
          <Flex justifyContent={'center'} my='1rem'>
             <SimpleGrid spacing={2} minChildWidth='200px'>
                <Image src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-instapost-03.jpeg?raw=true' minW='100px' rounded='md'/>
                <Image src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-instapost-02.jpeg?raw=true' minW='100px' rounded='md'/>
                <Image src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-instapost-04.jpeg?raw=true' minW='100px' rounded='md'/>
              </SimpleGrid> 
          </Flex>
        </Flex> */}
        <Flex maxWidth={'full'} flexDir='column' mb={'2rem'}>
          <Flex justifyContent={'center'}>
              <Text fontSize={{base: '2xl', md:'3xl'}} fontWeight='bold' color={'white'}>2022 Fall Winter LookBook</Text>
          </Flex>
          <SimpleSlider/>
        </Flex>



        {/* Product Card */}
        {/* <SimpleGrid
          columns={{ base: 1, lg: 1 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex bg={useColorModeValue('white', 'gray.800')} p={'3rem'} shadow={'2xl'} border={'1px'} flexDir={"column"} borderColor={useColorModeValue('gray.300', 'gray.700')} rounded={'xl'}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={
                  'https://media.glamour.com/photos/5d00082b820a316081b62065/4:3/w_1500,h_1125,c_limit/GettyImages-1014153110.jpg'
                }
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'} mt={'2rem'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  Cotton Weave Shirt
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}>
                  $88.00 USD
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Chronograph</ListItem>
                      <ListItem>Master Chronometer Certified</ListItem>{' '}
                      <ListItem>Tachymeter</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Anti‑magnetic</ListItem>
                      <ListItem>Chronometer</ListItem>
                      <ListItem>Small seconds</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Between lugs:
                      </Text>{' '}
                      20 mm
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Bracelet:
                      </Text>{' '}
                      leather strap
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case:
                      </Text>{' '}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case diameter:
                      </Text>{' '}
                      42 mm
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Dial color:
                      </Text>{' '}
                      Black
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Crystal:
                      </Text>{' '}
                      Domed, scratch‑resistant sapphire crystal with anti‑reflective
                      treatment inside
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Water resistance:
                      </Text>{' '}
                      5 bar (50 metres / 167 feet){' '}
                    </ListItem>
                  </List>
                </Box>
              </Stack>

              <Button
                rounded={'md'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('gray.900', 'gray.50')}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}>
                Purchase
              </Button>

              <Stack direction="row" alignItems="center" justifyContent={'center'}>
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </Flex>
        </SimpleGrid> */}

        {/* Hero information data */}
        {/* <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Fashion to empower<br />
            <Text as={'span'} color={'green.400'}>
              and inspire confidence
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Welcome to Alexis&Co, the premier destination for fashion-forward individuals looking to elevate their wardrobe and express their personal style.
            All of our clothing is made with the highest quality materials and attention to detail, ensuring that you look and feel your best.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at $15/mo
              </Text>
            </Box>
          </Stack>
        </Stack> */}


        {/* Email Stay up to date card */}
        {/* <Stack
          mt={'1rem'}
          mb={'3rem'}
          border={'1px'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          boxShadow={'xl'}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'xl'}
          p={10}
          spacing={8}
          align={'center'}>
          <Icon as={FiMail} w={24} h={24} color={useColorModeValue('yellow.500', 'yellow.300')} />
          <Stack align={'center'} spacing={2}>
            <Heading
              textTransform={'uppercase'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.800', 'gray.200')}>
              Subscribe
            </Heading>
            <Text fontSize={'lg'} color={'gray.500'}>
              Subscribe for updates on our  upcoming releases!
            </Text>
          </Stack>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
            <Input
              type={'text'}
              placeholder={'john@doe.net'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.700')}
              rounded={'full'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
            />
            <Button
              bg={useColorModeValue('yellow.500', 'yellow.300')}
              rounded={'full'}
              color={useColorModeValue('white', 'black')}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.400' }}
              _focus={{ bg: 'blue.400' }}>
              Subscribe
            </Button>
          </Stack>
        </Stack> */}
      </Container>
    </>
  )
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

const RenderProduct = () => {
 
 return (
  <>
    <Flex flexDir={'column'} mb='0rem'>
      <Flex justifyContent={'center'} my='2rem'>
          <Flex mx={'1rem'}>
            <Image rounded={'8'} src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/item-1-jadedgreen-2-masked.png?raw=true'/>
          </Flex>
          <Flex mx={'1rem'}>
            <Image rounded={'8'} src='https://github.com/rrios4/alexisnco-website/blob/master/src/assets/item-1-jadedgreen-1-masked.png?raw=true'/>
          </Flex>
      </Flex>
      <Flex justifyContent={'center'} flexDir='column'>
          <Text fontSize={'2xl'} mb='1rem' fontWeight={'700'}>$220 USD</Text>
          <Flex justifyContent={'center'}>
            <Button disabled>SOLD OUT</Button>
          </Flex>
      </Flex>
    </Flex>
  </>
 )

}

export default App

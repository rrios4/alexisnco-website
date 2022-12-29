import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, HStack, Text, Image, useColorMode } from "@chakra-ui/react";

type SlideProps = {
    title: string;
    imgURL: string;
}

const Slide = ({title, imgURL}: SlideProps) => {
    return(
        <HStack
        w="100%"
        h={{base: '400px',md: '600px'}}
        bg="gray.100"
        border="cyan.700"
        alignContent="center"
        justifyContent="center"
        mx="0">
            <Image src={imgURL} w='full' h="full"/>
        </HStack>
    );
};

export default function SimpleSlider() {
    const { colorMode, toggleColorMode } = useColorMode();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true
    };
    return (
      <Box m={'1rem'} p='1rem' minWidth={'120px'}>
        <Box
         sx={{
            ".slick-dots": {
              transform: "translateY(1em)",
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "green.400",
                w: '15px',
                h: '15px'
              },
            },
            ".slick-arrow": {
              backgroundColor: "green.400",
              color: "white",
              w: "30px",
              h: "50px",
              rounded: '6',
              transition: "0.2s",
              _hover: {
                backgroundColor: "green.400",
                color: "white"
              },
              _focus: {
                backgroundColor: "green.400",
                color: "white"
              },
              _before: {
                transition: "0.2s"
              }
            },
            ".slick-prev": {
              left: "-40px",
              _before: {
                content: '"◀"'
              }
            },
            ".slick-next": {
              right: "-40px",
              _before: {
                content: '"▶"'
              }
            }
          }}>
            <Slider {...settings}>
                <Slide title="Image 1" imgURL="https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-instapost-03.jpeg?raw=true"/>
                <Slide title="Image 2" imgURL="https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-instapost-02.jpeg?raw=true"/>
                <Slide title="Image 3" imgURL="https://github.com/rrios4/alexisnco-website/blob/master/src/assets/alexisnco-instapost-04.jpeg?raw=true"/>
            </Slider>
        </Box>
      </Box>
    );
  }
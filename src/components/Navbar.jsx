import React from 'react'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Img,
  Span,
  VStack,
  Heading,

} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div>
      <Box  >
        <Flex p={6} justifyContent={"space-around"} >
          <HStack spacing={50} marginRight={"10%"}  >

            <Img src={"https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"} />

            <Box>Menu</Box>
            <Box>Deals</Box>
          </HStack>
          <HStack spacing={7} marginLeft={"10%"} >
            <HStack spacing={4} >
              <Img src={'https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg'} />
              <Heading fontSize={"16px"}>Account</Heading>
            </HStack>
            <HStack spacing={0} >

              <span>{`rs 0 `}</span> <Img w={"51px"} h={"51px"} marginTop={"5px"} src={"https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"} />
            </HStack>
          </HStack>
        </Flex>
      </Box>


    </div>
  )
}

export default Navbar
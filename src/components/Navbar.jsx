import React, { useContext } from 'react'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
 
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
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthConext';

const Navbar = () => {
  const [isAuth,dispatch] = useContext(AuthContext)
  return (
    <div>
      <Box  >
        <Flex p={6} justifyContent={"space-around"} >
          <HStack spacing={50} marginRight={"10%"}  >

          <NavLink to='/'>
          
            <Img src={"https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"} />
          </NavLink>

            <Box> <NavLink to='menu'>Menu</NavLink> </Box>
            <Box> <NavLink to='deals'>Deals</NavLink> </Box>
          </HStack>
          <HStack spacing={7} marginLeft={"10%"} >
            <HStack spacing={4} >
              <Img src={'https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg'} />
              <Heading fontSize={"16px"}> <NavLink to='account'> {isAuth ? "Account" : "Sign In"}  </NavLink> </Heading>
            </HStack>
            <HStack spacing={0} >

              <span>{`rs 0 `}</span> <NavLink to='cart'>
               <Img w={"51px"} h={"51px"} marginTop={"5px"} src={"https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"} />
              </NavLink>
            </HStack>
          </HStack>
        </Flex>
      </Box>


    </div>
  )
}

export default Navbar
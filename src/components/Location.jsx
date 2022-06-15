import { Box, Button, HStack, Text, Center, Heading, VStack, Stack } from "@chakra-ui/react";
import React from "react";

const Location = () => {
  return (
    <div>
      <Box color={"white"} backgroundColor={"black"} p={5}  >
        <Center>
          <HStack>
            <Text>Dine at KFC : "Akshardam"</Text>
            <Text>ASAP</Text>
            <Button colorScheme={"black"} color={"white"} variant={"outline"} borderRadius={"50px"} >change</Button>
          </HStack>
        </Center>
      </Box>
      <Box  >
        <Center marginTop={"50px"} marginBottom={"50px"}>
          <VStack spacing={30}>
            <Heading fontSize={"20px"}>SELECT YOUR ORDER TYPE TO START</Heading>

            <Box>
              <HStack w={'450px'} display={'flex'} justifyContent='space-between' bgColor={"#e3e3e3"}   borderRadius={"100px"}>
              <HStack p={3} w ={'250px'}display={'flex'} justifyContent={'space-around'}>
                
                  <Text fontWeight={"bold"}>DELEIVERY</Text>
                <Text fontWeight={"bold"}>PICKUP</Text>
                </HStack>
                <Button marginLeft={"100px"} w={"150px"} borderRadius={"100px"} colorScheme={"red"} color={"white"}   >DINE IN</Button>
              </HStack>
            </Box>
          </VStack>
        </Center>
      </Box>

    </div>
  );
};

export default Location;

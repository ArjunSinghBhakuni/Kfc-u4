import { Box, Button, HStack, Text, Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const Location = () => {
  return (
    <div>
      <Box color={"white"} backgroundColor={"black"} p={5}  >
        <Center>
          <HStack>
            <Text>Dine at KFC : "Akshardam"</Text>
            <Text>ASAP</Text>
            <Button color={"white"} border={"outline"} >change</Button>
          </HStack>
        </Center>
      </Box>
      <Box  >
        <Center marginTop={"50px"} marginBottom={"50px"}>
          <VStack spacing={30}>
            <Heading fontSize={"20px"}>SELECT YOUR ORDER TYPE TO START</Heading>

            <Button >Dilvery  Peak Dine</Button>
          </VStack>
        </Center>
      </Box>

    </div>
  );
};

export default Location;

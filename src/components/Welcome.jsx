import { Box,Text,Stack,VStack,Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Welcome = () => {
  return (
    <div>
     <Box p={10} backgroundColor={"#f8f7f5"}  spacing={4} paddingLeft={150}>
     
      <VStack alignItems={"flex-start"} >
       <Heading>Welcome Back</Heading>
       <Heading>KFC Coloner</Heading>
      </VStack>
      
      <Stack marginTop={"25px"}>

       <Text>myAccount ---- </Text>
      </Stack>
       
     </Box>
    </div>
  )
}

export default Welcome
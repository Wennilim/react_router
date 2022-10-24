import { Text, Flex,Input,Button, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook, AiFillGoogleSquare} from "react-icons/ai";

export default function SignUp() {
  return (
    <>
    <Flex
      direction="column"
      justifyContent="center"
      bgColor="gray.100"
      // w={[250,300,300,400,500]}
      // h={400}
      // marginX="30"
      // borderRadius={30}
    >
      <Text textAlign="center" margin="50" fontWeight='bold'>
        Sign Up
      </Text>
      <Flex flexDirection="column" padding="5">
        
          <Input
            size="sm"
            placeholder="email@example.com"
            marginBottom="3"
            variant="filled"
            focusBorderColor="gray.700"
          ></Input>
     
            <Input
              size='sm'
              type='password'
              placeholder="password"
              flexDirection="row"
              focusBorderColor="gray.700"
              variant="filled"
            ></Input>
          
          <Button size='sm'>Sign Up</Button>
          <Text fontSize='18px' paddingTop='5' textAlign='center' paddingX='2' color='gray.400'> _____or sign up with _____</Text>
          <HStack justifyContent='center' padding='5'>
            <IconButton><AiFillFacebook/></IconButton>
            <IconButton><AiFillGoogleSquare/></IconButton>
          </HStack>
      </Flex> 

      
    </Flex>
  </>
    
  )
}

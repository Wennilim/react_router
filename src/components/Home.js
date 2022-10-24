import {
  Text,
  Flex,
  Input,
  Button,

} from "@chakra-ui/react";
import { React } from "react";



export default function Home() {

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        bgColor="gray.100"
        // w={[250,300,300,400,500]}
        // h={300}
        // marginX="30"
        // borderRadius={30}
      >
        <Text textAlign="center" margin="50" fontWeight='bold' paddingTop='-8'>
          Welcome to Atoz
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
            
            <Button marginTop='3' size='sm'>LOGIN</Button>
        </Flex> 

        
      </Flex>
    </>
  );
}

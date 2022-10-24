import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { FiActivity } from "react-icons/fi"



export default function Navbar() {
  return (
    <Box bgColor="black">
      <Flex
        direction="row"
        marginBottom={8}
        paddingX={5}
        paddingY={5}
        justifyContent="space-between"
      >
        <Flex >
        <FiActivity color="white"  />
        
          <Text marginLeft='3' color='white'>ATOZ </Text>
        </Flex>
        

        <Flex alignItems="center" gap={["3", "3", "3", "5", "10"]}>
        <Link className='link' to="/"> Home</Link>
        <Link className='link' to ="/about"> About</Link>
        <Link className='link' to="/contactus"> Contact Us</Link>
        <Link className='link' to="/signup"> Sign Up</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Flex direction='column' padding='10' bgColor='gray.100'>
      <Text fontWeight='bold' fontSize='36px' textAlign='match-parent'>About Us</Text>
      <Text paddingTop='5'>
        ATOZ was founded in 2022 by a group of friends who had the same passion
        – to support growing businesses. An experienced team that implements
        process management systems and emphasizes on smooth project transition,
        from manual processes to digitized approaches.
      </Text>
    </Flex>
  );
}

import React from "react";
import {
  Flex,
  Text,
  Input,
  Textarea,
  Button,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function ContactUs() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      bgColor="gray.100"
      // w={[250, 300, 300, 400, 500]}
      // h={600}
      // marginX="30"
      // borderRadius={30}
    >
      <Text paddingTop='8' textAlign="center" fontWeight="bold">
        Contact Us
      </Text>
      <Flex direction="column" padding="5">
        <Input
          variant="flushed"
          placeholder="FullName"
          borderColor="gray.700"
          focusBorderColor="gray.700"
        />
        <Input
          variant="flushed"
          placeholder="Email@example.com"
          borderColor="gray.700"
          focusBorderColor="gray.700"
        />
        <Textarea
          variant="flushed"
          placeholder="Leave a message..."
          borderColor="gray.700"
          focusBorderColor="gray.700"
        />
        <Button margin="2" borderRadius={50}>
          Submit
        </Button>
        <HStack justifyContent="center">
          <IconButton>
            <AiFillFacebook />
          </IconButton>
          <IconButton>
            <AiFillInstagram />
          </IconButton>
          <IconButton>
            <AiFillTwitterSquare />
          </IconButton>
        </HStack>
        <Flex
          direction="column"
          justifyContent="center"
          // bgColor="gray.500"
          // w={200}
          // h={150}
          // marginX='5'
          paddingTop={10}
          borderRadius={40}
        >
          <Text color="gray.700" fontSize="18px" textAlign="center">
            hr@atoz-software.tech
          </Text>
          <Text color="gray.700" fontSize="18px" textAlign="center">
            +6012-3456789
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

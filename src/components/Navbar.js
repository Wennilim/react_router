import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import NavTitle from "./NavTitle";
import { FiActivity } from "react-icons/fi";

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
        <FiActivity color="white" />
        <Text>Heart </Text>

        <Flex alignItems="center" gap={["3", "3", "3", "5", "10"]}>
          <NavTitle title="Home" />
          <NavTitle title="About" />
          <NavTitle title="Sign In" />
          <NavTitle title="Sign Up" />
        </Flex>
      </Flex>
    </Box>
  );
}

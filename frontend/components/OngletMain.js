import React from "react";
import { Flex } from "@chakra-ui/react";

export default function OngletMain({ children }) {
  return (
    <Flex
      flex={1}
      direction={"column"}
      borderRadius={"35px"}
      backgroundColor={"brand.100"}
      m={3}
      padding={3}
    >
      {children}
    </Flex>
  );
}

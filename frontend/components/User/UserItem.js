import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function UserItem(props) {
  return (
    <li>
      <Flex>
        <Flex m={5}>
          <h3>{props.id}</h3>
        </Flex>
        <Flex m={5}>
          <Image src={props.image} alt={props.name} height={200} width={200} />
        </Flex>
        <Flex m={5}>
          <h2>{props.name}</h2>
        </Flex>
        <Flex m={5}>
          <h3>{props.email}</h3>
        </Flex>
      </Flex>
    </li>
  );
}

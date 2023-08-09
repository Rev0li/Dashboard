import React from "react";

import OngletMain from "../OngletMain";
import { Flex } from "@chakra-ui/react";

export default function ClientOnglet() {
  const CLIENT = [{}];
  return (
    <OngletMain>
      <h2>Mes clients</h2>
      <Flex>
        <ul>
          <li>client 1</li>
          <li>client 2</li>
          <li>client 3</li>
        </ul>
      </Flex>
    </OngletMain>
  );
}

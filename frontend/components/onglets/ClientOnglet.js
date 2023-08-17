import React from "react";
import UserList from "../User/UserList";

import OngletMain from "../OngletMain";
import { Flex } from "@chakra-ui/react";
import profilPict1 from "../img/gallery5.png";
import profilPict2 from "../img/IMG_6817.JPG";

export default function ClientOnglet() {
  const CLIENT = [
    { id: "u1", name: "oliver", image: profilPict1, mail: "ktz@gmail.com" },
    {
      id: "u2",
      name: "ouioui",
      image: profilPict2,
      mail: "ouioui@gmail.com",
    },
  ];
  return (
    <OngletMain>
      <UserList items={CLIENT} />
    </OngletMain>
  );
}

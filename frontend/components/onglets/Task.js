// components/Task.js
import React from "react";
import { Button, Card, Flex } from "@chakra-ui/react";

const Task = ({ task, onDelete }) => {
  return (
    <Flex w={"30vw"} bg={"#F1f1f1"} m={5} textAlign={"center"}>
      <span>{task}</span>
      <Button colorScheme="red" onClick={onDelete}>
        Supprimer
      </Button>
    </Flex>
  );
};

export default Task;
